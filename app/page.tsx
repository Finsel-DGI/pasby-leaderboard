export const dynamic = "force-dynamic";

import Image from "next/image";

import jijicode from "@/lib/assets/Jigi Download.png";
import pasbycode from "@/lib/assets/activate pasby.png";

import BoardInfo from "@/components/board-info";

export default function Home() {
  return (
    <main className=" w-full h-screen relative py-[3rem]">
      <div className=" fixed left-10 top-0">
        <div className=" space-y-5">
          <h1 className=" font-semibold text-lg">Scan to download Jigi app</h1>
          <Image src={jijicode} width={60} height={60} alt="" />
        </div>
        <br />

        <div className=" space-y-5">
          <h1 className=" font-semibold text-lg">Scan to activate pasby</h1>
          <Image src={pasbycode} width={60} height={60} alt="" />
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
