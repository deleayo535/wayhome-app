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
// import { Checkbox } from "antd";
import { useState } from "react";
import { Dropdown, Label, Modal, TextInput } from "flowbite-react";
import React from "react";

export const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsNavExpanded((prev) => !prev);
    console.log("am clicked");
  };

  return (
    <React.Fragment>
      <div
        className={`flex justify-between items-center mx-8 max-md:mx-4 pt-4 pb-4 ${classes.navMain}`}
      >
        <div>
          <Link href={HOME}>
            <div className="p-2">
              <Image height="unset" width="2rem" src="/iconlogo.svg" />
            </div>
          </Link>
        </div>

        <nav className={`flex ${classes.navigation}`}>
          <div className={`${classes.hamburger}`} onClick={toggleMenu}>
            <Button
              text="Menu"
              // onclick={toggleMenu}
              // className={`${classes.hamburger}`}
            />
          </div>
          <div
            className={`${
              isNavExpanded ? classes.open : ""
            } flex items-center space-x-4 ${classes.navigationMenu}`}
          >
            <ul className={`${classes.navRight}`}>
              <div className="flex space-x-6 max-md:space-x-0 max-md:flex-col justify-between items-center max-md:pl-8 max-md:space-y-4 max-md:items-start ">
                <li>
                  <Link href={APPLICATION}>
                    <div className="hover:underline">Application process</div>
                  </Link>
                </li>

                {/* <li className="pl-8 border-r-8"></li> */}
                <li className="">
                  <div className={``}>
                    <Dropdown label="More" inline={true}>
                      <div className={`${classes.more} space-y-2`}>
                        <Dropdown.Item className="border-b-2">
                          <Link href={ELIGIBILITY}>
                            <div className={`${classes.more} hover:underline`}>
                              Eligibility
                            </div>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="border-b-2">
                          <Link href={WORKS}>
                            <div className="hover:underline">How it works</div>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="border-b-2">
                          <Link href={ABOUT}>
                            <div className="hover:underline">About Us</div>
                          </Link>
                        </Dropdown.Item>

                        <Dropdown.Item className="border-b-2">
                          <Link href={FAQ}>
                            <div className="hover:underline">FAQs</div>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="">
                          <Link href={BLOG}>
                            <div className="hover:underline">Our Blog</div>
                          </Link>
                        </Dropdown.Item>
                      </div>
                    </Dropdown>
                  </div>
                </li>
                <li>
                  <Link href={""} onClick={showModal}>
                    <div className="hover:underline">Log in</div>
                  </Link>
                </li>
                <li>
                  <Link href={SIGNUP}>
                    <Button text="Sign up" className={``} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
