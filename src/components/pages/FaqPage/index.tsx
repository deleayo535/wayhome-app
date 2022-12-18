import Link from "next/link";
import React from "react";
import { HOME } from "../../../utils/routes";
import { FormInput } from "../../atoms";
import FaqCard from "../../molecules/FaqCard";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./faq.module.css";
export default function FaqPage() {
  return (
    // <PageTemplate>
    //   <React.Fragment>
    <div>
      <div className={`${classes.faqHead}`}>
        <div className="px-28 py-4">
          <Link href={HOME}>
            <div className="uppercase font-bold text-xl">byloft</div>
          </Link>
          <div className="text-base">Frequently asked questions</div>
          <div className="py-4">
            <FormInput
              placeholder={"Search for articles..."}
              className={`${classes.faqForm}`}
            />
          </div>
        </div>
      </div>
      <div className={`flex justify-center py-8 ${classes.faqSec}`}>
        <div className="space-y-4">
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>
      </div>
      <div className="flex justify-center py-6">
        <div className="flex flex-col text-grey items-center">
          <div className="uppercase font-bold text-xl">byloft</div>
          <div className="text-xsm">we run on Intercom</div>
        </div>
      </div>
    </div>
    //   </React.Fragment>
    // </PageTemplate>
  );
}
