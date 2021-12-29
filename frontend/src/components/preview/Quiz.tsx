import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";

interface Props {
  data: Quiz;
}

/*
Result:
  { qId: oId }
*/
export const Quiz: React.FC<Props> = ({ data }: Props) => {
  const { items, headline } = data;
  const [result, setResult] = useState<QuizResult>({});

  const handleSelect = (qId: string, oId: string) => {
    setResult((res) => ({ ...res, [qId]: oId }));
  };

  return (
    <>
      <Paper
        elevation={5}
        sx={{ width: "100%", boxSizing: "border-box", p: 2, mt: 2, mb: 2 }}
      >
        <Typography>{headline}</Typography>
      </Paper>
      {items.map((item: QuizItem) => (
        <Paper
          key={item.id}
          elevation={5}
          sx={{ width: "100%", boxSizing: "border-box", p: 3, pt: 0, mb: 2 }}
        >
          <Box sx={{ position: "relative" }}>
            <Typography>{item.question || "Your question"}</Typography>
          </Box>
          <List sx={{ p: 0 }}>
            {item.options.map((opt: QuizOption) => (
              <ListItem sx={{ p: 0 }} key={opt.id}>
                <Radio
                  checked={result[item.id] === opt.id}
                  onChange={() => handleSelect(item.id, opt.id)}
                />
                <Typography>{opt.title}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </>
  );
};
