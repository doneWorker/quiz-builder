import { useContext } from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import { QuizContext } from "../../quiz.context";
import { Question } from "./Question";

export const Questions = () => {
  const {
    quiz,
    createQuestion,
    updateQuestion,
    createOption,
    updateOption,
    deleteOption,
  } = useContext(QuizContext);

  return (
    <>
      <div>
        <List>
          {quiz.items.map((item: QuizItem) => (
            <Question
              key={item.id}
              question={item.question}
              options={item.options}
              updateQuestion={(title: string) => updateQuestion(item.id, title)}
              createOption={() => createOption(item.id)}
              deleteOption={deleteOption}
              updateOption={(optId: string, data: Record<string, any>) =>
                updateOption(item.id, optId, data)
              }
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
