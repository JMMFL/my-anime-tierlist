export default function filterByVotes(characters, threshold) {
  const sorted = [...characters].sort(
    (first, second) => second.favorites - first.favorites
  );

  return sorted.filter((character) => character.favorites > threshold);
}
