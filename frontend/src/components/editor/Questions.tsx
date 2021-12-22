import { useContext } from "react";
import List from "@mui/material/List";
import { QuizContext } from "../../quiz.context";
import { Question } from "./Question";

export const Questions = () => {
  const {
    quiz,
    updateQuestion,
    deleteQuestion,
    cloneQuestion,
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
              isEditing={false}
              question={item.question}
              options={item.options}
              updateQuestion={(title: string) => updateQuestion(item.id, title)}
              deleteQuestion={() => deleteQuestion(item.id)}
              cloneQuestion={() => cloneQuestion(item.id)}
              createOption={() => createOption(item.id)}
              deleteOption={deleteOption}
              updateOption={(optId: string, data: Record<string, any>) =>
                updateOption(item.id, optId, data)
              }
            />
          ))}
        </List>
      </div>
    </>
  );
};
