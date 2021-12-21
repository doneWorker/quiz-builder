import { createContext } from "react";
import { nanoid } from "nanoid";

export const initialState: Quiz & any = {
  headline: "My first Quiz",
  items: [],
};

export const actions: ReducerActions = {
  UPDATE_HEADLINE: "UPDATE_HEADLINE",
  CREATE_QUESTION: "CREATE_QUESTION",
  UPDATE_QUESTION: "UPDATE_QUESTION",
  DELETE_QUESTION: "DELETE_QUESTION",
  MOVE_QUESTION: "MOVE_QUESTION",
  CREATE_OPTION: "CREATE_OPTION",
  UPDATE_OPTION: "UPDATE_OPTION",
  DELETE_OPTION: "DELETE_OPTION",
  MOVE_OPTION: "MOVE_OPTION",
};

export const QuizReducer = (state: Quiz, action: ReducerAction) => {
  switch (action.type) {
    case actions.UPDATE_HEADLINE:
      return { ...state, headline: action.payload.headline };
    case actions.CREATE_QUESTION:
      return { ...state, items: [...state.items, action.payload.item] };
    case actions.UPDATE_QUESTION:
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? action.payload.item : item
      );
      return { ...state, items: updatedItems };
    case actions.DELETE_QUESTION:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: filteredItems };
    default:
      throw new Error();
  }
};

export const getQuizMethods = (dispatch: React.Dispatch<ReducerAction>) => ({
  updateHeadline: (headline: string): void => {
    dispatch({ type: actions.UPDATE_HEADLINE, payload: headline });
  },
  createQuestion: (): void => {
    const newItem = { id: nanoid(), question: "", options: [] };
    dispatch({ type: actions.CREATE_QUESTION, payload: { item: newItem } });
  },
});

export const QuizContext = createContext(initialState);
