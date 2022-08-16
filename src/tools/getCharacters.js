export default async function getCharacters(id) {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/characters`
  );
  const json = await response.json();
  const { data } = json;
  return data;
}
