import classes from "./footer.module.css";

export function Footer() {
  return (
    <div className={`${classes.footerWrap}`}>
      <div>
        <div className={`space-y-4 ${classes.footerHead}`}>
          <div
            className={`flex pt-10 justify-center space-x-2 ${classes.footerTxt}`}
          >
            <h1>Got any questions? </h1>
            <p>Check out our FAQs </p>
            <span>or</span>
            <p> chat to us through Intercom</p>
          </div>
          <div
            className={`flex space-x-4 pb-6 justify-center ${classes.footerTxt}`}
          >
            <p>Careers</p>
            <p>Press</p>
            <p>Privacy</p>
            <p>Policy</p>
            <p>Terms and Conditions </p>
            <p>Key Considerations</p>
            <p>Regulatory Information</p>
          </div>
        </div>
        <div className="flex px-10 py-8 space-x-6">
          <div className="w-2/4 space-y-3 whitespace-normal">
            <p>
              Unmortgage Ltd (registered in England and Wales, Company No.
              10395239) and its subsidiaries comprise the Unmortgage Group. Our
              registered office is at 1 Poultry, London, EC2R 8EJ.
            </p>
            <p>Wayhome is a trading name of the Unmortgage Group.</p>
            <p>
              Unmortgage Arrangers Ltd, a subsidiary of Unmortgage Ltd
              (registered in England and Wales, Company No. 11842567), is
              authorised and regulated by the Financial Conduct Authority (Firm
              Reference Number 838366) for arranging and administering insurance
              policies only and is also registered as an EMD Agent of Modulr FS
              Limited (Firm Reference Number 902968).
            </p>
            <p>
              No other aspect of the Unmortgage Groups business falls within the
              scope of financial services regulation. This means you do not have
              any of the protections under the FCA rules and do not have any
              cover from the Financial Ombudsman Scheme or the Financial
              Services Compensation Scheme in relation to your interest in an
              LLP. Customers should ensure they understand what this means
              before they use the Wayhome product.
            </p>
          </div>
          <div className="w-2/4 space-y-3">
            <p>
              For full details relating to our regulatory position please see
              our Regulatory Information Page.
            </p>
            <p>
              Wayhome Property Management Ltd, a subsidiary of Unmortgage Ltd,
              is a member of The Property Redress Scheme (membership number
              PRS025713), which covers activities in relation to the purchase of
              the home, the setting up and management of tenanc
            </p>
            <p>
              Wayhome Nominees Ltd (registered in England and Wales, Company No.
              13085562) is a subsidiary of Unmortgage Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
