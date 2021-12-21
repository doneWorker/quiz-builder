import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Radio from "@mui/material/Radio";

export const Option = () => {
  return (
    <ListItem>
      <Radio />
      <TextField fullWidth size="small" value="JS is a programming language" />
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ListItem>
  );
};
