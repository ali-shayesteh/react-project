import { DocumentTextIcon } from "@heroicons/react/24/outline";
import PageLayout from "../../layouts/pageLayout";
import Table from "../../components/table/table";
import useTable from "../../hooks/useTable";

const Tables = () => {
  const { data, refreshData, columns } = useTable();

  return (
    <PageLayout title={"Tables"} Icon={DocumentTextIcon}>
      <Table
        {...{
          data,
          columns,
        }}
      />
      <hr />

      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </PageLayout>
  );
};

export default Tables;
