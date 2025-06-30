// src/components/SineWave.jsx
import React from "react";

const SineWave = () => {
  return (
    <div className="w-full overflow-hidden h-20">
      <svg
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50"
          fill="none"
          stroke="#9333EA"
          strokeWidth="4"
        >
          <animate
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="
              M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50;
              M0,50 Q50,100 100,50 T200,50 T300,50 T400,50 T500,50;
              M0,50 Q50,0 100,50 T200,50 T300,50 T400,50 T500,50
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default SineWave;
