import localKeys from './localKeys'
import story, { IStory } from './story'

export interface Fun {
  state: { [key: string]: string }
  storyState: IStory
}
/**
 * @description A function to replace the template key in the message with the state key value
 * @param param0 {object} Accepts an object and expects a state and storyState key
 * @returns {string} The storyState message with the template key replace with the state key
 */
function replaceKey({ state, storyState }: Fun) {
  if (storyState && storyState.HAS_KEY) {
    // Get the key from the storyState object
    const key = storyState['HAS_KEY']
    // Get the value storied in state
    const value = state[key]
    // Replace value in message and return message
    return storyState['MESSAGE'].replace(`{${key}}`, value)
  }

  console.warn('This story has no key')
}

function replaceLocalKeys({ state, storyState }: Fun) {
  // *In the future, we may want to extend the functionality to also accept
  // a message so then, we can replace local keys after the keys have been replaced
  let message = storyState['MESSAGE']
  if (storyState && storyState['HAS_LOCAL_KEYS']) {
    // Get the keys from the storyState object
    const keys = storyState['HAS_LOCAL_KEYS']

    for (let i = 0; i < keys.length; i++) {
      // Get key object from localKeys
      const keyObject = localKeys[keys[i]]
      if (keyObject.stateKey) {
        // Grab value inside state under the keyObject statekey
        /* Example:
        - localKeys.application relies on the 'os' stateKey value
        - so we get the value the user selected for 'os', then use that to get the value
        on localKeys.application
        */
        const stateValue = state[keyObject.stateKey]
        let value = localKeys[keys[i]][stateValue]
        message = message.replace(`{${keys[i]}}`, value)
      }
    }
  }
  return message
}

export function getMessage({ state, storyState }: Fun) {
  let message
  if (storyState['HAS_KEY']) {
    message = replaceKey({ state, storyState })
  } else if (storyState['HAS_LOCAL_KEYS']) {
    message = replaceLocalKeys({ state, storyState })
  } else if (storyState['HAS_SPECIAL_MESSAGE']) {
    message = replaceSpecialMessage({ state, storyState })
  } else {
    message = storyState['MESSAGE']
  }
  return message
}

/**
 * @description Calculates the the score using state and storyState.
 * @param state {object}
 * @param storyState {object}
 * @returns {number} returns total score as an integer
 */
function calculateScore({ state }: Fun) {
  const stateKeys = Object.keys(state)
  let score = 0
  let totalPossible = 0

  for (let i = 0; i < stateKeys.length; i++) {
    //@Techdebt this assumes  that the user has answered all questions in the storyState
    // Double check if the state has an ANSWER key on it
    if (
      story.states.hasOwnProperty(stateKeys[i]) &&
      story.states[stateKeys[i]]['ANSWER']
    ) {
      // If it does have an answer, it's a question.
      totalPossible += 1

      // @Todo - Not sure how to fix without using the "Non-Null Assertion Operator"
      // ANSWER is optional on a story state object.
      if (
        story.states[stateKeys[i]]['ANSWER']!.includes(
          state[stateKeys[i]].toLowerCase()
        )
      ) {
        score += 1
      }
    }
  }
  return { score, totalPossible }
}

function replaceSpecialMessage({ state, storyState }: Fun) {
  let message = storyState['MESSAGE']
  let sentiment
  // get score
  const { score, totalPossible } = calculateScore({ state, storyState })

  if (score === totalPossible) {
    sentiment = 'positive'
  } else if (score < totalPossible && score > 1) {
    sentiment = 'neutral'
  } else {
    sentiment = 'negative'
  }
  // @Techdebt
  // This is pretty hard-coded. Will eventually need to redo.
  return message
    .replace(`{reaction}`, localKeys.reaction[sentiment])
    .replace(`{score}`, `${score}/${totalPossible}`)
    .replace(`{closingMessage}`, localKeys.closingMessage[sentiment])
}

export function createGameDbObject(date: Date) {
  const gameDb = {
    streak: {
      count: 1,
      lastLoginDate: date
    }
  }
  return gameDb
}

export function shouldIncrementStreak(lastLoginDate: Date, dateToday: Date) {
  // 1000 milliseconds * 60 seconds * 60 minutes * 24 hours in a day
  const ONE_DAY = 1000 * 60 * 60 * 24

  const distance = +dateToday - +lastLoginDate

  // Should only increment streak if distance is between 24 and 48 hours (inclusive)
  return distance >= ONE_DAY && distance <= ONE_DAY * 2
}
