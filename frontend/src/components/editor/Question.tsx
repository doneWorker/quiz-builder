import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Option } from "./Option";

interface Props {
  question: string;
  options: QuizOption[];
  updateQuestion: Function;
  createOption: Function;
  updateOption: Function;
  deleteOption: Function;
}

export const Question = (props: Props) => {
  return (
    <ListItem sx={{ p: 0, mb: 3 }}>
      <Paper elevation={5} sx={{ width: "100%", p: 3 }}>
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
      </Paper>
    </ListItem>
  );
};
