import filterByVotes from "./filterByVotes";
import findVoteMedian from "./findVoteMedian";
import getCharacters from "./getCharacters";

export default async function getTopChars(anime, setChars) {
  const chars = await getCharacters(anime);
  const voteMedian = findVoteMedian(chars);
  const topChars = filterByVotes(chars, voteMedian);
  setChars(topChars);
}
