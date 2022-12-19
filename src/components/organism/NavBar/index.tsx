import { Image } from "../../atoms/Image";
import classes from "./Nav.module.css";
import { Button } from "../../atoms/Button";
import Link from "next/link";
import {
  ABOUT,
  APPLICATION,
  BLOG,
  ELIGIBILITY,
  FAQ,
  HOME,
  SIGNUP,
  WORKS,
} from "../../../utils/routes";
import LoginModal from "../LoginModal";
import ReactDOM from "react-dom";
import { useState } from "react";

export const NavBar = () => {
  const [shown, setShown] = useState(false);

  const modalBody = () => (
    <div
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        overflow: "auto",

        /* Fixed position */
        left: "20%",
        right: "20%",
        position: "fixed",
        top: "5%",

        /* Take full size */
        height: "90%",
        width: "60%",

        /* Displayed on top of other elements */
        zIndex: 9999,
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          padding: ".5rem",
        }}
      >
        <div style={{ marginRight: "auto" }}></div>
        <button
          style={{
            // backgroundColor: "#357edd",
            border: "none",
            borderRadius: "4px",
            color: "black",
            cursor: "pointer",
            padding: "8px",
          }}
          // onClick={() => setShown(false)}
        >
          Close
        </button>
      </div>
      <div
        style={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        {shown && ReactDOM.createPortal(modalBody(), document.body)}
      </div>
    </div>
  );

  let openLogin = () => {
    setShown(true);
  };
  const OPEN = "openLogin";
  return (
    <div
      className={`flex justify-between items-center mx-8 pt-4 pb-4 ${classes.navMain}`}
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
        <Link href={ELIGIBILITY}>
          <div className="hover:underline">Eligibility</div>
        </Link>
        <Link href={ABOUT}>
          <div className="hover:underline">About Us</div>
        </Link>
        <Link href={BLOG}>
          <div className="hover:underline">Blog</div>
        </Link>
        <Link href={FAQ}>
          <div className="hover:underline">Faqs</div>
        </Link>
        <Link href={WORKS}>
          <div className="hover:underline">How it works</div>
        </Link>

        <Link href={OPEN}>
          <div className="hover:underline">Log in</div>
        </Link>
        <Link href={SIGNUP}>
          <Button text="Sign up" className={``} />
        </Link>
      </div>
    </div>
  );
};
