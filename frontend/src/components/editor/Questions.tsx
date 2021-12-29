import { useContext } from "react";
import List from "@mui/material/List";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { QuizContext } from "../../quiz.context";
import { Question } from "./Question";

export const Questions = () => {
  const {
    quiz,
    updateQuestion,
    deleteQuestion,
    cloneQuestion,
    moveQuestion,
    createOption,
    updateOption,
    deleteOption,
  } = useContext(QuizContext);

  return (
    <DragDropContext
      onDragEnd={(e: any) => moveQuestion(e.source.index, e.destination.index)}
    >
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <List>
              {quiz.items.map((item: QuizItem, index: number) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Question
                        id={item.id}
                        isEditing={false}
                        question={item.question}
                        options={item.options}
                        updateQuestion={(title: string) =>
                          updateQuestion(item.id, title)
                        }
                        moveUp={() =>
                          index > 0 && moveQuestion(index, index - 1)
                        }
                        moveDown={() => {
                          index < quiz.items.length &&
                            moveQuestion(index, index + 1);
                        }}
                        deleteQuestion={() => deleteQuestion(item.id)}
                        cloneQuestion={() => cloneQuestion(item.id)}
                        createOption={() => createOption(item.id)}
                        deleteOption={deleteOption}
                        updateOption={(
                          optId: string,
                          data: Record<string, any>
                        ) => updateOption(item.id, optId, data)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
