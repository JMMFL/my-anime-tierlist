import { useEffect, useState } from "react";

export default function useFetchHook(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (!url) return;

    async function getRequest() {
      const response = await fetch(url);
      const json = await response.json();
      const { data } = json;
      setData(data);
    }

    setLoading(true);
    getRequest();
    getRequest.catch(setError).finally(() => setLoading(false));
  }, [url]);

  return { loading, error, data };
}
