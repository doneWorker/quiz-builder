import { useContext } from "react";
import Paper from "@mui/material/Paper";
import { QuizContext } from "../../quiz.context";

export const Headline = () => {
  const { quiz } = useContext(QuizContext);

  return (
    <Paper
      elevation={5}
      sx={{ width: "100%", boxSizing: "border-box", p: 2, mt: 2, mb: 2 }}
    >
      {quiz.headline}
    </Paper>
  );
};
