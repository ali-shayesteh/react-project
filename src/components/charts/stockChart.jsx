// import Highcharts from 'highcharts'
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";

const StockChart = ({ data }) => {
  const options = useMemo(
    () => ({
      chart: {
        type: "candlestick",
      },

      credits: {
        enabled: false,
      },

      title: {
        text: "Sample stock chart",
      },
      series: [
        {
          data: data,
        },
      ],
    }),
    [data]
  );

  return (
    <div className="border rounded-lg p-3">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default StockChart;
