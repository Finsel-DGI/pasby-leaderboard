import React from "react";
import Image from "next/image";
import first from "@/lib/assets/ahmed-syed-6NVrH0HB_DE-unsplash.jpg";
import { Trophy } from "lucide-react";
import clsx from "clsx";

const Stat = ({
  name,
  image,
  position,
  points,
}: {
  name: string;
  image: string;
  position: number;
  points: number;
}) => {
  return (
    <div className=" relative flex-col space-y-4 flex items-center">
      <div
        className={clsx(
          "   rounded-[50%] relative",
          position != 1 && " w-[9rem] h-[9rem] ",
          position == 1 && " w-[12rem] h-[12rem] "
        )}
      >
        <div
          className={clsx(
            " w-8 h-8 rounded-[50%] absolute right-4 top-2  z-50  ring-2 ring-offset-2 ring-white  text-white font-semibold flex items-center justify-center",
            position == 1 && " bg-gold",
            position == 2 && " bg-silver",
            position == 3 && " bg-bronze"
          )}
        >
          {position}
        </div>
        <Image
          src={image}
          fill
          className=" object-cover object-center z-10 rounded-[50%]"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center space-y-3">
        <h1 className=" text-3xl w-[60%] mx-auto text-center font-extrabold">
          {name}
        </h1>
        <div
          className={clsx(
            " flex space-x-4 items-center",
            position == 1 && " text-gold",
            position == 2 && " text-silver",
            position == 3 && " text-bronze"
          )}
        >
          <Trophy className="" />
          <p className=" font-semibold text-center text-xl">{points} points</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
