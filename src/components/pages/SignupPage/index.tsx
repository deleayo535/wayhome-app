import { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "next/link";
import React from "react";
import { Checkbox } from "antd";
import { SUITABILITY } from "../../../utils/routes";
import { Button, Image } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./signup.module.css";

export default function SignPage() {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <PageTemplate>
      <React.Fragment>
        <div className={`${classes.signTopWrap}`}>
          <div className="flex justify-between max-md:flex-col-reverse max-md:pt-8 max-md:mx-4 mx-12 pt-20">
            <div className="flex items-center max-md:text-base text-base2 pb-4 text-midblack ">
              Before we start...
            </div>
            <div>
              <Image
                src="https://www.wayhome.co.uk/static/media/icon-shelf-kettle.dd6c9928.svg"
                width="160px"
                height=""
              />
            </div>
          </div>
        </div>
        <div className={`${classes.qualified}`}>
          <div>
            <div className="ml-8 max-md:ml-4">
              <div className="text-base font-semibold text-midblack pb-1 max-md:pt-8 pt-12">
                Why Byloft?
              </div>
              <p className="text-sm text-lowblack">
                Select all relevant options
              </p>
            </div>
            <div
              style={{ zoom: "1.6" }}
              className="flex flex-col max-md:p-2 space-y-1 p-4"
            >
              <div>
                <Checkbox
                  className="text-xsm text-midblack"
                  onChange={onChange}
                >
                  My credit is poor
                </Checkbox>
              </div>
              <div></div>
              <Checkbox className="text-xsm text-midblack" onChange={onChange}>
                My credit score is My age makes it hard to get a mortgage
              </Checkbox>
              <div></div>
              <Checkbox className="text-xsm text-midblack" onChange={onChange}>
                I want a Shariah compliant option
              </Checkbox>
              <div></div>
              <Checkbox className="text-xsm text-midblack" onChange={onChange}>
                Im self employed
              </Checkbox>
              <div></div>
              <Checkbox className="text-xsm text-midblack" onChange={onChange}>
                Im still considering other avanues
              </Checkbox>
              <div></div>
              <Checkbox className="text-xsm text-midblack" onChange={onChange}>
                I cant get the home I want with traditional financing options
              </Checkbox>
              <div></div>
              <Checkbox className="text-xsm text-midblack" onChange={onChange}>
                Other
              </Checkbox>
            </div>
            <Link href={SUITABILITY}>
              <div className="p-8">
                <Button text="Next" className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
