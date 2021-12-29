import { useContext } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { QuizContext } from "../../quiz.context";

export const Actions = () => {
  const { createQuestion, quiz } = useContext(QuizContext);

  const exportQuiz = () => {
    alert(JSON.stringify(quiz));
  };

  return (
    <Paper
      elevation={5}
      sx={{ width: "100%", p: 1, mt: 2, boxSizing: "border-box" }}
    >
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={createQuestion}
        >
          Add Question
        </Button>
        <Button
          variant="contained"
          startIcon={<UpgradeIcon />}
          onClick={exportQuiz}
        >
          Export
        </Button>
        <Link to="/preview" style={{ textDecoration: "none" }}>
          <Button variant="contained" startIcon={<VisibilityIcon />}>
            Preview
          </Button>
        </Link>
      </Stack>
    </Paper>
  );
};
