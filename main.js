import { storyLayers, allStories } from "./story.js";

const currentStorySteps = [1, 2];

if ("content" in document.createElement("template")) {
  console.log("A supported browser!");
} else {
  console.warn("Need to polyfill template cloning?");
}

const render = () => {
  const main = document.querySelector("main");

  storyLayers.forEach((stories, index) => {
    renderRow({
      stories: stories.map(({ id }) => allStories[id]),
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

  if (story.id) {
    const { id, name, children } = story;
    storyEl.setAttribute("id", `story-${id}`);

    const cellTemp = document.getElementById("cell_template");
    storyEl.append(cellTemp.content.cloneNode(true));

    storyEl.querySelector("h2").textContent = name;
    const imgEl = storyEl.querySelector("img")
    imgEl.setAttribute("src", story.image.src);
    imgEl.setAttribute("alt", story.image.alt)
    // TODO: add audio player
    // TODO: add text reader

    const childrenEl = storyEl.querySelector(".children");
    if (children.length) {
      children.forEach((childId) =>
        renderChild({ childId, parentEl: childrenEl.querySelector("ol") })
      );
    } else {
      childrenEl.classList.add("end");
      childrenEl.textContent = "The End";
    }
  } else {
    storyEl.classList.add("hidden");
  }

  parentEl.append(storyEl);
};

const renderChild = ({ childId, parentEl }) => {
  const childEl = document.createElement("li");
  childEl.setAttribute("value", childId);
  childEl.textContent = allStories[childId].name;
  childEl.addEventListener("click", () => focusStory(childId));
  parentEl.append(childEl);
};

const focusStory = (storyId) => {
  document.querySelector(".focused")?.classList.remove("focused");
  const storyEl = document.getElementById(`story-${storyId}`);
  storyEl.classList.add("focused");
  // TODO: modify browser history & get history navigation to work
  storyEl.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  render();
  focusStory(1);
});
