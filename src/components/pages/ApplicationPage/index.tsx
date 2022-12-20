import React from "react";
import { Button, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./appPage.module.css";

export default function ApplicationPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="flex justify-center py-16 max-md:py-12">
          <div className="space-y-12 max-md:space-y-8">
            <div className={`flex justify-center ${classes.appH}`}>
              Application process
            </div>
            <div
              className={`w-3/5 max-md:w-full max-md:px-4 ${classes.appTxt}`}
            >
              Check your application status or refresh yourself on our 4-step
              process
            </div>
          </div>
        </div>
        <div className={`${classes.signWrap}`}>
          <div className="px-12 py-14 max-md:px-4 max-md:py-8">
            <div className="pb-4 max-md:pb-2">
              <div className={`${classes.signH} pb-4`}>Sign Up</div>
              <div className={`${classes.signH2} max-md:pb-4`}>
                Before you register, check you are eligible. You need to:
              </div>
            </div>
            <div>
              <ul className={`${classes.signLi} space-y-1 pl-4`}>
                <li>
                  have between ₦24,000 and ₦140,000 household income, before tax
                </li>
                <li>have between 5% and 30% deposit, worth at least ₦7,500</li>
                <li>be between 21 and 55 years old</li>
                <li>
                  be a Nigerian citizen, or have settled status, or have
                  indefinite leave to remain in the NG.
                </li>
                <li>have no criminal record</li>
                <li>not own other properties by the time you buy with us</li>
              </ul>
            </div>
            <div
              className={`${classes.signH2} max-md:pb-6 max-md:pt-6 pt-4 pb-4`}
            >
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
        <div className={`${classes.qualified}`}>
          <div className="p-10 max-md:px-4 max-md:py-8">
            <div className="text-base2 font-semibold text-midblack pb-4">
              <span></span>Pre-qualification
            </div>
            <div className={`w-1/3 max-md:w-full rounded-b-lg ${classes.card}`}>
              <div className={`${classes.cardH}`}></div>
              <p className="text-base text-black font-bold py-4 px-4">
                Do a soft credit check
              </p>
              <p className="text-sm text-lowblack leading-8 font-semibold px-4 pb-8">
                We ask you to do this first so we have a better idea if we can
                help now. If you dont pass, thats OK—you can always try again
                down the line. And dont worry, a soft check wont affect your
                credit score or your credit record.
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.signWrap}`}>
          <div className="p-10 max-md:px-4 max-md:py-8">
            <div className="text-base2 font-semibold text-midblack pb-4">
              <span></span>Verification & Viewings
            </div>
            <div className="flex max-md:flex-col justify-between max-md:space-y-8 max-md:space-x-0 space-x-6">
              <div
                className={`w-1/3 max-md:w-full rounded-b-lg ${classes.card}`}
              >
                <div className={`${classes.cardH}`}></div>
                <p className="text-smx text-black font-bold py-4 px-4">
                  Home hunting!
                </p>
                <p className="text-sm text-lowblack leading-8 font-semibold px-4 pb-10">
                  <p>
                    Over to you. Take a look at the homes we show you and see if
                    anything takes your fancy.
                  </p>
                  <p>
                    We will show you estimates for the upfront costs (e.g. Stamp
                    Duty) and the ongoing monthly costs (e.g. rent) for each
                    home.
                  </p>
                </p>
              </div>
              <div
                className={`w-1/3 max-md:w-full rounded-b-lg ${classes.card}`}
              >
                <div className={`${classes.cardH}`}></div>
                <p className="text-smx text-black font-bold py-4 px-4">
                  We will verify your finances
                </p>
                <p className="text-sm text-lowblack leading-8 font-semibold px-4 pb-10">
                  We need to verify your finances so we can be confident we are
                  showing you homes that we can actually help you buy. We will
                  need to verify your finances before we can help you make an
                  offer on a home.
                </p>
              </div>
              <div
                className={`w-1/3 max-md:w-full rounded-b-lg ${classes.card}`}
              >
                <div className={`${classes.cardH}`}></div>
                <p className="text-smx text-black font-bold py-4 px-4">
                  Go on viewings
                </p>
                <p className="text-sm text-lowblack leading-8 font-semibold px-4 pb-10">
                  <p>
                    When youve found a few homes you like, its time for a closer
                    look. Its usually a good idea to view a home more than once.
                  </p>
                  <p>
                    And, even if you have found a gem, keep viewing more because
                    things dont always work out first time.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.qualified}`}>
          <div className="p-10 max-md:px-4">
            <div className="text-base2 font-semibold text-midblack pb-4">
              <span></span>Making offers
            </div>
            <div className={`w-1/3 max-md:w-full rounded-b-lg ${classes.card}`}>
              <div className={`${classes.cardH}`}></div>
              <p className="text-base text-black font-bold py-4 px-4">
                Make an offer
              </p>
              <p className="text-sm text-lowblack leading-8 font-semibold px-4 pb-8">
                <p>
                  When you have found a home you love, and we have verified your
                  finances, let your Sales Manager know. We hand negotiations
                  over to you, so we will send you our guide to making offers
                  and give you a call to talk you through the process.
                </p>
                <p>
                  Once you have had an offer accepted, we will lead the buying
                  process and deal with all the legal and technical stuff!
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="px-12 py-6 max-md:px-8 max-md:py-5">
            <div
              className={`pt-4 text-base2 text-midblack ${classes.abHomesTxt}`}
            >
              Sound good?
            </div>
            <div className="pt-6 max-md:pt-2 max-md:pb-4">
              <Button text="Sign Up" style={{ width: "140px" }} />
            </div>
          </div>
          <div className="max-md:hidden -mt-80 pr-12">
            <Image
              src="	https://www.wayhome.co.uk/static/media/icon-house-plant.efcbbdf9.svg"
              width="400"
              height=""
            />
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
