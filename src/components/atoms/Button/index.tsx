import { Image } from '../Image';
import { buttonProps } from './button.types';

export const Button = ({
  className,
  style,
  icon,
  containerStyle,
  text,
  onclick,
}: buttonProps) => {
  return (
    <button
      className={`px-6 text-xs py-2 bg-lightBlue rounded-full flex justify-center items-center ${
        className || ''
      }`}
      onClick={onclick}
      style={style}
    >
      <span className="text-base font-normal">{text}</span>
      {icon && (
        <Image
          height="1rem"
          width="1.5rem"
          src={icon}
          style={{
            marginLeft: '2px',
            color: 'inherit',
          }}
        />
      )}
    </button>
  );
};
