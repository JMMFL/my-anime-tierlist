export default async function getSearch(query, setResults, parameters) {
  const baseUrl = `https://api.jikan.moe/v4/anime?`;
  const { limit, type, popularity } = parameters;
  const response = await fetch(
    `${baseUrl}q=${query}&limit=${limit}&type=${type}&order_by=${popularity}`
  );
  const json = await response.json();
  const { data } = json;
  setResults(data);
}
