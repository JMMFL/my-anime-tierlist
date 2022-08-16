import { useContext } from "react";
import { Context } from "../App";

export default function Result({ anime: { title, mal_id } }) {
  const { setAnime } = useContext(Context);

  return (
    <>
      <p>
        {title} <button onClick={() => setAnime(mal_id)}>Load</button>
      </p>
    </>
  );
}
