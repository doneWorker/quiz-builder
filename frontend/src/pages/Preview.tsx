import { useContext } from "react";
import Container from "@mui/material/Container";
import { QuizContext } from "../quiz.context";
import { Quiz } from "../components/preview/Quiz";

export const Preview: React.FC = () => {
  const { quiz } = useContext(QuizContext);

  return (
    <Container maxWidth="md">
      <Quiz data={quiz} />
    </Container>
  );
};
