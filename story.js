export const storyLayers = [
  [{ id: "1", name: "Welcome to Vanguard Estates", children: [2, 3] }],
  [
    { id: "2", name: "Stay at Vanguard", children: [6, 7] },
    { id: "3", name: "Bring Him Home", children: [4, 5] },
  ],
  [
    { id: "6", name: "Use Drop-In", children: [12, 13] },
    { id: "7", name: "Disable Drop-In", children: [14, 15] },
    { id: "4", name: "Buy A Home Robot", children: [8, 9] },
    { id: "5", name: "Call Him More", children: [10, 11] },
  ],[
    { id: "12", name: "Don't Tell Him", children: [22, 23] },
    { id: "13", name: "Tell Him", children: [24, 25] },
    { id: "14", name: "Robot Baths", children: [26, 27] },
    { id: "15", name: "Human Baths", children: [] },
    { id: "8", name: "Explain Missy", children: [16, 17] },
    { id: "9", name: "Don't Explain Missy", children: [] },
    { id: "10", name: "Install Cameras", children: [18, 19] },
    { id: "11", name: "Move Him In", children: [20, 21] },
  ],
  [
    { id: "22", name: "Stop the Robot", children: [] },
    { id: "23", name: "Trust the Robot", children: [] },
    { id: "24", name: "Keep His Secret", children: [] },
    { id: "25", name: "Report Him", children: [] },
    { id: "26", name: "Break the News", children: [] },
    { id: "27", name: "Keep Quiet", children: [] },
    {},
    {},
    { id: "16", name: "Go To Manila", children: [] },
    { id: "17", name: "Don't Go To Manila", children: [] },
    {},
    {},
    { id: "18", name: "Handle it Yourself", children: [] },
    { id: "19", name: "Pay for Help", children: [] },
    { id: "20", name: "Drop Out of School", children: [] },
    { id: "21", name: "Take Out a Loan", children: [] },
  ]
];

export const allStories = storyLayers.reduce((acc, stories) => {
  const newStories = stories.reduce((acc, story) => {
    acc[story.id] = story;
    return acc;
  }, {});
  Object.assign(acc, newStories)
  return acc;
}, {});
