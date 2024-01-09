import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({options}) => (
  <div  className="border rounded-lg p-3">
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Chart;
