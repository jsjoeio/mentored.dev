export function getMessage(state, storyState) {
  /*
    The purpose of this function is to replace the
    template key with information from state.
  */
  // Get the key from the storyState object
  const key = storyState['HAS_KEY']
  // Get the value storied in state
  const value = state[key]
  // Replace value in message and return message
  return storyState['MESSAGE'].replace(`{${key}}`, value)
}

/**
 * @description Calculates the the score using state and an answerKey.
 * @param state {object}
 * @param answerKey {object}
 * @returns {string} returns a string with the score over the total possible (i.e. 2/3)
 */
export function calculateScore(state, answerKey) {
  // I need to compare the
  let totalScore = 0
  let totalPossible = 0
  // loop over the answerKey grabbing the key from state, comparing value to answer value,
  // if correct, increment total score
  return `${score}/${totalPossible}`
}
