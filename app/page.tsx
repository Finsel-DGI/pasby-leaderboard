export const dynamic = "force-dynamic";


import BoardInfo from "@/components/board-info";

export default function Home() {
  return (
    <main className=" w-full h-screen py-[3rem]">
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
