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
    <div className={`${classes.section} max-md:pb-16`}>
      <div className="flex max-md:flex-col max-md:mx-12 mx-32 m-auto -space-x-">
        <div
          className={` ${
            imageFirst ? "order-1" : "order-last"
          } max-md:order-none max-md:pb-4`}
        >
          {img && <Image src={img} width="360px" height="" />}
        </div>
        <div className="m-auto max-md:space-y-1 order-2">
          <div className={`${classes.secTxt}`}>{title}</div>
          <p className={`${classes.secP}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}
