// Make hooks in js only not in jsx because most of the hooks in react are js

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // When someone calls this hook then we want the api to be loaded not before that thats why we are using useEffect hook

  const [data, setData] = useState({}); // Ye empty obj isliye pass kiya kyuki agar fetch call nahi aarahe toh atleast ek obj toh hei hi ki agar loop lagaoge toh crash nahi karega
  useEffect(
    () => {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
        .then((res) => res.json)
        .then((res) => setData(res[currency]));
      console.log(data);
    },
    [currency] //dependency array
  );
  console.log(data);
  return data;
}

export default useCurrencyInfo;
