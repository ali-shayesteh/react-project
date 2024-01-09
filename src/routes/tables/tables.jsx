import { DocumentTextIcon } from "@heroicons/react/24/outline";
import PageLayout from "../../layouts/pageLayout";
import Table from "../../components/table/table";

import { makeData } from "../../components/table/makeData";
import { useMemo, useState } from "react";

const Tables = () => {


  const columns = useMemo(
    () => [
      {
        header: "Name",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "firstName",
            cell: (info) => info.getValue(),
            footer: (props) => props.column.id,
          },
          {
            accessorFn: (row) => row.lastName,
            id: "lastName",
            cell: (info) => info.getValue(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
          },
        ],
      },
      {
        header: "Info",
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: "age",
            header: () => "Age",
            footer: (props) => props.column.id,
          },
          {
            header: "More Info",
            columns: [
              {
                accessorKey: "visits",
                header: () => <span>Visits</span>,
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "status",
                header: "Status",
                footer: (props) => props.column.id,
              },
              {
                accessorKey: "progress",
                header: "Profile Progress",
                footer: (props) => props.column.id,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const [data, setData] = useState(() => makeData(100));
  const refreshData = () => setData(() => makeData(100));

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
