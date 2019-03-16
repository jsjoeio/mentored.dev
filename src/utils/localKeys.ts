import { calculateScore } from './functions'

const localKeys = {
  application: {
    macOs: 'Terminal',
    Windows: 'Command Prompt',
    Linux: 'Terminal'
  },
  closingMessage: {
    neutral: 'It might be in your best interest to study a bit more.',
    positive: 'Very impressed with your progress so far.',
    negative: "Don't fret about the score, but I do advise you to study more."
  },
  directions: {
    macOs: 'Applications > Utilities > Terminal',
    Windows:
      'Start Menu > All Programs > Accessories > Windows Powershell folder > Windows Powershell',
    Linux: '- Directions: Ubuntu icon > type Terminal'
  },
  reaction: {
    neutral: 'Hey, not bad.',
    positive: 'Brilliant!',
    negative: 'Hmm...Not so great.'
  },
  score: (state, answerKey) => calculateScore(state, answerKey)
}
