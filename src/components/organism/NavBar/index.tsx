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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
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

          <Link href={""} onClick={showModal}>
            <div className="hover:underline">Log in</div>
          </Link>

          <Modal show={false} onClose={handleCancel}>
            <Modal.Header>
              Terms of Service Terms of ServiceTerms of ServiceTerms of
            </Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Unions General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button onClick={onClick}>
        I accept
      </Button>
      <Button
        color="gray"
        onClick={onClick}
      >
        Decline
      </Button> */}
            </Modal.Footer>
          </Modal>

          {/**<Modal show={true} popup={true} onClose={handleOk}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" required={true} />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/modal"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">{/* <Button /> </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="/modal"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </Modal> **/}

          <Link href={SIGNUP}>
            <Button text="Sign up" className={``} />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
