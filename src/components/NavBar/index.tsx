import { Image } from "../atoms/Image";
import classes from "./Nav.module.css";
import { Button } from "../atoms/Button";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <Image height="unset" width="6rem" src="/images/nav-icons/Logo.svg" />
        <button>
          <Image
            height="1.7rem"
            width="1.5rem"
            src="/images/icons/icon-menu.png"
          />
        </button>

        <div>
          <ul>
            <li>Application process</li>
            <li>More</li>
            <li>Log in</li>

            <Button text="Sign up" className={`${classes.mainNav}`} />
          </ul>
        </div>
      </nav>
    </div>
  );
};
