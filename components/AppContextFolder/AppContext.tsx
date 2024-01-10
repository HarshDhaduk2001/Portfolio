import { createContext, Dispatch, SetStateAction } from "react";
import { useRef, useState } from "react";

interface AppContextType {
  sharedState: {
    portfolio: {
      NavBar: {
        scrolling: boolean;
        IntervalEvent: () => void;
      };
    };
  };
  setSharedState: Dispatch<
    SetStateAction<{
      portfolio: {
        NavBar: {
          scrolling: boolean;
          IntervalEvent: () => void;
        };
        Scrolling: {
          IntervalEvent: null;
        };
      };
      userdata: {
        timerCookieRef: React.MutableRefObject<null>;
        windowSizeTracker: React.MutableRefObject<null>;
        mousePositionTracker: React.MutableRefObject<null>;
      };
      typing: {
        keyboardEvent: null;
        eventInputLostFocus: null;
      };
      finishedLoading: boolean;
    }>
  >;
}

const defaultIntervalEvent = () => {
  // Default implementation if needed
  console.log("Default IntervalEvent");
};

const AppContext = createContext({
  sharedState: {
    portfolio: {
      NavBar: {
        scrolling: false,
        IntervalEvent: defaultIntervalEvent,
      },
    },
  },
  setSharedState: () => {}, // Placeholder function
} as AppContextType);

export default AppContext;
export type { AppContextType };
