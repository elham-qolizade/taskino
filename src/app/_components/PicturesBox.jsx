"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "../../../public/images/Logo-V2.png";
import BoardIcon from "../../../public/images/BoardIcon.png";
import WorkTableIson from "../../../public/images/WorkTableIcon.png";
import CircleIcon from "@/components/elements/CircleIcon";
import gsap from "gsap";

export default function PicturesBox() {
  const refs = Array.from({ length: 8 }, () => useRef(null));
  const mousePos = useRef({ x: 0, y: 0 });
  const lerpFactor = 0.08;

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current.x = event.clientX;
      mousePos.current.y = event.clientY;
    };
    const animate = () => {
      refs.forEach((ref, i) => {
        const icon = ref.current;
        if (icon) {
          const direction = [1, -1, -1, 1, 1, -1, -1, 1][i];
          const intensities = [0.3, 0.15, 0.2, 0.1, 0.25, 0.18, 0.12, 0.2];
          const intensity = intensities[i];
          const targetX = direction * (mousePos.current.x - 25) * intensity;
          const targetY = direction * (mousePos.current.y - 25) * intensity;
          const newX = targetX * lerpFactor;
          const newY = targetY * lerpFactor;
          gsap.to(icon, {
            x: newX,
            y: newY,
            duration: 3,
            ease: "power2.out",
          });
        }
      });
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-evenly relative xl:pr-28">
      <div className="animate-pulse">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
      <div className="w-full flex flex-col items-center gap-6 sm:px-0 px-4">
        <Image src={BoardIcon} alt="Board Icon" width={100} height={100} />
        <Image
          src={WorkTableIson}
          alt="Work Table Icon"
          width={350}
          height={200}
        />
      </div>
      <CircleIcon
        ref={refs[0]}
        width={80}
        height={80}
        className="absolute top-[12rem] xl:right-[15rem] right-[9rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[1]}
        width={60}
        height={60}
        className="absolute top-[18rem] right-[8rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[2]}
        width={60}
        height={60}
        className="absolute top-[10rem] left-[4rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[3]}
        width={30}
        height={30}
        className="absolute top-[16rem] left-[9rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[4]}
        width={30}
        height={30}
        className="absolute bottom-[11rem] left-[6rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[5]}
        width={70}
        height={70}
        className="absolute bottom-[3rem] left-[3rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[6]}
        width={30}
        height={30}
        className="absolute xl:bottom-[3rem] bottom-[1.5rem] xl:right-[25rem] right-[15rem] lg:block hidden"
      />
      <CircleIcon
        ref={refs[7]}
        width={60}
        height={60}
        className="absolute bottom-[1.5rem] xl:right-[17rem] right-[4rem] lg:block hidden"
      />
    </div>
  );
}
