import React from "react";
import classes from "./about.module.css";
import { PageTemplate } from "../../template/PageTemplate";
import { Button, Image } from "../../atoms";

export default function AboutPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="flex justify-center py-16">
          <div className="space-y-12 max-md:space-y-8">
            <div
              className={`flex max-md:px-4 px-12 justify-center items-center ${classes.aboutH}`}
            >
              Hope for aspiring homeowners
            </div>
            <div
              className={`w-3/5 max-md:w-full text-center ${classes.aboutTxt}`}
            >
              We believe if you can afford to rent it, you can afford to
              gradually buy it.
            </div>
          </div>
        </div>
        <div className={`${classes.about}`}>
          <div className="flex py-12 max-md:py-4 max-md:px-2 justify-between max-md:space-x-2 space-x-4">
            <div className="w-3/5 max-md:w-full max-md:mt-4 mt-10 max-md:ml-2 ml-8">
              <div className={`${classes.aboutTxt2}`}>
                <div className={`${classes.aboutH1}`}>Why we exist</div>
                <p className={`pb-6 ${classes.aboutP1}`}>
                  We want to help aspiring homeowners get onto the property
                  ladder.
                </p>
                <p
                  className={`text-lg max-md:text-smx pb-6 max-md:pb-4 ${classes.aboutPWrap}`}
                >
                  You dutifully save your deposit and watch property prices
                  creep ever further away. Meanwhile, you cant settle in a home
                  where control is in your landlord s hands.
                </p>
                <p className={`text-lg pb-6 ${classes.aboutPWrap}`}>
                  Mortgages are the traditional way out of renting. But, getting
                  a mortgage for the same type of home you can afford to rent is
                  difficult. This leaves lots of you feeling trapped. Or,
                  settling for a place your mortgage dictates???away from family,
                  friends and the life you were building.
                </p>
                <p className={`text-lg pb-12 ${classes.aboutPWrap}`}>
                  With Wayhome you can take your first steps away from renting
                  and towards a home you can really love and make your own.
                </p>
              </div>
            </div>
            <div className="w-2/5 max-md:hidden mt-10 mr-8">
              <Image src="" width="520px" height="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex py-12 max-md:py-8 max-md:px-4 justify-between max-md:space-x-2 space-x-4">
            <div className="w-3/5 max-md:w-full mt-10 max-md:mt-0 max-md:ml-0 ml-8">
              <div className={`${classes.aboutTxt}`}>
                <div className={`${classes.aboutSec}`}>Who are we?</div>
                <p className={`pb-6 max-md:pb-4 ${classes.aboutPWrap2}`}>
                  We believe we can unknot the deep-rooted problems that plague
                  homeownership.
                </p>
                <p
                  className={`text-lg pb-6 max-md:pb-4 ${classes.aboutPWrap2}`}
                >
                  We have years of experience in property, home finance, and
                  investment. Since 2016 we have been building strong
                  relationships with institutional investors who want to help
                  aspiring homeowners like you, buy homes. Like us, they are
                  adamant theres another way of unlocking the home-buying
                  stalemate to help you feel confident and secure about your
                  future.
                </p>
                <p
                  className={`text-lg pb-6 max-md:pb-4 ${classes.aboutPWrap2}`}
                >
                  In July 2019 we announced a partnership with Allianz Global
                  Investors, part of the Allianz Group. Allianz Group are one of
                  the worlds largest financial service providers with over 125
                  years experience.
                </p>
                <p
                  className={`text-lg pb-12 max-md:pb-6 ${classes.aboutPWrap2}`}
                >
                  Find out more about our partnership with AllianzGI
                </p>
                <p
                  className={`text-lg pb-12 max-md:pb-6 ${classes.aboutPWrap2}`}
                >
                  We have also been raising enough money to make sure we have
                  the time, and the team, to help you. In August 2018, we raised
                  ???10 million from investors who have previously invested in
                  Lagos.
                </p>
              </div>
            </div>
            <div className="w-2/5 max-md:hidden mt-10 mr-8">
              <Image src="" width="520px" height="" />
            </div>
          </div>
        </div>
        <div>
          <div className="m-10 pb-12 max-md:m-4 max-md:pb-8">
            <div className="text-xl max-md:text-xlg text-black">
              The executive team
            </div>
            <div className="flex max-md:flex-col max-md:items-center max-md:space-x-0 max-md:space-y-4 space-x-8 justify-between">
              <div className="w-1/3 max-md:w-full">
                <div>
                  <Image src="" width="" height="" />
                </div>
                <div>
                  <p className="text-base text-midblack">Conrad Holmboe</p>
                  <p className="text-sm text-lowblack">
                    Chief Investment Officer
                  </p>
                </div>
              </div>
              <div className="w-1/3 max-md:w-full">
                <div>
                  <Image src="" width="" height="" />
                </div>
                <div>
                  <p className="text-base text-midblack">Hugh Boyle</p>
                  <p className="text-sm text-lowblack">
                    Chief Financial Officer & Chief Operating Officer
                  </p>
                </div>
              </div>
              <div className="w-1/3 max-md:w-full">
                <div>
                  <Image src="" width="" height="" />
                </div>
                <div>
                  <p className="text-base text-midblack">Nigel Purves</p>
                  <p className="text-sm text-lowblack">CEO & Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.abHomes}`}>
          <div className="px-12 py-20 max-md:px-4 max-md:py-8">
            <div className={`pb-4 max-md:pb-0 ${classes.abHomesTxt}`}>
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
      </React.Fragment>
    </PageTemplate>
  );
}
