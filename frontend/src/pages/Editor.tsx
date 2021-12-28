import Container from "@mui/material/Container";

import { Headline } from "../components/editor/Headline";
import { Questions } from "../components/editor/Questions";
import { Actions } from "../components/editor/Actions";

export const Editor: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Actions />
      <Headline />
      <Questions />
    </Container>
  );
};
