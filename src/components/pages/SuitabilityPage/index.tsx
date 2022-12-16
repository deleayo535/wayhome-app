import React from "react";
import { Button, FormInput, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./suit.module.css";
export default function SuitabilityPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className={`${classes.signTopWrap}`}>
          <div className="flex justify-between mx-12 pt-16">
            <div className="w-3/4">
              <div className="flex items- text-base2 pb-5 text-midblack ">
                Tell us a little about yourself
              </div>
              <div className="text-black text-smx font-bold ">
                Takes about 2 minutes to complete
              </div>
              <div className="text-midblack text-smx pb-4 ">
                We use your answers to match you with homes, so try to be as
                accurate as possible.
              </div>
            </div>

            <div className="w-1/4">
              <Image
                src="	https://www.wayhome.co.uk/static/media/icon-books-mug.f75ec447.svg"
                width="260px"
                height=""
              />
            </div>
          </div>
        </div>
        <div className={`${classes.qualified}`}>
          <div>
            <div className="flex space-x-4 items-center px-11 py-8">
              <div>
                <Image
                  src="https://www.wayhome.co.uk/static/media/icon-green-house.a318c289.svg"
                  width={"45px"}
                  height={""}
                />
              </div>
              <div className="text-smx">Your home buying situation</div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                Where would you like to live?
              </div>
              <div className="text-smmd text-lowblack pb-4">
                Use a postcode, area or city
              </div>
              <div className="pb-4">
                <FormInput
                  className={`${classes.bt}`}
                  placeholder={"e.g Lagos"}
                />
              </div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                First name
              </div>
              <div className="pb-4">
                <FormInput className={`${classes.form2}`} placeholder={""} />
              </div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                Last name
              </div>

              <div className="pb-4">
                <FormInput className={`${classes.form2}`} placeholder={""} />
              </div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                Email
              </div>

              <div className="pb-4">
                <FormInput className={`${classes.form2}`} placeholder={""} />
              </div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                What is their date of birth?
              </div>

              <div className="flex pb-4 space-x-4">
                <div>
                  <div className="text-sm text-lowblack pb-1">Day</div>
                  <FormInput
                    className={`${classes.formSm}`}
                    placeholder={"DD"}
                  />
                </div>
                <div>
                  <div className="text-sm text-lowblack pb-1">Month</div>
                  <FormInput
                    className={`${classes.formSm}`}
                    placeholder={"MM"}
                  />
                </div>
                <div>
                  <div className="text-sm text-lowblack pb-1">Year</div>
                  <FormInput
                    className={`${classes.formSm}`}
                    placeholder={"YY"}
                  />
                </div>
              </div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                Your phone number
              </div>
              <div className="text-smmd text-lowblack pb-4">
                Please make sure its a NG number eg. +234 8604123123
              </div>
              <div className="pb-4">
                <FormInput className={`${classes.form2}`} placeholder={""} />
              </div>
            </div>
            <div className="pl-10">
              <div className="text-smmd text-midblack font-bold pb-2">
                Lastly, create your password
              </div>
              <div className="text-smmd text-lowblack pb-4">Password</div>
              <div className="pb-4">
                <FormInput className={`${classes.form2}`} placeholder={""} />
              </div>
            </div>
            <div className="pl-10 py-10">
              <Button text="SUBMIT" />
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
