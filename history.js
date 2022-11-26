import { allStories } from "./story.js";

const initStoryHistory = (story) => {
  let numChildren = 0;
  if(story.children.length) {
    numChildren += story.children.length;
    story.children.forEach(storyId => {
      numChildren += initStoryHistory(allStories[storyId]);
    })
  }
  // TODO: get numListened from local storage
  const numListened = Math.round(numChildren * Math.random());
  Object.assign(allStories[story.id], { numChildren, numListened });
  return numChildren;
};
initStoryHistory(allStories[1]);

// Expose a set of APIs so that the UI
// can locally track which stories have been listened to.

// Given a storyId
// returns an object shaped like this:
// { isListenend: <bool>, numChildren: <int>, numListened: <int> }
export const historyForStory = ({ storyId }) => {
  const { numChildren, numListened } = allStories[storyId]

  return {
    isListened: false,
    numChildren,
    numListened,
  };
};

export const markStoryListened = ({ storyId }) => {};
