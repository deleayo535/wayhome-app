import React from "react";
import { Button, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./appPage.module.css";

export default function ApplicationPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="flex justify-center py-16">
          <div className="space-y-12">
            <div className={`flex justify-center ${classes.appH}`}>
              Application process
            </div>
            <div className={`w-3/5 ${classes.appTxt}`}>
              Check your application status or refresh yourself on our 4-step
              process
            </div>
          </div>
        </div>
        <div className={`${classes.signWrap}`}>
          <div className="px-12 py-14">
            <div className="pb-4">
              <div className={`${classes.signH} pb-4`}>Sign Up</div>
              <div className={`${classes.signH2} `}>
                Before you register, check you are eligible. You need to:
              </div>
            </div>
            <div>
              <ul className={`${classes.signLi} space-y-1 pl-4`}>
                <li>
                  have between £24,000 and £140,000 household income, before tax
                </li>
                <li>have between 5% and 30% deposit, worth at least £7,500</li>
                <li>be between 21 and 55 years old</li>
                <li>
                  be a British citizen, or have settled status, or have
                  indefinite leave to remain in the UK
                </li>
                <li>have no criminal record</li>
                <li>not own other properties by the time you buy with us</li>
              </ul>
            </div>
            <div className={`${classes.signH2} pt-4 pb-4`}>
              Its also worth double checking we are buying in an area you want
              to live in. Have a look at our locations.
            </div>
            <div>
              <Button
                text="Sign up"
                style={{
                  fontWeight: "1200",
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
