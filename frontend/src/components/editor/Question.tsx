import { memo } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Option } from "./Option";

interface Props {
  question: string;
  isEditing: boolean;
  options: QuizOption[];
  updateQuestion: Function;
  createOption: Function;
  updateOption: Function;
  deleteOption: Function;
}

export const Question = memo((props: Props) => {
  return (
    <ListItem sx={{ p: 0, mb: 3 }}>
      <Paper elevation={5} sx={{ width: "100%", p: 3, pt: 0 }}>
        <Box
          component="span"
          sx={{ m: 1, display: "flex", justifyContent: "center" }}
        >
          <DragHandleIcon sx={{ cursor: "grab" }} />
        </Box>
        <TextField
          fullWidth
          label="Question"
          size="small"
          variant="outlined"
          value={props.question}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.updateQuestion(e.target.value)
          }
        />
        <div>
          <Typography sx={{ mt: 4 }}>OPTIONS</Typography>
          <List>
            {props.options.map((opt) => (
              <Option
                key={opt.id}
                isCorrect={opt.isCorrect}
                title={opt.title}
                updateOption={(data: Record<string, any>) =>
                  props.updateOption(opt.id, data)
                }
                deleteOption={() => props.deleteOption(opt.id)}
              />
            ))}
          </List>
        </div>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => props.createOption()}
        >
          Add option
        </Button>
        <Divider sx={{ mt: 3, mb: 3 }} />
        <Stack justifyContent="flex-end" spacing={2} direction="row">
          <Tooltip placement="top" title="Clone Question">
            <IconButton aria-label="clone" size="small">
              <ContentCopyIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top" title="Delete Question">
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Button variant="contained">Done</Button>
        </Stack>
      </Paper>
    </ListItem>
  );
});
