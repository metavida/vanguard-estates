import { allStories } from "./story.js";

const initStoryHistory = (story) => {
  let numChildren = 0;
  if(story.children.length) {
    numChildren += story.children.length;
    story.children.forEach(storyId => {
      numChildren += initStoryHistory(allStories[storyId]);
    })
  }
  // TODO: start numListened at zero
  const numListened = Math.round(numChildren * Math.random());
  const history = (
    JSON.parse(window.localStorage.getItem(`story-${story.id}`))
    || { numListened: numListened, isListened: false }
  );
  // TODO: collect all parents
  Object.assign(allStories[story.id], history);
  return numChildren;
};
initStoryHistory(allStories[1]);

// Expose a set of APIs so that the UI
// can locally track which stories have been listened to.

// Given a storyId
// returns an object shaped like this:
// { isListenend: <bool>, numChildren: <int>, numListened: <int> }
const historyForStory = ({ storyId }) => {
  const { numChildren, numListened } = allStories[storyId]

  return {
    isListened: false,
    numChildren,
    numListened,
  };
};

export const setNavLinkHistory = ({ historyEl, storyId }) => {
  const checkImg = historyEl.querySelector("svg");
  const { numChildren, numListened } = historyForStory({ storyId })
  const percentListened = numListened / numChildren;
  if (numListened === 0) {
    historyEl.setAttribute("data-listened", "0");
  } else if (percentListened <= 0.25) {
    historyEl.setAttribute("data-listened", "25");
  } else if (percentListened <= 0.5) {
    historyEl.setAttribute("data-listened", "50");
  } else if (percentListened < 1) {
    historyEl.setAttribute("data-listened", "75");
  }
  checkImg.setAttribute("alt", `(you've listened to ${numListened} of ${numChildren} stories on this path)`);
  historyEl.setAttribute("title", `(you've listened to ${numListened} of ${numChildren} stories on this path)`);
}

export const markStoryListened = ({ storyId }) => {
  // TODO: Increment numListened for all parents
};
