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
  1: { src: "originals/art/01.png", alt: "A robot with butler outfit carrying covered a tray of food" },
  2: { src: "originals/art/02.png", alt: "You, looking at a laptop screen" },
  3: { src: "originals/art/03.png", alt: "A frowning robot" },
  4: { src: "originals/art/04.png", alt: "A cute, orange cat robot" },
  5: { src: "originals/art/05.png", alt: "You, on the phone with your dad with your palm on your face" },
  6: { src: "originals/art/06.png", alt: "You, dumping a bag of rice on an open laptop" },
  7: { src: "originals/art/07.png", alt: "A group of robots staring at your, one with police lights on top of it" },
  8: { src: "originals/art/08.png", alt: "A cat robot looking happily down at a cell phone, about to place a call" },
  9: { src: "originals/art/09.png", alt: "Your dad with a huge cat eyeball staring at him" },
  10: { src: "originals/art/10.png", alt: "Skid marks on a road lead to a fire and a tire bouncing away from the fire" },
  11: { src: "originals/art/11.png", alt: "A house that appears to be bursting at the seems with two huge people visible through the window, filling the whole house" },
  12: { src: "originals/art/12.png", alt: "A smirking robot wearing a trench coat that is concealing pill bottels" },
  13: { src: "originals/art/13.png", alt: "A huge eyeball staring down at your dad who is cowering on the floor" },
  14: { src: "originals/art/14.png", alt: "Your dad, barely visible because he's covered in bubbles and being scrubbed by huge revolving brushes" },
  15: { src: "originals/art/15.png", alt: "You dad, peeking out of a bathtub, looking nervous" },
  16: { src: "originals/art/16.png", alt: "An airplane, flying high above the clouds" },
  17: { src: "originals/art/17.png", alt: "A robot cat, dead and laying on its side" },
  18: { src: "originals/art/18.png", alt: "You, handing your dad his car keys" },
  19: { src: "originals/art/19.png", alt: "A broken piggy bank" },
  20: { src: "originals/art/20.png", alt: "A graduation hat with a lit fuse instead of a tassle" },
  21: { src: "originals/art/21.png", alt: "You are wearing handcuffs while a person hands you money" },
  22: { src: "originals/art/22.png", alt: "You, speaking into a microphone" },
  23: { src: "originals/art/23.png", alt: "Your dad, asleep in a chair" },
  24: { src: "originals/art/24.png", alt: "Two people holding hands" },
  25: { src: "originals/art/25.png", alt: "Two people on opposite sides of a brick wall" },
  26: { src: "originals/art/26.png", alt: "Your dad, covering his face while three robot hands reach out & covering his head" },
  27: { src: "originals/art/27.png", alt: "Your dad in his bathtub with huge, stadium lights shining down on him" },
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
