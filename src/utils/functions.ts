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

  // Check if gameDb exists
  const gameDb = localStorage.getItem('gameDb')
  let gameDbInstance

  if (gameDb) {
    gameDbInstance = JSON.parse(gameDb)
    gameDbInstance.score = score.toString()
    const gameDbString = JSON.stringify(gameDbInstance)
    // Save to localStorage again
    localStorage.setItem('gameDb', gameDbString)
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

export function shouldIncrementStreak(lastLoginDate: string, dateToday: Date) {
  const DAYS_IN_MILLISECONDS = 86400000

  const distanceMilliseconds =
    new Date(lastLoginDate).getTime() - dateToday.getTime()
  // Should only increment streak if distance is between 1 and 2 hours (inclusive)

  const d = distanceMilliseconds / DAYS_IN_MILLISECONDS
  return d >= 1 && d <= 2
}

export function shouldUpdateLoginDate(lastLoginDate: string, dateToday: Date) {
  return new Date(lastLoginDate).getDate() !== dateToday.getDate()
}

export const isBrowser = () => typeof window !== 'undefined'


export const isDeviceMobile = () => {
  // Taken from @charliegerad's flappy windows project
  // https://github.com/charliegerard/flappy-windows/blob/master/index.js
  let check = false
  ;(function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}