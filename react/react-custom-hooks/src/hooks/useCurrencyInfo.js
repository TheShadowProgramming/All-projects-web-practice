import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // this currency in the argument makes sure that the hook accepts an argument for sure
  const [data, setData] = useState({});
  useEffect(() => {
    fetch()
  }, []);
}
