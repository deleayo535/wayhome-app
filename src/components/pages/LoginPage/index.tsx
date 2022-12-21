import React from "react";
import { Button, FormInput } from "../../atoms";
import { PageTemplate } from "../../template/PageTemplate";
import classes from "./login.module.css";
export default function LoginPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <div className="flex flex-col items-center justify-center my-12 max-md:my-6">
          <div className={`${classes.loginContainer} rounded-xl`}>
            <div
              className={`flex justify-between max-md:px-4 max-md:py-2 px-8 py-4`}
            >
              <div className="text-smx font-['sans']">Sign in to Byloft</div>
              <div className="text-smx font-['reg']">Close</div>
            </div>
            <div className={`${classes.loginWrap} p-10 max-md:p-4`}>
              <div className={`${classes.loginTxt} rounded-lg`}>
                <div className="p-6 max-md:p-4 font-medium text-smmd">
                  In order to provide you with a better service, we've
                  introduced new security measures. If you've already registered
                  but have yet to create a password, you can create one now by
                  resetting your password via this link.
                </div>
              </div>
              <div className={`pb-8 max-md:pb-4 ${classes.formBase}`}>
                <div className="pt-6 max-md:pt-4">
                  <div className="text-base max-md:text-sm text-midblack max-md:pb-0 pb-2">
                    Email
                  </div>
                  <div className="pb-4 max-md:pb-2">
                    <FormInput
                      className={`${classes.form2}`}
                      placeholder={""}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="text-base max-md:text-sm text-midblack max-md:pb-0 pb-2">
                    Password
                  </div>
                  <div className="pb-4 max-md:pb-2">
                    <FormInput
                      className={`${classes.form2}`}
                      placeholder={""}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center max-md:pt-4 pt-6 px-1">
                  <div className="text-base max-md:text-smmd">
                    Reset password?
                  </div>
                  <div>
                    <Button
                      text="Sign In"
                      style={
                        {
                          // width: "10/0px",
                        }
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center max-md:pt-2 pt-4 max-md:text-smmd text-base font-['regs']">
                Don't have an account yet? Get started
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </PageTemplate>
  );
}
