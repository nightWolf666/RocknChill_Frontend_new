import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(url);
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        // console.log("res",res)
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
     
              
        // console.log("data",data)
              
        setData(data);
      } catch (error) {
        console.log("error",error);
        setError(error);
      }
    }
  }, [url]);

  return [error, data];
}
