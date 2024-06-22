export const dynamic = "force-dynamic";

import Image from "next/image";

import jijicode from "@/lib/assets/jigi app.png";
import pasbycode from "@/lib/assets/activate pasby.png";
import jijilogo from "@/lib/assets/jigi-africa.svg";
import jiji from "@/lib/assets/jigi-app.svg";
import pasbylogo from "@/lib/assets/Pasby™/Pasby™_default-logo_4.svg";

import BoardInfo from "@/components/board-info";

export default function Home() {
  return (
    <main className=" w-full h-screen relative py-[3rem]">
      <div className=" fixed left-[10vh] top-[20vh]">
        <div className=" space-y-5 flex flex-col items-center">
          <Image src={jijilogo} width={150} height={150} alt="" />
          <h1 className=" font-semibold text-lg text-center">
            Scan to download Jigi app
          </h1>
          <Image src={jijicode} width={300} height={300} alt="" />
        </div>
        <br />
      </div>

      <div className=" fixed right-[15vh] top-[20vh]">
        <div className=" space-y-5 flex flex-col items-center">
          <Image src={pasbylogo} width={150} height={150} alt="" />
          <h1 className=" font-semibold text-lg text-center">
            Scan to activate pasby
          </h1>
          <Image src={pasbycode} width={300} height={300} alt="" />
        </div>
      </div>
      <div className=" w-[40%] mx-auto ">
        <h1 className=" font-bold text-5xl">Top Players</h1>
        <br />
        <p className=" font-medium border-b-2 pb-4 text-lg text-gray-400">
          Realtime live pasby competition score leaderboard
        </p>

        <BoardInfo />
      </div>
    </main>
  );
}
