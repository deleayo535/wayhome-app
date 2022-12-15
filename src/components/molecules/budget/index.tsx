import { Button } from "../../atoms/Button";
import classes from "./budget.module.css";

export const Budget = () => {
  return (
    <div className="ml-8">
      <div className={` ${classes.budget}`}>
        <div className="m-auto">
          <div className={`${classes.budgetH}`}>Wayhome budget</div>
          <div className={`${classes.budgetP}`}>£240,000</div>
        </div>
      </div>
      <div className={`ml-4 ${classes.budget2}`}>
        <div className="m-auto">
          <div className={`${classes.budgetH2}`}>A bank may lend*</div>
          <div className={`${classes.budgetP2}`}>£85,000</div>
        </div>
      </div>
      <div className={`pt-6 ${classes.budgetH3}`}>
        *Based on UK average first time buyer loan to income multiple May 2021
        (UK Finance).
      </div>
      <div className="pt-10">
        <Button text="Start an application" />
      </div>
    </div>
  );
};
