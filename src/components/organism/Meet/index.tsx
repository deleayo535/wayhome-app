import { Button } from "../../atoms/Button";
import { Image } from "../../atoms/Image";
import classes from "./meet.module.css";

export function Meet() {
  return (
    <div className={`${classes.meet}`}>
      <div className="flex max-md:flex-col-reverse justify-between space-x-4">
        <div className="w-2/4 max-md:w-10/12 max-md:mt-4 max-md:mx-4 mt-10 ml-8">
          <div className={`${classes.meetTxt} max-md:mr-6`}>
            <div className={`${classes.meetH1}`}>Meet the Payne family</div>
            <p className={`pb-6 max-md:pb-2 ${classes.meetP1}`}>
              Before we helped The Payne family buy their dream home, they were
              struggling to save enough deposit...
            </p>
            <p className="text-sm max-md:pb-2 pb-6">
              “For anyone who has good credit, reasonable household income but
              not a big enough deposit, this is the perfect route to getting on
              the ladder..
            </p>
            <p className="text-sm max-md:pb-2 pb-6">
              It was important for us to own our home and have that sense of
              security, and we treat our staircasing payments just as we would a
              mortgage.”
            </p>{" "}
            <p className="text-sm max-md:pb-2 underline">
              Read more about the Payne family
            </p>
          </div>
        </div>
        <div className="w-2/4 max-md:w-4/5 max-md:m-4 mt-10 mr-8">
          <Image
            src="	https://www.wayhome.co.uk/static/media/payne-family.b95e626d.svg"
            width="520px"
            height=""
          />
        </div>
      </div>
      <div className="py-10 max-md:p-8">
        <div className="flex max-md:ml-0 ml-8">
          <Button
            style={{
              color: "rgb(2, 90, 101)",
              background: "rgb(222, 234, 235)",
              border: "1px solid rgb(2, 90, 101)",
            }}
            text="Start an application"
          />
        </div>
      </div>
    </div>
  );
}
