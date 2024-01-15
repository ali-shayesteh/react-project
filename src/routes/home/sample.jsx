import Table from "../../components/table/table";
import useTable from "../../hooks/useTable";
import { TEXT_SAMPLE as TEXT } from "../../constants/texts";
import HeadingTwo from "../../components/typography/HeadingTwo";
import SliderOne from "../sliders/sliderOne";
import StockChart from "../../components/charts/stockChart";
import useChart from "../../hooks/useChart";
import Chart from "../../components/charts/chart";
import pieChartOptions from "../charts/pieChartOptions";
import barChartOptions from "../charts/barChartOprions";
import splineChartOptions from "../charts/splineChartOptions";

const Sample = () => {
  const { data, columns } = useTable();
  const { data: stockData } = useChart();

  return (
    <div className="flex gap-6 flex-col mt-6">
      <HeadingTwo title={TEXT.slider} />
      <SliderOne />

      <HeadingTwo title={TEXT.chart} />
      <StockChart data={stockData} />
      <div className="flex-col md:flex-row flex gap-6">
        <div className="md:basis-1/2">
          <Chart options={pieChartOptions} />
        </div>
        <div className="md:basis-1/2">
          <Chart options={barChartOptions} />
        </div>
      </div>

      <HeadingTwo title={TEXT.table} />
      <Table {...{ data, columns }} />

      <Chart options={splineChartOptions} />
    </div>
  );
};

export default Sample;
