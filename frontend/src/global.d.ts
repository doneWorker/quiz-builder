/* Quiz */
interface QuizOption {
  id: string;
  title: string;
  isCorrect: boolean;
}

interface QuizItem {
  id: string;
  question: string;
  isMultiple?: boolean;
  options: Option[];
}

interface Quiz {
  headline: string;
  items: QuizItem[];
}

type QuizResult = Record<string, string>;

/* Common */
type ReducerActions = Record<string, string>;
type ReducerAction = { type: string; payload?: any };
