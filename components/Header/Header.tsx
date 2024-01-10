import React, { useRef, useState, useEffect, useContext } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import { motion } from "framer-motion";
import AppContext, { AppContextType } from "../AppContextFolder/AppContext";

const Header = (props: { finishedLoading: boolean; sectionsRef: any }) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const NavBarContext = useContext(AppContext) as AppContextType;

  const scrollSizeY = useRef<number>(0);

  useEffect(() => {
    if (NavBarContext.sharedState.portfolio.NavBar.IntervalEvent == null) {
      NavBarContext.sharedState.portfolio.NavBar.IntervalEvent = () => {
        if (scrollSizeY.current == 0) {
          scrollSizeY.current = window.scrollY;
        } else {
          if (window.scrollY > 50) {
            if (window.scrollY > scrollSizeY.current) {
              if (RefNavBar.current) {
                RefNavBar.current.classList.remove("translate-y-0");
                RefNavBar.current.classList.add("-translate-y-full");
              }
            } else {
              RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full");
            }
            scrollSizeY.current = window.scrollY;
          }
        }
      };
    }
  }, [
    NavBarContext.sharedState.portfolio.NavBar,
    NavBarContext.sharedState.portfolio.NavBar.IntervalEvent,
  ]);

  useEffect(() => {
    if (NavBarContext.sharedState.portfolio.NavBar.scrolling == null) {
      NavBarContext.sharedState.portfolio.NavBar.scrolling = true;
      scrollSizeY.current = 0;
      if (typeof window !== "undefined") {
        window.addEventListener(
          "scroll",
          NavBarContext.sharedState.portfolio.NavBar.IntervalEvent
        );
      }
    }
  }, [
    NavBarContext.sharedState.portfolio.NavBar,
    NavBarContext.sharedState.portfolio.NavBar.scrolling,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 10400);
  }, []);

  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      <MobileMenu
        rotate={rotate}
        setRotate={setRotate}
        setShowElement={setShowElement}
        ShowElement={ShowElement}
      />
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 9.4, duration: 0 },
        }}
        className={`w-full fixed ${
          ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
      >
        <Logo finishedLoading={props.finishedLoading} />
        <IconMenu
          rotate={rotate}
          setRotate={setRotate}
          setShowElement={setShowElement}
          ShowElement={ShowElement}
          finishedLoading={props.finishedLoading}
        />
        <DesktopMenu finishedLoading={props.finishedLoading} />
      </motion.div>
    </>
  );
};

export default Header;
