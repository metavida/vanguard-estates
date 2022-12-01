/*
Copyright (C) 2022 Marcos Wright-Kuhns
All Rights Reserved
*/
import { storyLayers, allStories } from "./story.js";

let autoPlay;
const setAutoPlay = (value) => {
  autoPlay = !!value;
  window.localStorage.setItem("auto_play", value ? "true" : "");
};

const initAutoPlay = () => {
  autoPlay = window.localStorage.getItem("auto_play");
  const autoPlayEl = document.getElementById("auto_play");
  if (autoPlay === null || autoPlay) {
    setAutoPlay(true);
    autoPlayEl.checked = true;
  } else {
    setAutoPlay(false);
    autoPlayEl.checked = false;
  }
  autoPlayEl.addEventListener("change", ({ target }) =>
    setAutoPlay(target.checked)
  );
};

if ("content" in document.createElement("template")) {
  console.log("A supported browser!");
} else {
  console.warn("Need to polyfill template cloning?");
}

const render = () => {
  const getStartedLink = document.querySelector("header .start > div");
  getStartedLink.addEventListener("click", (event) =>
    focusStory({ storyId: 1, event })
  );
  getStartedLink.addEventListener("keydown", (event) => {
    const { code } = event;
    if (code === "Enter" || code === "Space") {
      focusStory({ storyId: 1, event });
    }
  });
  const getAboutLink = document.querySelector("footer a");
  getAboutLink.addEventListener("click", (event) => focusAbout({ event }));

  if (window.location.search === "?tree") {
    renderTree();
  } else if (window.location.search === "?single") {
    renderVertical({ className: "single" });
  } else {
    renderVertical({ className: "vertical" });
  }
};

const renderVertical = ({ className }) => {
  document.querySelector("html").classList.add(className);
  const main = document.querySelector("main");
  main.classList.add(className);

  for (let id = 1; id < Object.keys(allStories).length; id++) {
    const story = allStories[id];
    renderStory({ story, parentEl: main });
  }
};

const renderTree = () => {
  document.querySelector("html").classList.add("tree");
  const main = document.querySelector("main");
  main.classList.add("tree");

  storyLayers.forEach((basicStories, index) => {
    const stories = basicStories.map(({ id }) => allStories[id]);
    renderRow({
      stories,
      parentEl: main,
      index,
    });
  });
};

const renderRow = ({ stories, parentEl, index }) => {
  const rowEl = document.createElement("div");
  rowEl.setAttribute("id", `row-${index}`);
  rowEl.classList.add("row");
  stories.forEach((story) => {
    renderStory({ story, parentEl: rowEl });
  });

  parentEl.append(rowEl);
};

const renderStory = ({ story, parentEl }) => {
  const storyEl = document.createElement("div");
  storyEl.classList.add("story");
  storyEl.setAttribute("tabindex", "-1");

  if (story.id) {
    const { id: storyId, name, children, parent } = story;
    storyEl.setAttribute("id", `story-${storyId}`);

    const cellTemp = document.getElementById("cell_template");
    storyEl.append(cellTemp.content.cloneNode(true));

    storyEl.querySelector("h2").textContent = `${storyId}. ${name}`;
    const imgEl = storyEl.querySelector("img");
    imgEl.setAttribute(
      "src",
      `https://megaphone.imgix.net/podcasts/${story.image.megaphone}?max-w=300&max-h=300&fit=crop&auto=format,compress`
    );
    imgEl.setAttribute("alt", story.image.alt);

    const audioEl = storyEl.querySelector(".player audio");
    audioEl.setAttribute("src", story.audio.url);
    audioEl.addEventListener("play", () =>
      handlePlayStart({ audioEl, storyEl, storyId })
    );
    audioEl.addEventListener("pause", () => pauseCurrentAudio({ audioEl }));

    const transcriptEl = storyEl.querySelector("details");
    loadTranscript({ storyEl, storyId });
    const transcriptToggleEl = transcriptEl.querySelector("summary");
    transcriptToggleEl.addEventListener("click", (event) => {
      toggleTranscript({ storyEl });
    });
    transcriptToggleEl.addEventListener("keydown", (event) => {
      const { code } = event;
      if (code === "Enter" || code === "Space") {
        event.preventDefault();
        toggleTranscript({ storyEl });
      }
    });

    const childrenEl = storyEl.querySelector(".children");
    const childrenList = childrenEl.querySelector("ol");
    if (children.length) {
      children.forEach((childId) =>
        renderStoryNavLink({
          storyId: childId,
          parentEl: childrenList,
          pauseCurrent: true,
        })
      );
    } else {
      const endEl = childrenEl.querySelector("p");
      endEl.textContent = "The End";

      renderStoryNavLink({
        storyId: 1,
        parentEl: childrenList,
        className: "restart",
        pauseCurrent: true,
      });
    }
    if (parent) {
      renderStoryNavLink({
        storyId: parent,
        parentEl: childrenList,
        className: "back",
        noPlay: true,
        pauseCurrent: true,
      });
    } else {
      renderAboutNavLink({
        parentEl: childrenList,
      });
    }

    storyEl.addEventListener("click", (event) => {
      focusStory({
        storyId,
        event,
        // Don't try to auto-play if we clicked inside the transcript area.
        noPlay: event.composedPath().includes(transcriptEl),
      });
    });
    storyEl.addEventListener("keydown", (event) => {
      const { target, code } = event;
      if (target === storyEl) {
        if (code === "Enter" || code === "Space") {
          event.preventDefault();
          togglePlayPause({ audioEl });
        }
      }
    });
  } else {
    storyEl.classList.add("hidden");
  }

  parentEl.append(storyEl);
};

