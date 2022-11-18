import { storyLayers, allStories } from "./story.js";

const currentStorySteps = [1, 2];

if ("content" in document.createElement("template")) {
  console.log("A supported browser!");
} else {
  console.warn("Need to polyfill template cloning?");
}

const renderStory = () => {
  const main = document.querySelector("main");

  storyLayers.forEach((stories, index) => {
    renderRow({ stories, parentEl: main, index });
  });
};

const renderRow = ({ stories, parentEl, index }) => {
  const rowEl = document.createElement("div");
  rowEl.setAttribute("id", `row-${index}`);
  rowEl.classList.add("row");
  stories.forEach((story) => {
    renderCell({ story, parentEl: rowEl });
  });

  parentEl.append(rowEl);
};

const renderCell = ({ story, parentEl }) => {
  const storyEl = document.createElement("div");
  storyEl.classList.add("story");

  if(Object.keys(story).length) {
    const cellTemp = document.getElementById("cell_template");
    const { name, children } = story;
    storyEl.append(cellTemp.content.cloneNode(true));

    storyEl.querySelector("h2").textContent = name;

    const childrenEl = storyEl.querySelector(".children");
    if (children.length) {
      children.forEach((childId) =>
        renderChild({ childId, parentEl: childrenEl.querySelector("ol") })
      );
    } else {
      childrenEl.classList.add("end");
      childrenEl.textContent = "The End";
    }
  }


  parentEl.append(storyEl);
};

const renderChild = ({ childId, parentEl }) => {
  const childEl = document.createElement("li");
  childEl.setAttribute("value", childId);
  childEl.textContent = allStories[childId].name;
  parentEl.append(childEl);
};

document.addEventListener("DOMContentLoaded", () => {
  renderStory();
});
