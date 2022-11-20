// All data in this file comes from the FlashForward RSS feed:
// https://feeds.megaphone.fm/PPY8359579005
// To see the original visit:
// https://www.flashforwardpod.com/2022/10/31/welcome-to-vanguard-estates/

export const storyLayers = [
  [{ id: "1", name: "Welcome to Vanguard Estates", children: [2, 3] }],
  [
    { id: "2", name: "Stay at Vanguard", children: [6, 7], parent: 1 },
    { id: "3", name: "Bring Him Home", children: [4, 5], parent: 1 },
  ],
  [
    { id: "6", name: "Use Drop-In", children: [12, 13], parent: 2 },
    { id: "7", name: "Disable Drop-In", children: [14, 15], parent: 2 },
    { id: "4", name: "Buy A Home Robot", children: [8, 9], parent: 3 },
    { id: "5", name: "Call Him More", children: [10, 11], parent: 3 },
  ],
  [
    { id: "12", name: "Don't Tell Him", children: [22, 23], parent: 6 },
    { id: "13", name: "Tell Him", children: [24, 25], parent: 6 },
    { id: "14", name: "Robot Baths", children: [26, 27], parent: 7 },
    { id: "15", name: "Human Baths", children: [], parent: 7 },
    { id: "8", name: "Explain Missy", children: [16, 17], parent: 4 },
    { id: "9", name: "Don't Explain Missy", children: [], parent: 4 },
    { id: "10", name: "Install Cameras", children: [18, 19], parent: 5 },
    { id: "11", name: "Move Him In", children: [20, 21], parent: 5 },
  ],
  [
    { id: "22", name: "Stop the Robot", children: [], parent: 12 },
    { id: "23", name: "Trust the Robot", children: [], parent: 12 },
    { id: "24", name: "Keep His Secret", children: [], parent: 13 },
    { id: "25", name: "Report Him", children: [], parent: 13 },
    { id: "26", name: "Break the News", children: [], parent: 14 },
    { id: "27", name: "Keep Quiet", children: [], parent: 14 },
    {},
    {},
    { id: "16", name: "Go To Manila", children: [], parent: 8 },
    { id: "17", name: "Don't Go To Manila", children: [], parent: 8 },
    {},
    {},
    { id: "18", name: "Handle it Yourself", children: [], parent: 10 },
    { id: "19", name: "Pay for Help", children: [], parent: 10 },
    { id: "20", name: "Drop Out of School", children: [], parent: 11 },
    { id: "21", name: "Take Out a Loan", children: [], parent: 11 },
  ],
];

// Note: I couldn't find original alt text so I wrote this up myself.
const storyImages = {
  1: {
    src: "originals/art/01.png",
    alt: "A robot with butler outfit carrying covered a tray of food",
  },
  2: { src: "originals/art/02.png", alt: "You, looking at a laptop screen" },
  3: { src: "originals/art/03.png", alt: "A frowning robot" },
  4: { src: "originals/art/04.png", alt: "A cute, orange cat robot" },
  5: {
    src: "originals/art/05.png",
    alt: "You, on the phone with your dad with your palm on your face",
  },
  6: {
    src: "originals/art/06.png",
    alt: "You, dumping a bag of rice on an open laptop",
  },
  7: {
    src: "originals/art/07.png",
    alt: "A group of robots staring at your, one with police lights on top of it",
  },
  8: {
    src: "originals/art/08.png",
    alt: "A cat robot looking happily down at a cell phone, about to place a call",
  },
  9: {
    src: "originals/art/09.png",
    alt: "Your dad with a huge cat eyeball staring at him",
  },
  10: {
    src: "originals/art/10.png",
    alt: "Skid marks on a road lead to a fire and a tire bouncing away from the fire",
  },
  11: {
    src: "originals/art/11.png",
    alt: "A house that appears to be bursting at the seems with two huge people visible through the window, filling the whole house",
  },
  12: {
    src: "originals/art/12.png",
    alt: "A smirking robot wearing a trench coat that is concealing pill bottels",
  },
  13: {
    src: "originals/art/13.png",
    alt: "A huge eyeball staring down at your dad who is cowering on the floor",
  },
  14: {
    src: "originals/art/14.png",
    alt: "Your dad, barely visible because he's covered in bubbles and being scrubbed by huge revolving brushes",
  },
  15: {
    src: "originals/art/15.png",
    alt: "You dad, peeking out of a bathtub, looking nervous",
  },
  16: {
    src: "originals/art/16.png",
    alt: "An airplane, flying high above the clouds",
  },
  17: {
    src: "originals/art/17.png",
    alt: "A robot cat, dead and laying on its side",
  },
  18: {
    src: "originals/art/18.png",
    alt: "You, handing your dad his car keys",
  },
  19: { src: "originals/art/19.png", alt: "A broken piggy bank" },
  20: {
    src: "originals/art/20.png",
    alt: "A graduation hat with a lit fuse instead of a tassle",
  },
  21: {
    src: "originals/art/21.png",
    alt: "You are wearing handcuffs while a person hands you money",
  },
  22: { src: "originals/art/22.png", alt: "You, speaking into a microphone" },
  23: { src: "originals/art/23.png", alt: "Your dad, asleep in a chair" },
  24: { src: "originals/art/24.png", alt: "Two people holding hands" },
  25: {
    src: "originals/art/25.png",
    alt: "Two people on opposite sides of a brick wall",
  },
  26: {
    src: "originals/art/26.png",
    alt: "Your dad, covering his face while three robot hands reach out & covering his head",
  },
  27: {
    src: "originals/art/27.png",
    alt: "Your dad in his bathtub with huge, stadium lights shining down on him",
  },
};

