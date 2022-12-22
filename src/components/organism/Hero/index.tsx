import { Image } from "../../atoms";
import { Button } from "../../atoms/Button";
import { Budget } from "../../molecules/budget";
import classes from "./hero.module.css";

export const Hero = () => {
  return (
    <div>
      <div className=" w-full pt-8 max-md:p-2 max-md:space-x- space-x-8">
        <div className="m-8 pt-8 max-md:m-0 max-md:mt-2 max-md:p-4 max-md:w-full w-2/5 max-md:space-y-4 space-y-8">
          <div className={`leading-2 ${classes.heroH2}`}>
            Home buying help when a mortgage doesnt work
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
      <div className={`mt-20 max-md:mt-2 ${classes.feature}`}>
        <div className="flex max-md:flex-col max-md:px-6 max-md:space-y-6 justify-center items-center max-md:space-x-2 max-md:pb-4 space-x-8 pb-8">
          <div
            className={`${classes.featureHead} text-midblack max-md:pt-1 max-md:pr-2 pr-6 max-md:text-smmd text-base font-['reg']`}
          >
            Featured in
          </div>

          <div className="flex max-md:flex-col justify-center items-center">
            <div className="flex justify-center items-center max-md:space-x-6 space-x-8">
              <Image src={"mirror-logo.png"} width={"80px"} height={"40px"} />
              <Image
                src={"The_Telegraph_logo.png"}
                width={"140px"}
                height={""}
              />
              <Image src={"guardian.png"} width={"80px"} height={"40px"} />
            </div>
            <div className="flex justify-center items-center  space-x-8">
              <Image
                src={"evening-standard.png"}
                width={"80px"}
                height={"40px"}
              />
              <Image src={"daily-mail2.svg"} width={"100px"} height={"80px"} />
              <Image src={"punch.png"} width={"150px"} height={"45px"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-3/4 max-md:w-10/12 max-md:m-4 max-md:pt-2 m-8 pt-8 ${classes.heroH4}`}
      >
        Buy a home worth up to 10x your income
      </div>
      <div className={`w-2/5 max-md:w-10/12 max-md:mx-4 m-8 ${classes.heroH3}`}>
        With a pre-tax annual household income of <span>£24,000</span>
      </div>
      <Budget />
    </div>
  );
};
