import { useReducer, useMemo } from "react";
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
  const methods = useMemo(() => getQuizMethods(dispatch), [dispatch]);
  const provider = {
    quiz,
    ...methods,
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
