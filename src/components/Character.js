import { useContext } from "react";
import { Context } from "../App";

export default function Character({ index, style }) {
  const { chars } = useContext(Context);
  const { character } = chars[index];
  const {
    name,
    images: {
      jpg: { image_url }
    }
  } = character;

  const reComma = /^(.+?),/;
  const [, last, first] = name.split(reComma);

  return (
    <div style={{ ...style }} draggable="true">
      <img style={{ width: "150px" }} src={image_url} alt={`${name}`} />
      <h1 style={{ fontSize: "18px" }}>{first ? `${first} ${last}` : name}</h1>
    </div>
  );
}
