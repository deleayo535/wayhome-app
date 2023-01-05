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

            <p>
              The value of the capital you invest into a home through the
              Wayhome arrangement can go up and down, and upon exiting the
              arrangement you may not get back the amount you invested. Your
              capital is therefore at risk. The past price performance of a
              particular home or area should not be relied upon in projecting
              future capital returns.
            </p>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              {" "}
              Availability of properties
            </div>
            <p>
              Subject to market conditions there may not be a sufficient number
              of properties that meet both your requirements/preferences and/or
              the requirements/preferences of our funding partners.
            </p>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Illiquid Investment
            </div>
            <p>
              Through the Wayhome arrangement, you are indirectly investing into
              residential property which is an illiquid asset. Should you
              therefore wish to exit the arrangement you may not be able to
              realise your investment proceeds in a short time frame.
            </p>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Nature of the Investment
            </div>
            <p>
              The Wayhome arrangement is a brand new offering which has not been
              tested in the financial services market. This means it cannot be
              compared with any other existing products on a like for like
              basis.
            </p>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4"></div>
            <p>
              The Wayhome arrangement contains a partnership agreement and a
              rental agreement. Both agreements put an obligation on you to make
              monthly rental payments. Should you fail to keep up with these
              payments or otherwise breach the terms of your agreements, your
              home may be repossessed. The agreements will set out details of
              your obligations.
            </p>

            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Advice
            </div>
            <p>
              Wayhome does not give investment advice or provide analysis or
              recommendations regarding the purchase of homes through the
              Wayhome arrangement.
            </p>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Jurisdiction
            </div>
            <p>
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
            </p>
            <p>
              Buying a home is a big deal. We want to make it simple but also
              make you aware of things you should consider before going ahead.
              We suggest getting a second opinion from an independent,
              regulated, third-party, financial advisor.
            </p>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Buying your home
            </div>
            <p>
              Whenever anyone buys a home there are always associated costs. We
              call them acquisition costs. The costs you will need to cover are:
            </p>
            <div className="text-xlg max-md:text-base2 max-md:pb-0 font-normal pt-6 pb-4">
              Buying more oy your home
            </div>
            <p>
              For each of these acquisition costs (Stamp Duty, conveyancing and
              the property survey) you pay proportionally according to how big a
              deposit you start with. Our funding partners pay the rest.
            </p>
            <p>
              Then, when you buy more of your home, you reimburse them but with
              no interest or fees.
            </p>
            <p>
              For example, on the N350,000 home mentioned above, there may be
              N20,000 of acquisition costs (Stamp Duty of N18,000* and legal and
              survey fees of N2,000). If you pay N370 to buy more of the home,
              then N350 of this would buy an additional 0.1% of the home and the
              remaining N20 would reimburse 0.1% of the acquisition costs.
            </p>
            <p className="text-sxm">
              *Important! Stamp Duty rates have been temporarily reduced by the
              Government for residential property purchased between the 8th of
              July 2020 until the 30th September 2021. On the 1st of October
              2021, the reduced rates will revert to the rates of Stamp Duty
              that were in place prior to the 8th of July 2020. For more
              information, please visit the Governments website.
            </p>
            <p>
              When you buy more, your rent for the next month decreases as you
              own more. In the example above, your monthly rent would decrease
              by 0.1%.
            </p>
            <p>
              When you buy more of your home this includes paying back some of
              the original acquisition costs each time to our funding partners.
              Wayhome doesnt charge you anything extra like fees or other
              amounts when you buy more of your home.
            </p>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
