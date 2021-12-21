import { render, screen } from "@testing-library/react";
import App from "./App";

const testQuiz: Quiz = {
  headline: "How well do you know JS?",
  items: [
    {
      id: "1",
      question: "Is JS using in Backend?",
      options: [
        {
          id: "2",
          title: "Yes",
        },
        {
          id: "3",
          title: "No",
        },
        {
          title: "Maybe yes, maybe no",
        },
      ],
    },
  ],
};

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
