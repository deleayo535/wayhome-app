import { Button } from "../../atoms/Button";
import { Budget } from "../../molecules/budget";
import classes from "./hero.module.css";

export const Hero = () => {
  return (
    <div>
      <div className=" w-full pt-8 space-x-8">
        <div className="m-8 pt-8 w-2/5 space-y-8">
          <div className={`leading-2 ${classes.heroH2}`}>
            Home buying help when a mortgage doesn’t work
          </div>
          <div className={`leading-2 ${classes.heroH3}`}>
            Buy the same type of home you can comfortably afford to rent. No
            debt. Sign up to see homes.
          </div>
          <Button
            text="see home"
            style={
              {
                // padding: "14px",
                // fontSize: "0px",
              }
            }
          />
        </div>
        <div className="m-8"></div>
      </div>
      <div className={`mt-20 ${classes.feature}`}>
        <div></div>
      </div>
      <div className={`w-3/4 m-8 pt-8 ${classes.heroH4}`}>
        Buy a home worth up to 10x your income
      </div>
      <div className={`w-2/5 m-8 ${classes.heroH3}`}>
        With a pre-tax annual household income of <span>£24,000</span>
      </div>
      <Budget />
    </div>
  );
};
