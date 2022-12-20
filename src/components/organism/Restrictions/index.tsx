import { Button } from "../../atoms/Button";
import { Image } from "../../atoms/Image";
import classes from "./restriction.module.css";

export function Restricton() {
  return (
    <div>
      <div className={`${classes.restrictionWrap}`}>
        <div className="m-">
          <div className="py-20 px-10 max-md:py-12 max-md:px-4">
            <div className={`pb-8 max-md:pb-4 ${classes.restrictionH1}`}>
              Home Restrictions
            </div>
            <div className="flex max-md:flex-col justify-between max-md:gap-8 gap-20">
              <div className="w-1/4 max-md:w-full">
                <div className="pb-4">
                  <Image
                    src="https://www.wayhome.co.uk/static/media/icon-new-build.7fd4f373.svg"
                    width="80px"
                    height=""
                  />
                </div>
                <h2 className={`pb-2 max-md:pb-0 ${classes.restrictionH2}`}>
                  No new-builds
                </h2>
                <p className={`${classes.restrictionP}`}>
                  We only show you homes that have been sold before so we can
                  work out a fair price for them.
                </p>
              </div>
              <div className="w-1/4 max-md:w-full">
                <div className="pb-4">
                  <Image
                    src="	https://www.wayhome.co.uk/static/media/icon-fixer-upper.279351af.svg"
                    width="80px"
                    height=""
                  />
                </div>
                <h2 className={`pb-2 max-md:pb-0 ${classes.restrictionH2}`}>
                  No fixer-uppers
                </h2>
                <p className={`${classes.restrictionP}`}>
                  We only show you homes that dont need structural work. We dont
                  want you living in a building site.
                </p>
              </div>
              <div className="w-1/4 max-md:w-full">
                <div className="pb-4">
                  <Image
                    src="	https://www.wayhome.co.uk/static/media/icon-rent.8e465b6b.svg"
                    width="80px"
                    height=""
                  />
                </div>
                <h2 className={`pb-2 max-md:pb-0 ${classes.restrictionH2}`}>
                  No buy-to-lets
                </h2>
                <p className={`${classes.restrictionP}`}>
                  We want to help people looking for a home, not an investment
                  opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.homes}`}>
        <div className="px-12 py-20 max-md:px-4 max-md:py-10">
          <div className={`pb-4 ${classes.homesTxt}`}>
            See if we are right for you
          </div>
          <div>
            <Button
              text="See homes"
              style={{
                color: "rgb(2, 90, 101)",
                background: "rgb(222, 234, 235)",
                border: "1px solid rgb(2, 90, 101)",
              }}
              className={`text-base ${classes.bt}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
