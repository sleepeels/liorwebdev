import "./Animated.css";

import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

const blobs = [
  "M87 21C-25.0001 -65.5 101.5 153.5 27 129C-47.5 104.5 52 336 140 281.5C228 227 221.875 185.002 291.5 187C413.5 190.5 304.14 61.6163 100 21C201.699 90 199 107.5 87 21Z",
  "M87 21C-25.0001 -50 101.5 153.5 190 129C-47.5 104.5 52 336 140 281.5C228 227 221.875 185.002 291.5 187C413.5 10 304.14 61.6163 252.5 21C201.699 -18.9566 199 107.5 87 21Z",
];

const Animated = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const animationProps = useSpring({ blob: blobs[activeIndex] });

  const handleClickOne = () => {
    setActiveIndex(() => {
      return 1;
    });
  };
  const handleClickZero = () => {
    setActiveIndex(() => {
      return 0;
    });
  };
  console.log(animationProps);
  return (
    <div>
      <svg
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <animated.path d={animationProps.blob} fill="#FCAF3C" />
      </svg>

      <button
        onClick={() => {
          setActiveIndex(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          setActiveIndex(1);
        }}
      >
        1
      </button>
    </div>
  );
};

export default Animated;
