import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useChart = () => {
  const [data, setData] = useState([]);

  const getRef = useRef(false);

  useEffect(() => {
    if (getRef.current) return;
    getRef.current = true;

    const getData = async () => {
      const data = await fetch(
        "https://demo-live-data.highcharts.com/aapl-ohlc.json"
      ).then((response) => response.json());

      setData(data);
    };
    getData();

    return () => setData([]);
  }, []);

  return { data };
};

export default useChart;
