import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "9579c47d779648d24";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
        
      };
      fetchData();
  }, [term]);
    // console.log(data);
    return {data};
};

export default useGoogleSearch;

//`GET https://www.googleapis.com/customsearch/v1?key=AIzaSyD85F57iOQvICcwK3MubdyGre2_Y8f3g-M&cx=9579c47d779648d24:omuauf_lfve&q=lectures`