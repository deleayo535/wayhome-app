import React from "react";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./career.module.css";
import { Image } from "../../atoms";
import { CheckOutlined } from "@ant-design/icons";

export default function CareerPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div>
          <div className="flex justify-center max-md:hidden pb-4 text-bcolor space-x-8 text-smmd font-medium">
            <div>Our Story</div>
            <div>Who We Are</div>
            <div>Perks</div>
            <div>Jobs</div>
            <div>Location</div>
          </div>
        </div>
        <div className={`${classes.careerTop} max-md:pb-0 pb-4`}>
          <div className="pb-12">
            <div className="text-center">
              <div className="text-xlg max-md:text-base2 text-midblack max-md:py-2 py-12 font-bold">
                Who we are
              </div>
              <div className="text-smx max-md:text-sxm max-md:px-6 max-md:py-2 px-12 py-6 text-lowblack">
                At Wayhome we are reinventing homeownership by co-investing with
                people who havent been able to buy a home yet. We are a small
                team of property specialists, data scientists, engineers and
                creatives, who are addressing one of the biggest and most
                life-changing problems our customers have: how they can get the
                security and freedom of homeownership for their families and for
                themselves.
              </div>
              <div className="text-smx max-md:text-sxm max-md:px-6 max-md:py-2 px-12 py-6 text-lowblack">
                We believe in the power of a shared goal and set of beliefs. Our
                core values are the commitments we have made to each other: they
                are what unite us, guiding our decision-making and driving us to
                deliver our best work.
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.careerTop} max-md:pb-0 pb-4`}>
          <div className="px-12 max-md:px-0 max-md:py-4 py-8">
            <div className="text-center">
              <div className="text-xlg max-md:text-base2 text-midblack font-bold">
                Our vision
              </div>
              <div className="text-smx max-md:text-sm max-md:px-6 px-12 pb-8 max-md:leading-5 text-midblack">
                People deserve to live where they love, and love where they
                live, in a home of their own.
              </div>
              <div className="flex max-md:flex-col">
                <div className="text-smmd max-md:text-sxm max-md:space-y-4 space-y-6 max-md:py-0 max-md:px-6 px-12 py-6 text-lowblack">
                  <div>
                    Home matters. A house is just a structure. A property is
                    just a rung on the ladder. But home?
                  </div>
                  <div>
                    Home is a place to be unashamedly you. Somewhere you can put
                    down roots and settle in for the future. A place to return
                    to after lifes adventures.
                  </div>
                  <div>
                    We will untie the knots homeownership is in. Were not
                    looking for perfect, but there are ways to make it better.
                    Right now homeownership is rigid and we know it can be
                    flexible.
                  </div>
                  <div>
                    There should be new ways to get your foot on and off the
                    ladder. You should be able to buy the same type of home you
                    can rent and you shouldnt have to give up your home because
                    youre shackled to a buying chain. As your family grows, your
                    home should too. And as you grow older, the home youve loved
                    shouldnt become a burden. Nobody should feel forced to sell.
                  </div>
                  <div>
                    Everyone should have access to decent homes. You deserve
                    your own place. Your own space. Somewhere you can makes
                    plans for and from. Somewhere comfortable to kick back in.
                    Somewhere secure to settle in.
                  </div>
                  <div>Our vision, in short, is a new way home.</div>
                </div>
                <div className="py-8 pr-16 max-md:pr-0 max-md:px-4">
                  <Image
                    src="	https://d27i7n2isjbnbi.cloudfront.net/careers/photos/129477/normal_photo_1567008707.png"
                    width={"180rem"}
                    height={""}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.careerTop} max-md:pb-0 pb-4`}>
          <div className="text-center max-md:px-6 max-md:py-4 px-12 py-8">
            <div className="text-xlg max-md:text-base2 max-md:leading-10 text-midblack pt-4 font-bold">
              Why we do what we do
            </div>
            <div className="text-smx max-md:px-0 px-12 py-6 text-lowblack">
              Help us make a difference to peoples lives - for the better 🙌🏻
            </div>
          </div>
        </div>
        <div className={`${classes.careerTop} max-md:pb-0 pb-4`}>
          <div className="text-center px-12 py-12 max-md:px-6 max-md:py-4">
            <div>
              <div className="text-xlg max-md:text-base2 text-midblack pt-4 font-bold">
                Our values
              </div>
              <div className="text-smx max-md:text-smmd max-md:px-0 px-12 pb-8 text-lowblack">
                Our commitment to each other
              </div>
            </div>
            <div className="flex max-md:flex-col justify-center max-md:items-center max-md:space-y-4 max-md:space-x-0 space-x-12">
              <Image
                src={
                  "	https://d27i7n2isjbnbi.cloudfront.net/careers/photos/236364/thumb_photo_1629206751.jpg"
                }
                width={""}
                height={""}
              />
              <Image
                src={
                  "	https://d27i7n2isjbnbi.cloudfront.net/careers/photos/236365/thumb_photo_1629206755.jpg"
                }
                width={""}
                height={""}
              />
              <Image
                src={
                  "https://d27i7n2isjbnbi.cloudfront.net/careers/photos/236363/thumb_photo_1629206751.jpg"
                }
                width={""}
                height={""}
              />
              <Image
                src={
                  "https://d27i7n2isjbnbi.cloudfront.net/careers/photos/236366/thumb_photo_1629206755.jpg"
                }
                width={""}
                height={""}
              />
            </div>
          </div>
        </div>
        <div className={`${classes.careerTop} max-md:pb-0 pb-4`}>
          <div className="text-center max-md:px-6 max-md:py-10 px-12 py-24">
            <div className="text-smmd  px-12 max-md:px-0 max-md:text-sxm pb-4 text-lowblack">
              <span className="font-bold">We care. </span>
              About our purpose, our customers and each other.
            </div>
            <div className="text-smmd  px-12 max-md:px-0 max-md:text-sxm pb-4 text-lowblack">
              <span className="font-bold">We deliver. </span>
              We do great work, own our outcomes and find a way.
            </div>
            <div className="text-smmd  px-12 max-md:px-0 max-md:text-sxm pb-4 text-lowblack">
              <span className="font-bold">We collaborate. </span>
              We embrace teamwork, share our knowledge and help each other grow.
            </div>
            <div className="text-smmd  px-12 max-md:px-0 max-md:text-sxm text-lowblack">
              <span className="font-bold">We innovate. </span>We are curious,
              open-minded and challenge the status quo.
            </div>
          </div>
        </div>
        <div className={`${classes.careerBtm}`}>
          <div className="px-16 max-md:px-6 max-md:py-10 py-12">
            <div>
              <div className="text-center text-xlg max-md:text-base2 max-md:pb-6 pb-12 font-bold">
                ✨ Perks & benefits ✨
              </div>
              <div className="flex max-md:flex-col justify-center max-md:px-0 px-20 max-md:space-x-0 space-x-20 text-smmd max-md:text-sxm font-medium">
                <div className="w-1/3 max-md:w-full max-md:space-y-1 space-y-4 items-center">
                  <div>
                    <CheckOutlined /> Unlimited holidays with a minimum 28
                    days/yr
                  </div>
                  <div>
                    <CheckOutlined /> Your choice of hardware
                  </div>
                  <div>
                    <CheckOutlined /> Monthly team outings budget
                  </div>
                </div>
                <div className="w-1/3 max-md:w-full max-md:space-y-1 space-y-4">
                  <div>
                    <CheckOutlined /> Remote working AND a pet-friendly office
                  </div>
                  <div>
                    <CheckOutlined /> Cycle to work scheme
                  </div>
                  <div>
                    <CheckOutlined /> Learning budget of up to N600 per year
                  </div>
                </div>
                <div className="w-1/3 max-md:w-full max-md:space-y-1 space-y-4">
                  <div>
                    <CheckOutlined /> Mental health budget
                  </div>
                  <div>
                    <CheckOutlined /> Stock options for high performance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
