import { Container } from "./Error.styles";
import type { IProps } from "./Error.types";

const Error: React.FC<IProps> = ({ message }) => {
  return (
    <Container>
      <p className="message">{message}</p>
    </Container>
  );
};

export default Error;
