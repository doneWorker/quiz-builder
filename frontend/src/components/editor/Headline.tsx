import { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import { QuizContext } from "../../quiz.context";

export const Headline = () => {
  const { quiz, updateHeadline } = useContext(QuizContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Paper
      elevation={5}
      sx={{
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
        p: 2,
        mt: 2,
        mb: 2,
      }}
    >
      {isEditing ? (
        <>
          <TextField
            fullWidth
            label="Headline"
            size="small"
            variant="outlined"
            multiline
            value={quiz.headline}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateHeadline(e.target.value)
            }
          />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={() => setIsEditing(false)}
          >
            Done
          </Button>
        </>
      ) : (
        <>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {quiz.headline}
          </Typography>
          <Tooltip placement="top" title="Edit Question">
            <IconButton
              aria-label="clone"
              size="small"
              sx={{ position: "absolute", right: 12, top: 12 }}
              onClick={() => setIsEditing(true)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Paper>
  );
};
