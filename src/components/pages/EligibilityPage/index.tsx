import React from "react";
import { Button, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./eligibility.module.css";
export default function EligibilityPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="flex justify-between px-10">
          <div className="pl-40 pt-20">
            <div className={`text-xxl text-midblack font-['sans']`}>
              Eligibility
            </div>
            <div className={`text-base text-midblack`}>
              Find out if we can help you today
            </div>
          </div>
          <div className="pr-20 pt-16">
            <Image
              src="https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/eligibility/6736928c-wayhome-russian-dolls-3-rgb_1000000000000000000028.png"
              width="300px"
              height={""}
            />
          </div>
        </div>
        <div className={`font-['reg'] ${classes.finance}`}>
          <div className="px-44 py-20">
            <div className="text-xlg text-midblack pb-8">
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
          <div className="px-44 py-20">
            <div className="text-xlg font-['reg'] text-midblack pb-8">
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
            <div className="text-lg text-midblack font-['reg'] pt-20 pb-8">
              If you will be buying or living with a partner
            </div>
            <div className="space-y-3 text-base font-['reg'] text-midblack">
              <div>
                If you are buying with a partner and/or they will also be living
                in the home then they need to be on your application and meet
                our eligibility criteria.
              </div>
              <div>To find out more, click here.</div>
            </div>
            <div className="text-lg text-midblack font-['reg'] pt-20 pb-8">
              If you are not eligible today
            </div>
            <div className="space-y-3 text-base font-['reg'] text-midblack">
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
          <div className="flex justify-between pl-28 pt-20">
            <div>
              <div className="text-lg text-midblack font-['reg'] pb-8">
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
              <div className="text-sm text-midblack font-['sans'] tracking-wide pt-16 pb-8">
                *we, us, and our refer to Wayhome and/or their funding partners.
              </div>
            </div>
            <div className="pt-24">
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
