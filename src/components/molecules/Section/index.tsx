import { Image } from "../../atoms/Image";
import classes from "./section.module.css";
import { SectionProps } from "./section.types";

export function Section({
  title,
  text,
  img,
  style,
  containerStyle,
  imageFirst,
}: SectionProps) {
  return (
    <div className={`${classes.section}`}>
      <div className="flex mx-32 m-auto -space-x-">
        <div className={` ${imageFirst ? "order-1" : "order-last"} `}>
          {img && <Image src={img} width="360px" height="" />}
        </div>
        <div className="m-auto order-2">
          <div className={`${classes.secTxt}`}>{title}</div>
          <p className={`${classes.secP}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}
