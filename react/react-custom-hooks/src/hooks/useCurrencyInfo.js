import { useState, useEffect } from "react";
import axios from "axios";

export function useCurrencyInfo(baseCurrency, convertedCurrency, apiKey) {
  // baseCurrency and convertedCurrency make sure that we pass arguments in the hook
  // docs says that we can pass multiple converted currencies like this ${`GET /latest?api_key=YOUR_API_KEY&base=USD&currencies=EUR,GBP,JPY`}
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.fxfeed.io/v1/latest?api_key=${apiKey}&base=${baseCurrency}&currencies=${convertedCurrency}`
      ) 
      .then((res) => {
        if (res.success) {
          setData(res.rates);
        }
        else {
          console.error(`Error with with the response, ${res.error.info}`) // handling response error
        }
      })
      .catch((err) => console.log(`fetching errore => ${err}`)); // handling fetching error
  }, [baseCurrency, convertedCurrency]);
  return data;
} // either we send the api key in the header of the request or else we send the api key in the url itself as a query parameter

/* 
  Example Response :- 
  {
  "success": true,
  "base": "USD",
  "date": "2024-09-02",
  "rates": {
    "EUR": 0.85,
    "GBP": 0.73,
    "JPY": 110.22
  }
}
*/
