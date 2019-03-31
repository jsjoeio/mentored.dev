const localKeys: { [key: string]: { [key: string]: string } } = {
  application: {
    stateKey: "os",
    macOS: "Terminal",
    Windows: "Powershell",
    Linux: "Terminal",
  },
  closingMessage: {
    neutral: "It might be in your best interest to study a bit more.",
    positive: "Very impressed with your progress so far.",
    negative: "Don't fret about the score, but I do advise you to study more.",
  },
  newFileCommand: {
    stateKey: "os",
    macOS: "touch",
    Windows: "new-item",
    Linux: "touch",
  },
  directions: {
    stateKey: "os",
    macOS: "Applications > Utilities > Terminal",
    Windows: "Start Menu > Search 'powershell' > Windows Powershell",
    Linux: "Directions: Ubuntu icon > type Terminal",
  },
  reaction: {
    neutral: "Hey, not bad.",
    positive: "Brilliant!",
    negative: "Hmm...Not so great.",
  },
};

export default localKeys;
