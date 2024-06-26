import { Board } from "@/types";
import axios from "axios";

interface Result {
  position: number;
  points: number;
  name: string;
}

//Confirm

export const fetchBoard = async () => {
  const res = await axios.get("/jiji", {
    headers: {
      "x-requested-with": process.env.API_KEY,
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

  const result: Result[] = sortedData.map((item, index) => ({
    position: index + 1,
    points: item.points,
    name: `${item.naming.given} ${item.naming.family}`,
  }));

  return result;
};
