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
