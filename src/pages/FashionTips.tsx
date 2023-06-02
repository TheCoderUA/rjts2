// 🛠 Just a basic-template page.

import React, { FC, ReactElement, Fragment } from "react";
import Navbar from "../components/Navbar/navbar";

// Needs upgrade
const FashionTips: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <MainSection />
    </Fragment>
  );
};

const MainSection: FC = (): ReactElement => {
  return (
    <h1 className="text-yellow-400 text-xl font-bold font-great-vibes">
      Fashion Tips
    </h1>
  );
};

export default FashionTips;
