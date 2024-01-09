import { useEffect, useRef, useState } from "react";
import PageLayout from "../../layouts/pageLayout";
import StockChart from "../../components/charts/stockChart";
import Chart from "../../components/charts/chart";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
// chart options
import splineChartOptions from "./splineChartOptions";
import pieChartOptions from "./pieChartOptions";
import barChartOptions from "./barChartOprions";

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
    <PageLayout title={"Charts"} Icon={DocumentChartBarIcon}>
      <StockChart data={data} />
      <div className="flex-col md:flex-row flex gap-6">
        <div className="md:basis-1/2">
          <Chart options={pieChartOptions} />
        </div>
        <div className="md:basis-1/2">
          <Chart options={barChartOptions} />
        </div>
      </div>
      <Chart options={splineChartOptions} />
    </PageLayout>
  );
};

export default Charts;
