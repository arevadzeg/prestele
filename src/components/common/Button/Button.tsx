import { Button as AntdButton } from "antd";
import type { ButtonProps } from "antd";
import scss from "./button.module.scss";

interface CustomButtonProps extends ButtonProps {
  placeholder?: string;
}

const Button = (props: CustomButtonProps) => {
  return <AntdButton {...props} className={scss.button}></AntdButton>;
};

export default Button;
