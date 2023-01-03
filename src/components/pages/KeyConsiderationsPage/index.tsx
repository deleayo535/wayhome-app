import React from "react";
import { PageTemplate } from "../../template/PageTemplate";

export default function KeyConsiderationsPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="mx-8 max-md:mx-6">
          <div className="text-center text-midblack max-md:py-8 py-20">
            <div className="text-xxl max-md:leading-tight max-md:text-xl max-md:pb-2 font-['reg'] pb-8">
              Key Considerations
            </div>
          </div>
        </div>
        <div className="w-3/5 max-md:w-full">
          <div className="mx-12 max-md:mx-6 pb-16 text-smx max-md:text-sm max-md:space-y-2 text-midblack space-y-6">
            <div className="text-base max-md:text-smx leading-tight">
              Before going ahead with a Wayhome arrangement, please consider the
              important information and potential risks outlined below:
            </div>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Loss of Capital
            </div>

            <div>
              The value of the capital you invest into a home through the
              Wayhome arrangement can go up and down, and upon exiting the
              arrangement you may not get back the amount you invested. Your
              capital is therefore at risk. The past price performance of a
              particular home or area should not be relied upon in projecting
              future capital returns.
            </div>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              {" "}
              Availability of properties
            </div>
            <div>
              Subject to market conditions there may not be a sufficient number
              of properties that meet both your requirements/preferences and/or
              the requirements/preferences of our funding partners.
            </div>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Illiquid Investment
            </div>
            <div>
              Through the Wayhome arrangement, you are indirectly investing into
              residential property which is an illiquid asset. Should you
              therefore wish to exit the arrangement you may not be able to
              realise your investment proceeds in a short time frame.
            </div>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Nature of the Investment
            </div>
            <div>
              The Wayhome arrangement is a brand new offering which has not been
              tested in the financial services market. This means it cannot be
              compared with any other existing products on a like for like
              basis.
            </div>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4"></div>
            <div>
              The Wayhome arrangement contains a partnership agreement and a
              rental agreement. Both agreements put an obligation on you to make
              monthly rental payments. Should you fail to keep up with these
              payments or otherwise breach the terms of your agreements, your
              home may be repossessed. The agreements will set out details of
              your obligations.
            </div>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Advice
            </div>
            <div>
              Wayhome does not give investment advice or provide analysis or
              recommendations regarding the purchase of homes through the
              Wayhome arrangement.
            </div>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              {" "}
              Jurisdiction
            </div>
            <div>
              The information and services provided on the Website are not
              provided to, and may not be used by, any person or entity in any
              jurisdiction where the provision or use thereof would be contrary
              to applicable laws, rules or regulations of any governmental
              authority or where the firm is not authorised to provide such
              information or services. Some products and services described in
              the Website may not be available in all jurisdictions or to all
              clients. This list of risk factors does not purport to be a
              complete enumeration or explanation of the risks involved. If you
              are unsure about any aspect of the information provided by the
              company, you should seek advice from an independent financial or
              legal adviser.
            </div>
            <div>
              Buying a home is a big deal. We want to make it simple but also
              make you aware of things you should consider before going ahead.
              We suggest getting a second opinion from an independent,
              regulated, third-party, financial advisor.
            </div>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Buying your home
            </div>
            <div>
              Whenever anyone buys a home there are always associated costs. We
              call them acquisition costs. The costs you will need to cover are:
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
