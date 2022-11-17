import fullStory from "./story.js";

const currentStorySteps = [1,2];

if ("content" in document.createElement("template")) {
  console.log("A supported browser!");
} else {
  console.warn("Need to polyfill template cloning?");
}

const renderStory = () => {
  const template = document.getElementById("story_template");
  currentStorySteps.forEach((index) => {
    const { name, children } = fullStory[index];
    const storyEl = template.content.cloneNode(true);

    storyEl.querySelector("h2").textContent = name;

    const childrenEl = storyEl.querySelector(".children");
    children.forEach((childIndex) => renderChild(childIndex, childrenEl));

    document.querySelector("main").append(storyEl);
  });
};

const renderChild = (childIndex, parentEl) => {
  const childEl = document.createElement("li");
  childEl.setAttribute("value", childIndex);
  childEl.textContent = fullStory[childIndex].name;
  parentEl.append(childEl);
}

document.addEventListener("DOMContentLoaded", () => {
  renderStory();
});