// Note: duration comes from <itunes:duration> which Apple says
// should be episode length in seconds:
// https://help.apple.com/itc/podcasts_connect/#/itcb54353390
const storyAudio = {
  1: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH8662401899.mp3?updated=1667061610",
    duration: 515,
  },
  2: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH8906426865.mp3?updated=1667062002",
    duration: 187,
  },
  3: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH1879514191.mp3?updated=1667062298",
    duration: 214,
  },
  4: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH4091170562.mp3?updated=1667062541",
    duration: 188,
  },
  5: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH4076018928.mp3?updated=1667062595",
    duration: 245,
  },
  6: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH6513354357.mp3?updated=1667063031",
    duration: 184,
  },
  7: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH5443970620.mp3?updated=1667063497",
    duration: 281,
  },
  8: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH9190312190.mp3?updated=1667063567",
    duration: 327,
  },
  9: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH2709325782.mp3?updated=1667063917",
    duration: 292,
  },
  10: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH2773947020.mp3?updated=1667064293",
    duration: 229,
  },
  11: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH2197377291.mp3?updated=1667064743",
    duration: 302,
  },
  12: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH5695864686.mp3?updated=1667064938",
    duration: 162,
  },
  13: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH2788464413.mp3?updated=1667065257",
    duration: 367,
  },
  14: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH5338361822.mp3?updated=1667065677",
    duration: 319,
  },
  15: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH8509368617.mp3?updated=1667065801",
    duration: 260,
  },
  16: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH4767887889.mp3?updated=1667066160",
    duration: 242,
  },
  17: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH5505988844.mp3?updated=1667066417",
    duration: 250,
  },
  18: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH4468228646.mp3?updated=1667066603",
    duration: 188,
  },
  19: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH9562689317.mp3?updated=1667066821",
    duration: 181,
  },
  20: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH2307594154.mp3?updated=1667067048",
    duration: 343,
  },
  21: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH7386444037.mp3?updated=1667067214",
    duration: 330,
  },
  22: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH3694163619.mp3?updated=1667067528",
    duration: 296,
  },
  23: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH4864386271.mp3?updated=1667067633",
    duration: 392,
  },
  24: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH5073936630.mp3?updated=1667067886",
    duration: 316,
  },
  25: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH2850365548.mp3?updated=1667067888",
    duration: 282,
  },
  26: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH4294637277.mp3?updated=1667067909",
    duration: 156,
  },
  27: {
    url: "https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/FLASH5607806547.mp3?updated=1667067952",
    duration: 130,
  },
};

export const allStories = storyLayers.reduce((acc, stories) => {
  const newStories = stories.reduce((acc, story) => {
    acc[story.id] = {
      image: storyImages[story.id],
      audio: storyAudio[story.id],
      ...story,
    };
    return acc;
  }, {});
  Object.assign(acc, newStories);
  return acc;
}, {});
