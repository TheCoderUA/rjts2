// 🛠 Just a basic-template page.

import React, { FC, ReactElement, Fragment } from "react";
import Navbar from "../components/Navbar/navbar";

// Needs upgrade
const FashionNews: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <MainSection />
    </Fragment>
  );
};

const MainSection: FC = (): ReactElement => {
  return (
    <h1 className="text-pink-600 text-xl font-bold font-great-vibes">
      Fashion News
    </h1>
  );
};

export default FashionNews;
