"use client";

import Stat from "@/components/stat";
import Image from "next/image";
import first from "@/lib/assets/ahmed-syed-6NVrH0HB_DE-unsplash.jpg";
import clsx from "clsx";
import { Loader, Trophy } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchBoard, refactoredBoard } from "@/lib/utils";
import jijilogo from "@/lib/assets/jigi-africa.svg";
import jiji from "@/lib/assets/jigi-app.svg";

export const dynamic = "force-dynamic";

const BoardInfo = () => {
  const { data: boardData, isPending } = useQuery({
    queryKey: ["board"],
    queryFn: fetchBoard,
    refetchOnMount: false,
    // refetchInterval: 5000,
  });

  let refactoredData;

  if (boardData != null) {
    refactoredData = refactoredBoard({ data: boardData });
  }

  return (
    <>
      <div className=" my-14 flex justify-between items-end w-full">
        {isPending ? (
          <div className=" font-semibold text-lg animate-pulse text-center flex items-center space-x-5">
            <Image src={jijilogo} width={80} height={80} alt="" />
            <p>Loading scores ....</p>
          </div>
        ) : refactoredData == null ? (
          <div className=" flex flex-col items-center space-y-5">
            <Image src={jiji} width={80} height={80} alt="" />
            <p className=" text-lg font-semibold text-center">
              {
                "Welcome to Jiji, the ultimate African geography trivia game brought to you by Pasby! Get ready to test your knowledge and explore the rich diversity of the African continent. In this exciting game, you'll be presented with random maps of African countries, and your challenge is to guess the country. Whether you're a geography enthusiast or just looking for some fun, Jiji is the perfect way to learn and play. Let's see how many countries you can identify – let the adventure begin!"
              }
            </p>
          </div>
        ) : (
          refactoredData?.map((item, index) => {
            return (
              <Stat
                key={index}
                name={item.name}
                image="/polar-elephant-holding-ball-near-tree (1).png"
                position={item.position}
                points={item.points}
              />
            );
          })
        )}
      </div>
      <br />

      <div>
        <div className=" w-full border-b-2 border-gray-100 pb-2 mb-5 pl-10 flex justify-between text-lg font-semibold text-gray-400">
          <h2>Name</h2>
          <h2>Point</h2>
        </div>
        {isPending ? (
          <Loader className=" animate-spin" />
        ) : (
          <>
            {" "}
            {refactoredData?.map((item, index) => {
              return (
                <div key={index} className=" w-full">
                  <div className=" flex items-center justify-between mb-10">
                    <div className=" flex items-center space-x-5">
                      <p className=" font-semibold text-gray-400">
                        {item.position}
                      </p>
                      <div
                        className={clsx(
                          " w-[4rem] h-[4rem] overflow-hidden rounded-[50%] relative"
                        )}
                      >
                        <Image
                          src={"/polar-elephant-holding-ball-near-tree (1).png"}
                          fill
                          className=" object-cover object-center"
                          alt=""
                        />
                      </div>
                      <div className=" ">
                        <h1 className=" font-semibold text-xl">{item.name}</h1>
                        <p>{item.points} points</p>
                      </div>
                    </div>
                    {item.position < 4 && (
                      <div
                        className={clsx(
                          " text-gold",
                          item.position == 2 && " text-silver",
                          item.position == 3 && "text-bronze"
                        )}
                      >
                        <Trophy />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default BoardInfo;
