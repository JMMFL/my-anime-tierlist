import { useContext } from "react";
import { FixedSizeList } from "react-window";
import { Context } from "../App";
import Character from "./Character";

export default function CharacterList() {
  const { chars } = useContext(Context);

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth}
      itemCount={chars.length}
      itemSize={350}
    >
      {Character}
    </FixedSizeList>
  );

  // return chars
  //   .slice(0, 100)
  //   .map((character, index) => <Character key={index} character={character} />);
}
