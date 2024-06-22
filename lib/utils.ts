import { Board } from "@/types";
import axios from "axios";

interface Result {
  position: number;
  points: number;
  name: string;
}

export const fetchBoard = async () => {
  const res = await axios.get("https://r-serve.web.app/jigi/users", {
    headers: {
      "x-requested-with": `${process.env.APP_KEY}`,
      "Content-Type": " application/json ",
      Accept: "*/*",
    },
  });
  const data: Board[] = await res.data.data.board;

  console.log(data);
  return data;
};

export const refactoredBoard = ({ data }: { data: Board[] }) => {
  const sortedData = data.sort((a, b) => b.points - a.points);

  // Step 2: Transform the sorted array into the desired format
  const result: Result[] = sortedData.map((item, index) => ({
    position: index + 1,
    points: item.points,
    name: `${item.naming.given} ${item.naming.family}`,
  }));

  return result;
};
