import { Button } from "../../atoms/Button";
import { Image } from "../../atoms/Image";
import classes from "./buy.module.css";

export function Buy() {
  return (
    <div className={`${classes.buyWrapper}`}>
      <div className="flex justify-between">
        <div className="w-1/4 ml-16 my-20">
          <Image
            src="	https://www.wayhome.co.uk/static/media/radio-with-plants.8752a2ef.svg"
            height=""
            width="340px"
          />
        </div>
        <div className="m-auto pl-8 w-9/12">
          <div className={`text-2xl ${classes.buyH1}`}>Where we buy homes</div>
          <p className={`text-lg pb- ${classes.buyP}`}>
            Find out which locations we're helping people buy homes in first.
          </p>
          <Button text="See where we buy" />
        </div>
      </div>
    </div>
  );
}
