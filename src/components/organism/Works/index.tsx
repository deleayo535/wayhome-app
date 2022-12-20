import { Button } from "../../atoms/Button";
import { Section } from "../../molecules/Section";
import classes from "./works.module.css";
export function Works() {
  return (
    <div className={`mt-10 max-md:mt-6 pb-20 ${classes.works}`}>
      <div
        className={`flex justify-center max-md:pt-8 max-md:pl-4 pt-20 ${classes.worksHead}`}
      >
        How Gradual Homeownership works
      </div>
      <div>
        <Section
          title="You buy the bit you can afford today"
          text="Our funding partners pay for the rest"
          img="https://www.wayhome.co.uk/static/media/how-it-works-1.b5a7bd22.svg"
          imageFirst
        />
        <Section
          title="The house is paid for in full"
          text="So, you don’t need a mortgage"
          img="https://www.wayhome.co.uk/static/media/how-it-works-2.8919fa35.svg"
        />
        <Section
          title="You pay rent on the bit you haven't bought yet"
          text="At fair market value of the home"
          img="https://www.wayhome.co.uk/static/media/how-it-works-3.9d1a52ef.svg"
          imageFirst
        />
        <Section
          title="But, the home is yours to make your own"
          text="Nobody can ask you to leave"
          img="https://www.wayhome.co.uk/static/media/how-it-works-4.2c3a46da.svg"
        />
        <Section
          title="Buy more each month or in lump sums"
          text="The more you buy, the less rent you pay"
          img="	https://www.wayhome.co.uk/static/media/how-it-works-5.3096b4a1.svg"
          imageFirst
        />
      </div>
      <div className="pt-20 max-md:pt-0">
        <div className="flex justify-center max-md:justify-start max-md:pl-4 pt-18">
          <Button
            style={{
              color: "rgb(2, 90, 101)",
              background: "rgb(222, 234, 235)",
              border: "1px solid rgb(2, 90, 101)",
            }}
            text="More on how it works"
          />
        </div>
      </div>
    </div>
  );
}
