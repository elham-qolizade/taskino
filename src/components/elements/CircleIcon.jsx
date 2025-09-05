import React, { forwardRef } from "react";

const CircleIcon = forwardRef(({ width, height, className }, ref) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={ref}
    >
      <foreignObject x="-30" y="-30" width="140" height="140">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(15px)",
            clipPath: "url(#bgblur_0_219_450_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <circle
        data-figma-bg-blur-radius="30"
        cx="40"
        cy="40"
        r="40"
        fill="#073362"
        fillOpacity="0.5"
      />
      <defs>
        <clipPath id="bgblur_0_219_450_clip_path" transform="translate(30 30)">
          <circle cx="40" cy="40" r="40" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default CircleIcon;
