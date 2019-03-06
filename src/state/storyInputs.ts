export const initialState = {}

export function storyInputsReducer(state, action) {
  switch (action.type) {
    case 'ADD_INPUT_KEY':
      return {
        ...state,
        [action.key]: ''
      }
    case 'UPDATE_INPUT_KEY':
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state
  }
}
