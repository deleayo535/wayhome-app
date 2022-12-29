import React from "react";
import { PageTemplate } from "../../template/PageTemplate";

export default function PressPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="mx-32">
          <div className="text-center text-midblack py-20">
            <div className="text-xxlg font-['reg'] pb-8">Press and media</div>
            <div className="text-lg mx-72">
              For any press enquiries or media opportunities please email us at
              <span>press@wayhome.co.uk</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
