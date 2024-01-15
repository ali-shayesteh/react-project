import { DocumentTextIcon } from "@heroicons/react/24/outline";
import PageLayout from "../../layouts/pageLayout";
import Table from "../../components/table/table";
import useTable from "../../hooks/useTable";

const Tables = () => {
  const { data, columns } = useTable();

  return (
    <PageLayout title={"Tables"} Icon={DocumentTextIcon}>
      <Table
        {...{
          data,
          columns,
        }}
      />
    </PageLayout>
  );
};

export default Tables;
