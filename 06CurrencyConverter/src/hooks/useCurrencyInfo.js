//Notes
// when ther is no html in a file we can use js, hooks don't have any HTML in them so can be used as js
// Most API calls give data in string format so we have to convert it into JSON format

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //the importance of this empty object is it acts as an contingency plan so that if no data is received from the API call our app wont crash cause of it
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.table();

    // if i hold the currency data in a regular variable then it creates a problem, i.e it will never update the UI
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
