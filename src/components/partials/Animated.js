import "./Animated.css";

import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";

const blobs = [
  "M9.7621 10.2315C-29.5889 38.1493 66.8798 120.37 63.5 168.5C58.3076 242.441 49.4897 311.789 122.762 322.985C191.617 333.506 247.791 291.509 272.762 226.485C296.315 165.153 215.14 129.116 163.5 88.5C112.699 48.5434 62.4753 -27.1661 9.7621 10.2315Z",
  "M16.7621 35.2315C-22.5889 63.1493 20.1419 147.355 16.7621 195.485C11.5697 269.426 -40.4759 345.97 129.762 347.985C300 350 254.791 316.509 279.762 251.485C303.315 190.153 129.762 210.5 242.262 87.4849C354.762 -35.5301 69.4753 -2.1661 16.7621 35.2315Z",
  "M55.762 66.2315C-18.4759 248.463 4.37984 197.87 1 246C-4.19236 319.941 95.4897 367.789 168.762 378.985C237.617 389.506 453.529 351.524 478.5 286.5C502.053 225.168 513.14 215.616 461.5 175C410.699 135.043 130 -116 55.762 66.2315Z",
];

const Animated = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const animationProps = useSpring({ blob: blobs[activeIndex] });

  const handleClickTwo = () => {
    setActiveIndex(() => {
      return 2;
    });
  };
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
        0000
      </button>
      <button
        onClick={() => {
          setActiveIndex(1);
        }}
      >
        1111
      </button>
      <button
        onClick={() => {
          setActiveIndex(2);
        }}
      >
        2222
      </button>
    </div>
  );
};

export default Animated;
