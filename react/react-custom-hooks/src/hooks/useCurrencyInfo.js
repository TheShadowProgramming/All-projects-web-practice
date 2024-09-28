import { useState, useEffect } from "react";
import axios from "axios";

export function useCurrencyInfo(currency, apiKey) {
  // this currency in the argument makes sure that the hook accepts an argument for sure
  const [data, setData] = useState({});
  useEffect(async () => {
    const apiData = await axios.get()
  }, []);
}
