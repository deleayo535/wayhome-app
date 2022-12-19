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
import { Modal } from "antd";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Dropdown } from "flowbite-react";

export const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
        <div className={``}>
          <Dropdown label="More" inline={true}>
            <div className={`${classes.more} space-y-2`}>
              <Dropdown.Item className="border-b-2">
                <Link href={ELIGIBILITY}>
                  <div className="hover:underline ">Eligibility</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="border-b-2">
                <Link href={ABOUT}>
                  <div className="hover:underline">About Us</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="border-b-2">
                <Link href={BLOG}>
                  <div className="hover:underline">Blog</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="border-b-2">
                <Link href={FAQ}>
                  <div className="hover:underline">Faqs</div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="">
                <Link href={WORKS}>
                  <div className="hover:underline">How it works</div>
                </Link>
              </Dropdown.Item>
            </div>
          </Dropdown>
        </div>

        <Link href={""} onClick={showModal}>
          <div className="hover:underline">Log in</div>
        </Link>

        {/* <Modal
          title="Sign in to Byloft"
          open={isModalOpen}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className={`-p-4 ${classes.logInWrap}`}>
            <div className={` ${classes.logIn}`}>
              <p className="text-sm p-4">
                In order to provide you with a better service, we've introduced
                new security measures. If you've already registered but have yet
                to create a password, you can create one now by resetting your
                password via this link.
              </p>
            </div>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </div>
        </Modal> */}
        <Link href={SIGNUP}>
          <Button text="Sign up" className={``} />
        </Link>
      </div>
    </div>
  );
};
