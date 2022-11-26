// Expose a set of APIs so that the UI
// can locally track which stories have been listened to.

// Given a storyId
// returns an object shaped like this:
// { isListenend: <bool>, numChildren: <int>, numListened: <int> }
export const historyForStory = ({ storyId }) => {
  const numChildren = Math.ceil(27 / parseInt(storyId, 10));

  return {
    isListened: false,
    numChildren,
    numListened: Math.round(numChildren * Math.random()),
  };
};

export const markStoryListened = ({ storyId }) => {};
