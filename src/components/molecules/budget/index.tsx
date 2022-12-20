import { Button } from "../../atoms/Button";
import classes from "./budget.module.css";

export const Budget = () => {
  return (
    <div className="ml-8 max-md:m-4  max-md:space-y-4">
      <div className={`max-md:ml-2 ${classes.budget}`}>
        <div className="m-auto">
          <div className={`${classes.budgetH}`}>Wayhome budget</div>
          <div className={`${classes.budgetP}`}>₦240,000</div>
        </div>
      </div>
      <div className={`ml-4 max-md:ml-2 ${classes.budget2}`}>
        <div className="m-auto">
          <div className={`${classes.budgetH2}`}>A bank may lend*</div>
          <div className={`${classes.budgetP2}`}>₦85,000</div>
        </div>
      </div>
      <div className={`pt-6  max-md:pt-2 ${classes.budgetH3}`}>
        *Based on NG average first time buyer loan to income multiple May 2021
        (NG Lagos).
      </div>
      <div className="text-2xl pt-10 max-md:pt-2">
        <Button
          style={{
            // fontSize: "20px",
            color: "rgb(2, 90, 101)",
            background: "rgb(222, 234, 235)",
            border: "1px solid rgb(2, 90, 101)",
          }}
          text="Start an application"
        />
      </div>
    </div>
  );
};
