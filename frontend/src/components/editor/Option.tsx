import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  title: string;
  isCorrect: boolean;
  updateOption: Function;
  deleteOption: Function;
}

export const Option = (props: Props) => {
  return (
    <ListItem>
      <Tooltip placement="top" title="is correct">
        <Checkbox
          checked={props.isCorrect}
          onChange={(e) =>
            props.updateOption({
              isCorrect: e.target.checked,
              title: props.title,
            })
          }
        />
      </Tooltip>
      <TextField
        fullWidth
        size="small"
        value={props.title}
        onChange={(e) =>
          props.updateOption({
            isCorrect: props.isCorrect,
            title: e.target.value,
          })
        }
      />
      <Tooltip placement="top" title="Remove option">
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => props.deleteOption()}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};
