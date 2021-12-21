import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface Props {
  question: string;
  options: Record<string, any>[];
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
        />
        <Typography sx={{ mt: 4 }}>OPTIONS</Typography>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Add option
        </Button>
      </Paper>
    </ListItem>
  );
};
