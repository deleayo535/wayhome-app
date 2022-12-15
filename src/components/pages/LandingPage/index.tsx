import { Hero } from "../../organism/Hero";
import { Works } from "../../organism/Works";
import { Meet } from "../../organism/Meet";
import { Buy } from "../../organism/Buy";
import { Benefit } from "../../organism/Benefits";
import { Restricton } from "../../organism/Restrictions";
import { PageTemplate } from "../../template/PageTemplate";
import React from "react";

export default function LandingPage() {
  return (
    <PageTemplate>
      <React.Fragment>
        <Hero />
        <Works />
        <Meet />
        <Buy />
        <Benefit />
        <Restricton />
      </React.Fragment>
    </PageTemplate>
  );
}
