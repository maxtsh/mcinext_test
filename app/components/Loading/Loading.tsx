import { Container } from "./Loading.styles";
import type { IProps } from "./Loading.types";

const Loading: React.FC<IProps> = ({ message }) => {
  return (
    <Container>
      <div className="indicator"></div>
      <p className="message">{message}</p>
    </Container>
  );
};

export default Loading;
