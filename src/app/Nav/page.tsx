"use client";
import React from "react";
//import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Nav = () => {
  //const [pathChange, setPathChange] = useState(false);
  const route = useRouter();
  //const path = usePathname();

  const scrollToElement = (id: string) => {
    //setPathChange(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    //scrooling to element in a different file using the dom

    /*if (path == "/about") {
      setPathChange(true);
      route.push("/");
    }*/
  };

  /*useEffect(() => {
    if (pathChange) {
      scrollToElement();
    }
    //changing path then scrolling to element using the dom
  });*/

  return (
    <>
      <nav className="nav-bar">
        <div className="btn-div">
          <button onClick={() => route.push("/")}>Home</button>

          <button onClick={() => scrollToElement("technologies-header")}>
            Technologies
          </button>

          <button onClick={() => scrollToElement("projects-header")}>
            Projects
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
