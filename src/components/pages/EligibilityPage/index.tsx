import React from "react";
import { Button, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./eligibility.module.css";
export default function EligibilityPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="flex  max-md:flex-col justify-between px-10">
          <div className="pl-40 max-md:pl-4 max-md:pt-6 pt-20">
            <div
              className={`text-xxl max-md:text-xlg text-midblack font-['sans']`}
            >
              Eligibility
            </div>
            <div className={`text-base max-md:smx text-midblack`}>
              Find out if we can help you today
            </div>
          </div>
          <div className="pr-20 pt-16 max-md:pt-8">
            <Image
              src="https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/eligibility/6736928c-wayhome-russian-dolls-3-rgb_1000000000000000000028.png"
              width="300px"
              height={""}
            />
          </div>
        </div>
        <div className={`font-['reg'] ${classes.finance}`}>
          <div className="px-44 py-20 max-md:px-4 max-md:py-12">
            <div className="text-xlg text-midblack max-md:pb-4 pb-8">
              Financial criteria
            </div>
            <div className="pl-6">
              <ul className={`${classes.signLi} space-y-3 text-midblack`}>
                <li>24,000 to 140,000 total household income, before tax</li>
                <li>5% to 30% deposit, worth at least 7,500</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="px-44 py-20 max-md:px-4 max-md:py-10">
            <div className="text-xlg font-['reg'] text-midblack max-md:pb-4 pb-8">
              You also need to:
            </div>
            <div className="pl-6">
              <ul
                className={`${classes.signLi} font-['reg'] space-y-3 text-midblack`}
              >
                <li>pass a soft credit check</li>
                <li>be between 21 and 55 years old</li>
                <li>
                  be a Nigerian citizen, or have settled or pre-settled status,
                  or have indefinite leave to remain in the NG
                </li>
                <li>have lived in the NG for the last 3 years</li>
                <li>have no criminal record</li>
                <li>not own other properties by the time you buy with us</li>
                <li>
                  (if you are self employed) have a minimum 1 years worth of tax
                  returns including 2021/2022
                </li>
              </ul>
            </div>
            <div className="text-lg text-midblack font-['reg'] max-md:pt-8 pt-20 max-md:pb-4 pb-8">
              If you will be buying or living with a partner
            </div>
            <div className="space-y-3 text-base max-md:text-smx font-['reg'] text-midblack">
              <div>
                If you are buying with a partner and/or they will also be living
                in the home then they need to be on your application and meet
                our eligibility criteria.
              </div>
              <div>To find out more, click here.</div>
            </div>
            <div className="text-lg text-midblack font-['reg'] max-md:pt-8 pt-20 max-md:pb-4 pb-8">
              If you are not eligible today
            </div>
            <div className="space-y-3 text-base max-md:text-smx font-['reg'] text-midblack">
              <div>
                Our criteria might change over time which might mean we can
                include more people.
              </div>
              <div>
                Gradual Homeownership is just the beginning of our vision at
                Wayhome to reinvent homeownership.
              </div>
              <div>
                So, just because youre not eligible today doesnt mean you wont
                be in the future.
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.eliFoot}`}>
          <div className="flex justify-between max-md:pl-4 pl-28 max-md:pt-10 pt-20">
            <div>
              <div className="text-lg text-midblack font-['reg']max-md:pb-4 pb-8">
                Eligible for our help?
              </div>
              <div>
                <Button
                  text={"Start application"}
                  style={{
                    background: "rgba(212,144,42,1)",
                    color: "#333331",
                  }}
                />
              </div>
              <div className="text-smx text-midblack font-['reg'] pt-8 pb-8">
                Already started?
                <span className="underline"> Keep your application moving</span>
              </div>
              <div className="text-sm text-midblack font-['sans'] tracking-wide max-md:pt-0 pt-16 pb-8">
                *we, us, and our refer to Wayhome and/or their funding partners.
              </div>
            </div>
            <div className="pt-24 max-md:hidden">
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/eligibility/ed7667ea-telephone_10cw08r000000000000028.png"
                }
                width={"400px"}
                height={""}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
