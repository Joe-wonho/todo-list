import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  //   const [isPending, setIsPending] = useState(true);
  //   const [error, setError] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        // setIsPending(false);
        setData(data);
        // setError(null);
      })
      .catch((err) => {
        // setIsPending(false);
        // setError(err.message);
      });
    // }, 0);
  }, [url]);
  return data;
  //   return [data, isPending, error];
};

export default useFetch;
