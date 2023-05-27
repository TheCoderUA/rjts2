import React, { FC, ReactElement } from "react";

const Navbar: FC = (): ReactElement => {
  return (
    <nav className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 sticky top-0 z-10 border-b border-red-600">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

const Logo: FC = (): ReactElement => {
  return (
    <a href="#" className="text-4xl font-semibold font-great-vibes">
      <span className="text-green-700">Vo</span>
      <span className="text-red-700">ya</span>
      <span className="text-blue-700">ge</span>
    </a>
  );
};

const NavLinks: FC = (): ReactElement => {
  type Link = {
    label: string;
    url: string;
  };

  const links: Link[] = [
    { label: "Fashion News", url: "/home" },
    { label: "Men", url: "/men" },
    { label: "Women", url: "/women" },
    { label: "Fashion Tips", url: "/tips" },
  ];

  return (
    <div className="flex space-x-6 text-blue-400 font-shadows-into-light font-semibold text-xl">
      {links.map((link) => (
        <a href={link.url}>{link.label}</a>
      ))}
    </div>
  );
};

export default Navbar;
