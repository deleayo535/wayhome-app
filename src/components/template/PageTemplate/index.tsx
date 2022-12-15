import React from "react";
import { Footer, NavBar } from "../../organism";
import { PageTemplateProps } from "./PageTemplate.types";
import classes from "./PageTemplate.module.css";

export const PageTemplate = ({
  children,
  hasNavBar = true,
  hasFooter = true,
}: PageTemplateProps) => {
  return (
    <React.Fragment>
      {hasNavBar && <NavBar />}
      <section className={classes.container}>{children}</section>
      {hasFooter && <Footer />}
    </React.Fragment>
  );
};
