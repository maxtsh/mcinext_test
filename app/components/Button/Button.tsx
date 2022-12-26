import { BTN } from "./Button.styles";
import type { IProps } from "./Button.types";

const Button: React.FC<IProps> = ({ children, ...props }) => {
  return <BTN {...props}>{children}</BTN>;
};

export default Button;
