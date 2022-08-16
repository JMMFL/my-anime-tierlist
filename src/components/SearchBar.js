import { useContext, useState } from "react";
import { Context } from "../App";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const { setQuery } = useContext(Context);

  const submit = (event) => {
    event.preventDefault();
    setQuery(input);
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="Search">Search</label>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button>Go</button>
      </form>
    </>
  );
}
