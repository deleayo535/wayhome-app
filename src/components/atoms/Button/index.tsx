import { buttonProps } from "./button.types";

export const Button = ({
  className,
  style,
  containerStyle,
  text,
  onclick,
}: buttonProps) => {
  return (
    <button
      className={`px-6 text-xs py-2 bg-lightBlue rounded-full flex justify-center items-center ${
        className || ""
      }`}
      onClick={onclick}
      style={style}
    ></button>
  );
};
