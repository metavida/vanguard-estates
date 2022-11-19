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
  ],
  [
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
  ],
];

const storyImages = {
  1: "originals/art/01.png",
  2: "originals/art/02.png",
  3: "originals/art/03.png",
  4: "originals/art/04.png",
  5: "originals/art/05.png",
  6: "originals/art/06.png",
  7: "originals/art/07.png",
  8: "originals/art/08.png",
  9: "originals/art/09.png",
  10: "originals/art/10.png",
  11: "originals/art/11.png",
  12: "originals/art/12.png",
  13: "originals/art/13.png",
  14: "originals/art/14.png",
  15: "originals/art/15.png",
  16: "originals/art/16.png",
  17: "originals/art/17.png",
  18: "originals/art/18.png",
  19: "originals/art/19.png",
  20: "originals/art/20.png",
  21: "originals/art/21.png",
  22: "originals/art/22.png",
  23: "originals/art/23.png",
  24: "originals/art/24.png",
  25: "originals/art/25.png",
  26: "originals/art/26.png",
  27: "originals/art/27.png",
};

export const allStories = storyLayers.reduce((acc, stories) => {
  const newStories = stories.reduce((acc, story) => {
    acc[story.id] = {
      image: storyImages[story.id],
      ...story,
    };
    return acc;
  }, {});
  Object.assign(acc, newStories);
  return acc;
}, {});
