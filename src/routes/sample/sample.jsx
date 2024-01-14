import { DocumentTextIcon } from "@heroicons/react/24/outline";
import PageLayout from "../../layouts/pageLayout";
import Table from "../../components/table/table";
import useTable from "../../hooks/useTable";
import { TEXT_SAMPLE as TEXT } from "../../constants/texts";
import HeadingTwo from "../../components/typography/HeadingTwo";
import SliderOne from "../sliders/sliderOne";
import StockChart from "../../components/charts/stockChart";
import useChart from "../../hooks/useChart";

const Sample = () => {
  const { data, refreshData, columns } = useTable();
  const { data: stockData } = useChart();

  return (
    <PageLayout title={"Sample page"} Icon={DocumentTextIcon}>
      <>
        <HeadingTwo title={TEXT.slider} />
        <SliderOne />
      </>

      <>
        <HeadingTwo title={TEXT.chart} />
        <StockChart data={stockData} />
      </>

      <>
        <HeadingTwo title={TEXT.table} />
        <Table {...{ data, columns }} />
        <hr />
        <div>
          <button onClick={() => refreshData()}>Refresh Data</button>
        </div>
      </>
    </PageLayout>
  );
};

export default Sample;
