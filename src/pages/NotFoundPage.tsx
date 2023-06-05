import React, { FC, ReactElement, Fragment } from "react";
import Navbar from "../components/Navbar/navbar";

/* Just alias for short */
type RE = ReactElement;

const NotFoundPage: FC = (): RE => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <MainSection />
    </div>
  );
};

const MainSection: FC = (): RE => {
  return (
    <Fragment>
      <div
        className="font-dancing-script flex items-center justify-center h-screen"
        style={{ fontSize: "200px" }}
      >
        <span className="text-green-700 mr-12">Page</span>
        <span className="text-red-700 mr-12 ml-12">not</span>
        <span className="text-blue-700 ml-12">found</span>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;
