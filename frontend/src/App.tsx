import { useReducer, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Editor } from "./pages/Editor";
import { Preview } from "./pages/Preview";
import {
  QuizContext,
  QuizReducer,
  initialState,
  getQuizMethods,
} from "./quiz.context";

import "./App.css";

function App() {
  const [quiz, dispatch] = useReducer(QuizReducer, initialState);
  const methods = useMemo(() => getQuizMethods(dispatch), [dispatch]);
  const provider = {
    quiz,
    ...methods,
  };
  return (
    <QuizContext.Provider value={provider}>
      <main className="App">
        <Routes>
          <Route path="preview" element={<Preview />} />
          <Route path="/" element={<Editor />} />
        </Routes>
      </main>
    </QuizContext.Provider>
  );
}

export default App;