const togglePlayPause = ({ audioEl }) => {
  if (audioEl.classList.contains("playing")) {
    audioEl.pause();
  } else {
    audioEl.play();
  }
};
const pauseCurrentAudio = () => {
  const prevAudioEl = document.querySelector(".playing");
  if (prevAudioEl) {
    prevAudioEl.classList.remove("playing");
    prevAudioEl.pause();
  }
};
const handlePlayStart = ({ audioEl, storyEl, storyId }) => {
  pauseCurrentAudio();
  audioEl.classList.add("playing");
  if (!storyEl.classList.contains("focused")) {
    focusStory({ storyId, noPlay: true });
  }
};

const toggleTranscript = ({ storyEl }) => {
  const transcriptEl = storyEl.querySelector("details");
  if (transcriptEl.open) {
    storyEl.classList.remove("show-transcript");
    transcriptEl.open = false;
  } else {
    storyEl.classList.add("show-transcript");
    transcriptEl.open = true;
  }
};

const loadTranscript = async ({ storyEl, storyId }) => {
  const transcriptHolderEl = storyEl.querySelector(".transcript");
  if (transcriptHolderEl.dataset.fetched === "false") {
    transcriptHolderEl.dataset.fetched = "true";
    const transcriptText = await fetchTranscript({ storyId });
    transcriptHolderEl.innerHTML = transcriptText;
  }
};

const fetchTranscript = async ({ storyId }) => {
  try {
    const resp = await fetch(`./transcripts/${storyId}.html`);
    if (!resp.ok) {
      throw "Failed to fetch story";
    }
    const body = await resp.text();
    return body;
  } catch (err) {
    return `Failed to load transcript for Story ${storyId}.`;
  }
};

const renderNavLink = ({ parentEl, number, text, url, onClick, className }) => {
  const listEl = document.createElement("li");
  listEl.setAttribute("value", number);
  listEl.classList.add(className || "child");
  listEl.setAttribute("tabindex", "0");
  listEl.addEventListener("click", onClick);
  listEl.addEventListener("keydown", (event) => {
    const { code } = event;
    if (code === "Enter" || code === "Space") {
      event.preventDefault();
      onClick();
    }
  });

  const storyLink = document.createElement("a");
  storyLink.setAttribute("href", url);
  storyLink.setAttribute("tabindex", "-1");

  const linkText = document.createElement("span");
  linkText.textContent = text;

  storyLink.append(linkText);
  listEl.append(storyLink);
  parentEl.append(listEl);
};
const renderStoryNavLink = ({
  storyId,
  parentEl,
  className,
  noPlay,
  pauseCurrent,
}) => {
  renderNavLink({
    parentEl,
    number: storyId,
    text: allStories[storyId].name,
    className,
    url: `#view-story-${storyId}`,
    onClick: (event) =>
      focusStory({ storyId: storyId, event, noPlay, pauseCurrent }),
  });
};
const renderAboutNavLink = ({ parentEl }) => {
  renderNavLink({
    parentEl,
    number: 1,
    text: "About this site",
    className: "back",
    url: "#welcome",
    onClick: (event) => focusAbout({ event }),
  });
};

const initialFocus = () => {
  const [_, storyId] = window.location.hash?.match(/#view-story-(\d+)/) || [];
  if (storyId) {
    focusStory({ storyId, noHistory: true });
  } else if (window.location.hash === "#welcome") {
    focusAbout({ noHistory: true });
  } else {
    window.scrollTo(0, 0);
  }
};

const setTitle = (...extraText) => {
  document.title = [
    ...extraText,
    "Welcome to Vanguard Estates",
    "Fash Forward",
  ].join(" | ");
};

const scrollAndUpdateHistory = ({ event, targetEl, history }) => {
  event?.preventDefault();

  targetEl.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });

  if (history) {
    const { state, url } = history;
    window.history.pushState(state, "", url);
  }
};

const focusStory = ({ storyId, event, noHistory, noPlay, pauseCurrent }) => {
  document.querySelector(".focused")?.classList.remove("focused");
  event && event.stopPropagation();
  if (pauseCurrent) {
    pauseCurrentAudio();
  }

  const storyEl = document.getElementById(`story-${storyId}`);

  const audioEl = storyEl.querySelector(".player audio");
  if (event && event.target !== audioEl && autoPlay && !noPlay) {
    audioEl.play();
  }

  storyEl.classList.add("focused");
  document.querySelector("footer").classList.remove("hidden");

  storyEl.focus();
  scrollAndUpdateHistory({
    event,
    targetEl: storyEl,
    history: noHistory
      ? null
      : { state: { storyId }, url: `#view-story-${storyId}` },
  });
  setTitle(allStories[storyId]?.name);
};

const focusAbout = ({ event, noHistory }) => {
  document.querySelector("footer").classList.add("hidden");
  event && event.stopPropagation();
  document.querySelector("header .start > div").focus();
  scrollAndUpdateHistory({
    event,
    targetEl: document.querySelector("header > img"),
    history: noHistory ? null : { url: "#welcome" },
  });
  setTitle();
};

document.addEventListener("DOMContentLoaded", () => {
  render();
  initAutoPlay();
  initialFocus();
  window.addEventListener("popstate", initialFocus);
});
