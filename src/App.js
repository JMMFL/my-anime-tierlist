import { createContext, useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import ResultList from "./components/ResultList";
import SearchBar from "./components/SearchBar";
import getSearch from "./tools/getSearch";
import getTopChars from "./tools/getTopChars";

export const Context = createContext();

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [anime, setAnime] = useState(-1);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    if (!query) return;
    getSearch(query, setResults, {
      limit: 5,
      type: "tv",
      orderBy: "popularity"
    });
  }, [query]);

  useEffect(() => {
    if (anime === -1) return;
    getTopChars(anime, setChars);
  }, [anime]);

  return (
    <Context.Provider value={{ setQuery, results, chars, setAnime }}>
      <SearchBar />
      <ResultList />
      <CharacterList />
    </Context.Provider>
  );
}
