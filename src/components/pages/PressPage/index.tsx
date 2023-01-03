import React from "react";
import { PageTemplate } from "../../template/PageTemplate";

export default function PressPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="mx-32 max-md:mx-6">
          <div className="text-center text-midblack max-md:py-6 py-20">
            <div className="text-xxlg max-md:text-xl font-['reg'] max-md:pb-4 pb-8">
              Press and media
            </div>
            <div className="text-lg max-md:text-base max-md:mx-0 px-60">
              For any press enquiries or media opportunities please email us at
              <span>press@wayhome.co.uk</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
