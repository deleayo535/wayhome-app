import React from "react";
import { Button, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./works.module.css";
export default function WorksPage() {
  return (
    <div>
      <PageTemplate>
        <React.Fragment>
          <div className="flex">
            <div className="w-3/5 pl-40 pt-16">
              <div className={`text-xxl text-midblack font-['sans']`}>
                How it works
              </div>
              <div className={`w-3/4 text-base text-midblack`}>
                We help you fund, find, buy, and manage your home
              </div>
            </div>
            <div className="w-2/5 pt-12">
              <Image
                src={
                  "https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/how-it-works/05f6b495-armchair_10a108n000000000000028.png"
                }
                width={""}
                height={""}
              />
            </div>
          </div>
          <div className={`px-44 py-20 ${classes.works}`}>
            <div className="w-4/5 space-y-3 text-base font-['reg'] text-midblack">
              <div className={`text-lg ${classes.works}`}>
                Home buying without a mortgage
              </div>
              <div className={`text-base ${classes.works}`}>
                We are here for the people who cant buy the home they need or
                want with a mortgage.
              </div>
              <div className={`text-base ${classes.works}`}>
                And that means doing things differently.
              </div>
            </div>
          </div>
          <div className={`${classes.workSec}`}>
            <div className={`px-20 py-20 font-['reg']`}>
              <div className="flex justify-between space-x-8">
                <div className="w-3/4">
                  <div className={`text-lg font-semibold pb-4`}>
                    Funding your home
                  </div>
                  <div className={`text-base pb-4`}>
                    The big difference with us is that we dont lend you any
                    money.
                  </div>
                  <div className={`text-base pb-4`}>
                    Instead we* buy your home with you. If you pay for 5%, well
                    pay for the other 95%. We become co-owners.{" "}
                  </div>
                  <div className={`text-base pb-4`}>
                    The money comes from our funding partners.
                  </div>
                  <div className={`text-base pt-6`}>
                    <Button
                      text="How funding works"
                      style={{
                        background: "rgba(235, 178, 66, 1)",
                        color: "#333331",
                        width: "220px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src={
                      "https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/how-it-works/585c8ee7-visual-1-webuy-green.svg"
                    }
                    width={"460px"}
                    height={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`px-20 pt-20 font-['reg']`}>
              <div className="flex justify-between space-x-20">
                <div>
                  <Image
                    src={
                      "https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/how-it-works/f3668b3f-wayhome-fridge-rgb_1000000000000000000028.png"
                    }
                    width={"460px"}
                    height={""}
                  />
                </div>
                <div className="w-3/4">
                  <div className={`text-lg font-semibold pb-4`}>
                    Finding your home
                  </div>
                  <div className={`text-base pb-4`}>
                    We are different from Rightmove or Zoopla because we need to
                    make sure homes work for you and our funding partners.
                  </div>
                  <div className={`text-base pb-4`}>
                    We filter the entire market and only show you homes that
                    have the best chances of working for you both.
                  </div>
                  <div className={`text-base pt-6`}>
                    <Button
                      text="How we match you with homes"
                      style={{
                        background: "rgba(235, 178, 66, 1)",
                        color: "#333331",
                        // width: "220px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.workSec2}`}>
            <div className={`px-20 pt-20 font-['reg']`}>
              <div className="flex justify-between space-x-8">
                <div className="w-3/4">
                  <div className={`text-lg font-semibold pb-4`}>
                    Buying your home
                  </div>
                  <div className={`text-base pb-4`}>
                    We help you buy the home you actually want.
                  </div>
                  <div className={`text-base pb-4`}>
                    Not the one youre stuck buying with a tiny mortgage.
                  </div>
                  <div className={`text-base pb-4`}>
                    Start with a minimum 5% deposit, buy more over time, then
                    when you can, buy us out completely!
                  </div>
                  <div className={`text-base py-6`}>
                    <Button
                      text="How funding works"
                      style={{
                        background: "rgba(235, 178, 66, 1)",
                        color: "#333331",
                        width: "220px",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-44">
                  <Image
                    src={
                      "https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/how-it-works/8677bc96-wayhome-books-4-rgb_1000000000000000000028.png"
                    }
                    width={"860px"}
                    height={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={`px-20 pt-20 font-['reg']`}>
              <div className="flex justify-between space-x-20">
                <div className="mt-80">
                  <Image
                    src={
                      "https://d9hhrg4mnvzow.cloudfront.net/search.wayhome.co.uk/how-it-works/f19642b7-wayhome-decorating-rgb_10dm07m0dm06p00000g028.png"
                    }
                    width={"560px"}
                    height={"220px"}
                  />
                </div>
                <div className="w-3/4">
                  <div className={`text-lg font-semibold pb-4`}>
                    Funding your home
                  </div>
                  <div className={`text-base pb-4`}>
                    The big difference with us is that we dont lend you any
                    money.
                  </div>
                  <div className={`text-base pb-4`}>
                    Instead we* buy your home with you. If you pay for 5%, well
                    pay for the other 95%. We become co-owners.{" "}
                  </div>
                  <div className={`text-base pb-4`}>
                    The money comes from our funding partners.
                  </div>
                  <div className={`text-base pt-6`}>
                    <Button
                      text="How we match you with homes"
                      style={{
                        background: "rgba(235, 178, 66, 1)",
                        color: "#333331",
                        // width: "220px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.workFoot}`}>
            <div className="flex justify-between pl-28 pt-20">
              <div>
                <div className="text-lg text-midblack font-['reg'] pb-8">
                  Ready to become a homeowner?
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
                  <span className="underline">
                    {" "}
                    Keep your application moving
                  </span>
                </div>
                <div className="text-sm text-midblack font-['sans'] tracking-wide pt-16 pb-8">
                  *we, us, and our refer to Wayhome and/or their funding
                  partners.
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
    </div>
  );
}
