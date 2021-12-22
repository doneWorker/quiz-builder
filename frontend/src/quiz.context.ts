import { createContext } from "react";
import { nanoid } from "nanoid";

export const initialState: any = {
  headline: "My first Quiz",
  items: [],
};

export const actions: ReducerActions = {
  UPDATE_HEADLINE: "UPDATE_HEADLINE",
  CREATE_QUESTION: "CREATE_QUESTION",
  UPDATE_QUESTION: "UPDATE_QUESTION",
  DELETE_QUESTION: "DELETE_QUESTION",
  CLONE_QUESTION: "CLONE_QUESTION",
  MOVE_QUESTION: "MOVE_QUESTION",
  CREATE_OPTION: "CREATE_OPTION",
  UPDATE_OPTION: "UPDATE_OPTION",
  DELETE_OPTION: "DELETE_OPTION",
  MOVE_OPTION: "MOVE_OPTION",
};

// TODO: generate nanoid in reducer
// TODO: use immer.js
export const QuizReducer = (state: Quiz, action: ReducerAction): Quiz => {
  switch (action.type) {
    case actions.UPDATE_HEADLINE:
      return { ...state, headline: action.payload.headline };
    case actions.CREATE_QUESTION:
      return { ...state, items: [...state.items, action.payload.item] };
    case actions.UPDATE_QUESTION:
      const updatedQuestions = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, question: action.payload.question }
          : item
      );
      return { ...state, items: updatedQuestions };
    case actions.DELETE_QUESTION:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: filteredItems };
    case actions.CLONE_QUESTION:
      const clone = state.items.find((item) => item.id === action.payload.id);
      return clone
        ? {
            ...state,
            items: [
              ...state.items,
              {
                ...clone,
                id: action.payload.cloneId,
                options: clone.options.map((opt) => ({ ...opt, id: nanoid() })),
              },
            ],
          }
        : state;
    case actions.CREATE_OPTION:
      const createdOptions = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, options: [...item.options, action.payload.item] }
          : item
      );
      return { ...state, items: createdOptions };
    case actions.UPDATE_OPTION:
      const updatedOptions = state.items.map((item) =>
        item.id === action.payload.questionId
          ? {
              ...item,
              options: item.options.map((opt) =>
                opt.id === action.payload.optionId
                  ? { ...action.payload.item, id: opt.id }
                  : opt
              ),
            }
          : item
      );
      return { ...state, items: updatedOptions };
    case actions.DELETE_OPTION:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          options: item.options.filter((opt) => opt.id !== action.payload.id),
        })),
      };
    default:
      throw new Error("Reducer not found");
  }
};

export const getQuizMethods = (
  dispatch: React.Dispatch<ReducerAction>
): Record<string, Function> => ({
  updateHeadline: (headline: string): void => {
    dispatch({ type: actions.UPDATE_HEADLINE, payload: headline });
  },

  createQuestion: (): void => {
    const newItem = { id: nanoid(), question: "", options: [] };
    dispatch({ type: actions.CREATE_QUESTION, payload: { item: newItem } });
  },

  updateQuestion: (id: string, question: string): void => {
    dispatch({ type: actions.UPDATE_QUESTION, payload: { id, question } });
  },

  deleteQuestion: (id: string): void => {
    dispatch({ type: actions.DELETE_QUESTION, payload: { id } });
  },

  cloneQuestion: (id: string): void => {
    dispatch({
      type: actions.CLONE_QUESTION,
      payload: { id, cloneId: nanoid() },
    });
  },

  createOption: (qId: string): void => {
    const newItem: QuizOption = { id: nanoid(), title: "", isCorrect: false };
    dispatch({
      type: actions.CREATE_OPTION,
      payload: { id: qId, item: newItem },
    });
  },

  updateOption: (
    qId: string,
    optId: string,
    data: Record<string, any>
  ): void => {
    dispatch({
      type: actions.UPDATE_OPTION,
      payload: { questionId: qId, optionId: optId, item: data },
    });
  },

  deleteOption: (id: string): void => {
    dispatch({ type: actions.DELETE_OPTION, payload: { id } });
  },
});

export const QuizContext = createContext(initialState);
