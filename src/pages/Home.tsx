import React, { FC, ReactElement, Fragment } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Navbar from "../components/Navbar/navbar.js";

const Home: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <IntroImage />
      <PostsSection />
    </Fragment>
  );
};

const IntroImage: FC = (): ReactElement => {
  return (
    /* Container where intro image "lives" */
    <div className="relative overflow-hidden bg-cover background-image text-center">
      {/* Background image mask */}
      <div className="absolute bottom-0 top-0 right-0 left-0 h-full w-full overflow-hidden bg-fixed background-mask">
        <HeadingText />
      </div>
    </div>
  );
};

/* Colored text on intro image */
const HeadingText: FC = (): ReactElement => {
  return (
    // May need upgrades
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

/* Section below the intro image, with fresh posts */
const PostsSection: React.FC = (): React.ReactElement => {
  return (
    // Container
    <div
      className="bg-gradient-to-t from-slate-500 to-black relative overflow-hidden py-12 px-16 w-full"
      style={{ height: "640px" }}
    >
      {/* A grid layout where stored all fresh fashion posts */}
      <div className="grid grid-rows-3 grid-cols-3 gap-4 grid-flow-row-dense">
        {/* Just showing a use case of PostsSection! Not a complete example! Needs upgrade */}
        <PostThumbnail
          bg="https://www.irreverentgent.com/wp-content/uploads/2023/02/Mens-Spring-Fashion-intro.jpg"
          url="/posts/summer-2023-#1"
          title="The summer is comming!"
          text="Are you ready for season of cozy nights and sunshines?"
          gridStyle="row-span-2"
        />
        <PostThumbnail
          bg="https://cdn.hemden.de/media/image/53/1a/66/Fruhjahrs-Mode-Herren.jpg"
          url="/posts/summer-2023-#2"
          title="Summer tips"
          text="Become a serious man with these few tips!"
        />
        <PostThumbnail
          bg="https://fashionjackson.com/wp-content/uploads/2021/02/Fashion-Jackson-Wearing-Tan-Blazer-White-Jeans-Chanel-Slingbacks.jpg"
          url="/posts/summer-2023-#3"
          title="Weekend walkaround!"
          text="What to wear at the weekends? Whe have few tips for it!"
          gridStyle="row-span-2"
        />
      </div>
    </div>
  );
};

type PostThumbnailProps = {
  bg: string;
  url: string;
  title: string;
  text: string;
  gridStyle?: string;
};

const PostThumbnail: FC<PostThumbnailProps> = ({
  bg,
  url,
  title,
  text,
  gridStyle,
}: PostThumbnailProps): ReactElement => {
  // Function for programmatical navigation of posts
  const navigate: NavigateFunction = useNavigate();

  return (
    // A post is a clickable element which have a url to it's publication post
    <div className={`${gridStyle}`} onClick={() => navigate(url)}>
      {/* A post body */}
      <div
        className={`border-none bg-cover rounded-lg hover:brightness-75 transition duration-700 p-6 cursor-pointer`}
        style={{
          backgroundImage: `url("${bg}")`,
        }}
      >
        {/* Needs upgrade */}
        <p className="text-2xl text-slate-200 font-semibold">{title}</p>
        <p className="text-lg text-slate-100 mt-24 mb-2 w-64">{text}</p>
      </div>
    </div>
  );
};

export default Home;
