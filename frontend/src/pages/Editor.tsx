import { useReducer } from "react";
import Container from "@mui/material/Container";

import {
  QuizContext,
  QuizReducer,
  initialState,
  getQuizMethods,
} from "../quiz.context";
import { Headline } from "../components/editor/Headline";
import { Questions } from "../components/editor/Questions";
import { Actions } from "../components/editor/Actions";

export const Editor: React.FC = () => {
  const [quiz, dispatch] = useReducer(QuizReducer, initialState);
  const provider = {
    quiz,
    ...getQuizMethods(dispatch),
  };

  return (
    <QuizContext.Provider value={provider}>
      <Container maxWidth="md">
        <Actions />
        <Headline />
        <Questions />
      </Container>
    </QuizContext.Provider>
  );
};
