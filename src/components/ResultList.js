import { useContext } from "react";
import { Context } from "../App";
import Result from "./Result";

export default function ResultList() {
  const { results } = useContext(Context);
  return results.map((anime, index) => <Result key={index} anime={anime} />);
}
