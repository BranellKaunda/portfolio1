"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [pathChange, setPathChange] = useState(false);
  const route = useRouter();
  const path = usePathname();

  const scroll = () => {
    const el = document.getElementById("projects-header");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToElement = () => {
    const el = document.getElementById("projects-header");
    el?.scrollIntoView({ behavior: "smooth" });
    //scrooling to element in a different file using the dom

    if (path == "/about") {
      setPathChange(true);
      route.push("/");
    }
  };

  useEffect(() => {
    if (pathChange) {
      scroll();
    }
    //changing path then scrolling to element using the dom
  });

  return (
    <>
      <nav className="nav-bar">
        <div className="btn-div">
          <button onClick={() => route.push("/")}>Home</button>

          <button onClick={scrollToElement}>Projects</button>

          <button onClick={() => route.push("/about")}>About</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
