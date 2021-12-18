interface Props {
    title: string;
  }
  
  export const Question: React.FC<Props> = ({ title }) => (
    <h2>Hello user: {title} !</h2>
  );