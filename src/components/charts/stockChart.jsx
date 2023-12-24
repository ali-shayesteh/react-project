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
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default StockChart;
