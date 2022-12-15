import { Image } from "../../atoms/Image";
import classes from "./Nav.module.css";
import { Button } from "../../atoms/Button";

export const NavBar = () => {
  return (
    <div className={`flex justify-between mx-8 pt-4 ${classes.navMain}`}>
      <div className="p-2">
        <Image height="unset" width="2rem" src="/iconlogo.svg" />
      </div>

      <div className={`flex space-x-4 ${classes.navMain}`}>
        <div>Application process</div>
        <div>More</div>
        <div>Log in</div>

        <Button text="Sign up" className={``} />
      </div>
    </div>
  );
};
