### useCallback vs useEffect
 - when we do asyn calls like data fetching setTimeouts then we gotta cleanup those async calls therefore whenever certain state changes due to these async calls then we use useEffect hook to do cleanup after the function that we pass in useEffect along with the array of dependencies

 - and when we just want to update variables then maybe it would be better to just call useCallback functions which would just update the variables with no cleanup functions required