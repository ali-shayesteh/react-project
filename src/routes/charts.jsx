import { useEffect, useRef, useState } from "react";
import StockChart from "../components/charts/stockChart";
import Chart from "../components/charts/chart";

const Charts = () => {
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
  return (
    <div>
      <h1 className="text-3xl text-slate-700 mb-6">Charts</h1>
      <div className="border border-slate-300 rounded-xl p-8 mt-8">
        <StockChart data={data} />
        <div className="border border-slate-300 my-6" />
        <Chart />
      </div>
    </div>
  );
};

export default Charts;
