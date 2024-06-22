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
      "x-requested-with": `A6cC9SO7w44.sf~iAo1,c2u.zOoIHVq.ZIPafmj_`,
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
