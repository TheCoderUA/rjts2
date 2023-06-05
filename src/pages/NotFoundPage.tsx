// This file needs upgrade

import React, { FC, ReactElement, Fragment } from "react";
import Navbar from "../components/Navbar/navbar";

/* Just alias for short */
type RE = ReactElement;

const NotFoundPage: FC = (): RE => {
  return (
    <Fragment>
      <Navbar />
      <MainSection />
    </Fragment>
  );
};

const MainSection: FC = (): RE => {
  return (
    <Fragment>
      <div className="bg-center" style={{ fontSize: "360px" }}>
        <span className="text-emerald-600">4</span>
        <span className="text-purple-500">0</span>
        <span className="text-yellow-500">4</span>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;
