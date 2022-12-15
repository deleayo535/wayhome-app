import { Image } from "../../atoms/Image";
import classes from "./Nav.module.css";
import { Button } from "../../atoms/Button";
import Link from "next/link";
import { ABOUT, APPLICATION, HOME } from "../../../utils/routes";

export const NavBar = () => {
  return (
    <div
      className={`flex justify-between items-center mx-8 pt-4 ${classes.navMain}`}
    >
      <Link href={HOME}>
        <div className="p-2">
          <Image height="unset" width="2rem" src="/iconlogo.svg" />
        </div>
      </Link>

      <div className={`flex items-center space-x-4 ${classes.navMain}`}>
        <Link href={APPLICATION}>
          <div className="hover:underline">Application process</div>
        </Link>
        <Link href="">
          <div className="hover:underline">More</div>
        </Link>
        <Link href={ABOUT}>
          <div className="hover:underline">About Us</div>
        </Link>

        <Link href="">
          <div className="hover:underline">Log in</div>
        </Link>
        <Button text="Sign up" className={``} />
      </div>
    </div>
  );
};
