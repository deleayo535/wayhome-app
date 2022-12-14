import Link from "next/link";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import {
  CAREERS,
  FAQ,
  KEY,
  PRESS,
  PRIVACY,
  REGULATORY,
  TERMS,
} from "../../../utils/routes";
import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={`${classes.footerWrap}`}>
      <div>
        <div>
          <div className="flex justify-center items-center max-md:justify-start max-md:px-4 max-md:space-x-4 space-x-8">
            <div className="font-semibold text-smx max-md:text-smx max-md:py-2 py-4">
              Find us on
            </div>
            <div className="space-x-4">
              <FacebookOutlined style={{ fontSize: "26px" }} />
              <TwitterOutlined style={{ fontSize: "26px" }} />
              <InstagramOutlined style={{ fontSize: "26px" }} />
              <LinkedinOutlined style={{ fontSize: "26px" }} />
            </div>
          </div>
          <div className={`space-y-4 mx-12 max-md:mx-3 ${classes.footerHead}`}>
            <div
              className={`flex text-sm max-md:pt-2 max-md:py-2 py-4 justify-center max-md:justify-start max-md:space-x-1 space-x-2 ${classes.footerTxt}`}
            >
              <h1 className="">Got any questions? </h1>
              <Link href={FAQ}>
                <p>Check out our FAQs </p>
              </Link>
              <span>or</span>
              <p> chat to us through Intercom</p>
            </div>
            <div
              className={`flex font-medium max-md:flex-col max-md:mx-2 max-md:space-x-0 max-md:space-y-1 space-x-4 mx-8 pb-6 max-md:pb-4 justify-center ${classes.footerTxt2}`}
            >
              <Link href={CAREERS}>
                <p>Careers</p>
              </Link>
              <Link href={PRESS}>
                <p>Press</p>
              </Link>
              <Link href={PRIVACY}>
                <p>Privacy Policy</p>
              </Link>
              <Link href={TERMS}>
                <p>Terms and Conditions </p>
              </Link>
              <Link href={KEY}>
                <p>Key Considerations</p>
              </Link>
              <Link href={REGULATORY}>
                <p>Regulatory Information</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex text-smx max-md:text-sxm max-md:flex-col px-12 py-8 max-md:py-4 max-md:px-4 max-md:space-x-0 max-md:space-y-2 space-x-6">
          <div className="w-2/4 max-md:w-full space-y-3 whitespace-normal">
            <p>
              Unmortgage Ltd (registered in England and Wales, Company No.
              10395239) and its subsidiaries comprise the Unmortgage Group. Our
              registered office is at 1 Poultry, Lagos.
            </p>
            <p>Wayhome is a trading name of the Unmortgage Group.</p>
            <p>
              Unmortgage Arrangers Ltd, a subsidiary of Unmortgage Ltd
              (registered in Nigeria, Company No. 11842567), is authorised and
              regulated by the Financial Conduct Authority (Firm Reference
              Number 8366) for arranging and administering insurance policies
              only and is also registered as an EMD Agent of Modulr FS Limited
              (Firm Reference Number 9968).
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
          <div className="w-2/4 max-md:w-full space-y-3">
            <p>
              For full details relating to our regulatory position please see
              our Regulatory Information Page.
            </p>
            <p>
              Byloft Property Management Ltd, a subsidiary of Unmortgage Ltd, is
              a member of The Property Redress Scheme (membership number
              PRS025713), which covers activities in relation to the purchase of
              the home, the setting up and management of tenanc
            </p>
            <p>
              Byloft Nominees Ltd (registered in Lagos, Company No. 1362) is a
              subsidiary of Byloft Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
