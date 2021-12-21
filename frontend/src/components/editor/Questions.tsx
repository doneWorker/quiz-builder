import { useContext } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { QuizContext } from "../../quiz.context";
import { Question } from "./Question";

export const Questions = () => {
  const { quiz, createQuestion } = useContext(QuizContext);

  return (
    <>
      <div>
        <List>
          {quiz.items.map((item: QuizItem) => (
            <Question
              key={item.id}
              question={item.question}
              options={item.options}
            />
          ))}
        </List>
      </div>
      <Button variant="outlined" onClick={createQuestion}>
        Add Question
      </Button>
    </>
  );
};
