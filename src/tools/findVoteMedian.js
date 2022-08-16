export default function findVoteMedian(characters) {
  const votes = characters.map((character) => character.favorites);
  const sorted = [...votes].sort();
  const length = sorted.length;
  const midIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    const a = sorted[midIndex];
    const b = sorted[midIndex - 1];
    return (a + b) / 2;
  }

  return sorted[midIndex];
}
