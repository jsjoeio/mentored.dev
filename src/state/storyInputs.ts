export interface State {
  [key: string]: string;
}

export const initialState: State = {};
export type ActionType = "ADD_INPUT_KEY" | "UPDATE_INPUT_KEY";

export function storyInputsReducer(state: State, action: { type: ActionType; key: string; value?: string }): State {
  switch (action.type) {
    case "ADD_INPUT_KEY":
      return {
        ...state,
        [action.key]: "",
      };
    case "UPDATE_INPUT_KEY":
      return {
        ...state,
        [action.key]: action.value || "",
      };
    default:
      return state;
  }
}
