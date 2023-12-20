// import {
//   ChevronDownIcon,
//   ChevronUpIcon,
//   QuestionMarkCircleIcon,
// } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  // Column,
  // Table as ReactTable,
  // PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  // ColumnDef,
  // OnChangeFn,
  flexRender,
} from "@tanstack/react-table";

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={columnFilterValue?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={columnFilterValue?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={columnFilterValue ?? ""}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  );
}

// import { Tooltip } from "react-tooltip";

// import TableNavAndDisplay from "./section/TableNavAndDisplay";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  setFilter,
  columns,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter || searchParams.get("s"));
  const [filterCol, setFilterCol] = useState(
    searchParams.get("filter") || "all"
  );

  useEffect(() => {
    if (
      searchParams.get("s") &&
      searchParams.get("filter") &&
      searchParams.get("filter") !== "All"
    ) {
      setFilter(searchParams.get("filter"), searchParams.get("s"));
      // setGlobalFilter(searchParams.get("s"));
    } else if (searchParams.get("s")) {
      setGlobalFilter(searchParams.get("s"));
    }
  }, []);

  const onChange = useAsyncDebounce((value) => {
    if (searchParams.get("filter") && searchParams.get("filter") !== "All") {
      setFilter(searchParams.get("filter"), value || undefined);
      setSearchParams(
        value
          ? "s=" + value + "&filter=" + searchParams.get("filter")
          : "filter=" + searchParams.get("filter")
      );
    } else {
      setGlobalFilter(value || undefined);
      setSearchParams(value ? "s=" + value : "");
    }
  }, 100);

  const setFilterParam = useAsyncDebounce((val) => {
    let param = "";

    if (val && val !== "all") {
      setGlobalFilter(undefined);

      if (searchParams.get("s")) {
        param = "filter=" + val + "&s=" + searchParams.get("s");

        setFilter(val, searchParams.get("s"));
      } else {
        param = "filter=" + val;
        setFilter(val, "");
      }
    } else {
      if (searchParams.get("s")) {
        param = "s=" + searchParams.get("s");
        setGlobalFilter(searchParams.get("s"));
      } else {
        param = "";
        setGlobalFilter(undefined);
      }
    }

    setSearchParams(param);
  }, 200);

  return (
    <div className="mb-3">
      <label
        htmlFor="search"
        className="block text-base font-medium text-gray-700 pb-1"
      >
        Search{" "}
        {searchParams.get("filter") && searchParams.get("filter") !== "All" && (
          <span className="font-bold"> {searchParams.get("filter")} </span>
        )}
      </label>

      <div className="flex items-center gap-3">
        <input
          id="search"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
          className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md"
        />
        <select
          onChange={(e) => {
            setFilterCol(e.target.value);
            setFilterParam(e.target.value);
          }}
          value={filterCol}
          className="sm:text-sm border-gray-300 border rounded-md py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value={"all"}>All</option>
          {columns.map(
            (col) =>
              col.accessor && (
                <option key={col.accessor} value={col.accessor}>
                  {col.Header}
                </option>
              )
          )}
        </select>
      </div>
    </div>
  );
}

export default function TableMain({
  columns,
  data,
  search = true,
  initialState = {},
  tooltip = {},
}) {
  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   page,
  //   prepareRow,
  //   state,
  //   preGlobalFilteredRows,
  //   setGlobalFilter,
  //   // pageOptions,
  //   // pageCount,
  //   // gotoPage,
  //   // nextPage,
  //   // canPreviousPage,
  //   // canNextPage,
  //   // previousPage,
  //   // setPageSize,
  //   // state: { pageIndex, pageSize },
  //   setFilter,

  // } = useReactTable(
  //   {
  //     columns,
  //     data,
  //     initialState: { ...initialState, pageIndex: 0, pageSize: 10 },
  //   },
  //   useFilters, // useFilters!
  //   useGlobalFilter, // useGlobalFilter!
  //   useSortBy,
  //   usePagination
  // );

  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  return (
    <>
      {/* {search && (
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
          setFilter={setFilter}
          columns={columns}

        />
      )} */}

      {data.length !== 0 ? (
        <div className="flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg overflow-hidden">
                <table>
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                          return (
                            <th key={header.id} colSpan={header.colSpan}>
                              {header.isPlaceholder ? null : (
                                <div>
                                  {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                                  {header.column.getCanFilter() ? (
                                    <div>
                                      <Filter
                                        column={header.column}
                                        table={table}
                                      />
                                    </div>
                                  ) : null}
                                </div>
                              )}
                            </th>
                          );
                        })}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => {
                      return (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => {
                            return (
                              <td key={cell.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Data Not Found!</div>
      )}

      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>

      {/* {rows.length > 10 && (
        <TableNavAndDisplay
          currentPage={pageIndex + 1}
          lastPage={pageOptions?.length}
          nextPage={() => nextPage()}
          prevPage={() => previousPage()}
          setPageSize={(n) => setPageSize(n)}
          goFirst={() => gotoPage(0)}
          goLast={() => gotoPage(pageCount - 1)}
          pageSize={pageSize}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
        />
      )} */}
    </>
  );
}
