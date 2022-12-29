import React from "react";
import { PageTemplate } from "../../template/PageTemplate";

export default function RegulatoryPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="mx-32">
          <div className="text-center text-midblack py-20">
            <div className="text-xxlg font-['reg'] pb-8">
              Regulatory Information
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <div className="mx-12 pb-16 text-base2 text-midblack space-y-6">
            <div className="text-xl font-normal pt-6 pb-4">
              {" "}
              Is your investment in an LLP regulated by the FCA?
            </div>

            <div>
              Your interest in an LLP, and our involvement in arranging for you
              to acquire or sell your interests in the LLP, is not regulated by
              the FCA because this does not fall within the scope of financial
              services regulation. This means you do not have any protections
              under the FCA rules and do not have any cover from the Financial
              Ombudsman Scheme or the Financial Services Compensation Scheme in
              relation to your interest in an LLP.
            </div>
            <div>
              This is an important difference to other home finance products,
              such as a mortgage. This is because mortgages, and mortgage
              providers, are required to be regulated by the FCA. Wayhome is not
              supervised and regulated by the FCA, or subject to any FCA rules,
              in relation to these activities.
            </div>
            <div className="text-xl font-normal pt-6 pb-4">
              What about the insurance arrangements?
            </div>

            <div>
              As mentioned above, Wayhome is not regulated by the FCA for the
              main part of its business, which relates to arranging for you to
              acquire or sell your interests in an LLP and activities associated
              with your interest in an LLP.
            </div>
            <div>
              However, as part of Wayhomes activities, we arrange buildings
              insurance on the properties we help people to buy. This very small
              part of our business falls within the scope of financial services
              regulation. As a result, Wayhome is authorised and regulated by
              the FCA in relation to arranging insurance policies only (FRN
              902968). Wayhome is not authorised and regulated by the FCA for
              any other aspect of our business.
            </div>
            <div className="text-xl font-normal pt-6 pb-4">
              Is Wayhome part of The Property Redress Scheme?
            </div>

            <div>
              Yes. Wayhome is also a member of The Property Redress Scheme
              (membership number PRS025713), which covers our activities in
              relation to the purchase of your home, the setting up and
              management of your tenancy and the management of maintenance of
              your home.
            </div>
            <div>
              If you have issues related to your experience with us, or when
              living in a Wayhome property, then Wayhome has signed up to The
              Property Redress Scheme which is a government authorised
              independent organisation that handle complaints for the property
              industry.
            </div>
            <div className="text-xl font-normal pt-6 pb-4">
              Does the RICS Dispute Resolution Service apply?
            </div>

            <div>
              We only use qualified independent surveyors who are members of The
              Royal Institute of Chartered Surveyors (RICS) for property and
              rental valuations. This means that any complaints arising about a
              surveyor can be submitted to the RICS Dispute Resolution Service.
              Further information is available on the RICS website. The RICS
              Dispute Resolution Service is the worlds oldest and largest
              provider of alternative dispute resolution services (ADRs) in the
              land, property and construction industries.
            </div>
            <div>
              Yes. One of the services offered is the RICS Consumer Mediation
              Scheme which can be used to resolve disputes between a business
              and a consumer. Following an application, RICS will nominate an
              impartial, accredited mediator who will help disputing parties to
              find a mutually acceptable solution. Fees range from £50-400 + VAT
              for disputes of up to £50,000 taking 1-4 hours of mediation time
              (costs as at June 2020). The RICS Consumer Mediation Scheme also
              offers a helpline providing free advice from a chartered surveyor
              for any party who is not professionally represented.
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
