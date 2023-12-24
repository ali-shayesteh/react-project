import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Sample line chart",
  },
  series: [
    {
      data: [1, 2, 3, 4, 7, 8, 3, 6, 3, 7, 9, 2],
    },
  ],
};

const Chart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Chart;
