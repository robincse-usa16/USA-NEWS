import { useEffect, useState } from "react";

export default function useFetchNews(apiCall, param) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    apiCall(param)
      .then((res) => mounted && setData(res))
      .catch(() => mounted && setError("Failed to load news"))
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, [apiCall, param]);

  return { data, loading, error };
}
