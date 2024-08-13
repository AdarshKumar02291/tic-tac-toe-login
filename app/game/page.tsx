import Board from "@/components/board";
import LeaderBoard from "@/components/leaderboard";

export default function Home() {
  return (
    <div className=" flex flex-col h-fit md:h-screen gap-y-4 lg:gap-x-4  items-center lg:flex-row justify-center">
      <Board />
      <LeaderBoard />
    </div>
  );
}
