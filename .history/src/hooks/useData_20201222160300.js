import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = (query) => {
  const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

  const getData = async (query) => {
    const { data } = await axios.get(query);
    setData(data);
  };

  useEffect(() => {
    getData(query);
  }, [query]);

  return [data, getData];
};

export default useData;
