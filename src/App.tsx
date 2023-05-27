import React from "react";
import Navbar from "./components/Navbar/navbar";

export default class App extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <IntroImage />
        <SeasonSection />
      </React.Fragment>
    );
  }
}

const IntroImage: React.FC = (): React.ReactElement => {
  return (
    <div className="relative overflow-hidden bg-cover background-image text-center">
      {/* Background image mask */}
      <div className="absolute bottom-0 top-0 right-0 left-0 h-full w-full overflow-hidden bg-fixed background-mask">
        <HeadingText />
      </div>
    </div>
  );
};

const HeadingText: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <p
        className="text-9xl text-purple-600 font-bold font-great-vibes"
        style={{ marginTop: "135px" }}
      >
        Open
      </p>
      <p className="text-5xl text-blue-300 font-dancing-script mt-6">the</p>
      <p className="m-9">
        <span className="text-6xl text-orange-500">Colorful</span>
        <span className="text-8xl text-blue-800 font-great-vibes ml-5">
          World
        </span>
      </p>
      <p className="m-9">
        <span className="text-6xl text-yellow-500 font-dancing-script">of</span>
        <span className="text-4xl text-cyan-400 ml-4">the</span>
      </p>
      <span className="text-6xl text-pink-300 font-Arial">Modern</span>
      <span className="text-9xl text-red-700 font-great-vibes font-bold ml-4">
        Fashion
      </span>
    </React.Fragment>
  );
};

const SeasonSection: React.FC = (): React.ReactElement => {
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-pink-400 relative overflow-hidden py-12 px-16 w-full"
      style={{ height: "420px" }}
    >
      {/* Heading text of urrent season publications area */}
      <div className="text-7xl font-dancing-script">
        <span className="text-green-400">The Spring </span>
        <span className="text-orange-400">vibe</span>
        <span className="text-7xl text-pink-600 font-dancing-script bold ml-7">
          !
        </span>
      </div>
    </div>
  );
};
