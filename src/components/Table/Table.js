import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FormattedMessage } from "react-intl";
import { DEFAULT_PAGE_SIZES } from "../../types/constants";
import GlobalFilter from "../GlobalFilter/GlobalFilter";

const Table = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  pageOptions,
  state,
  gotoPage,
  pageCount,
  selectedFlatRows,
  prepareRow,

  setGlobalFilter,

  setPageIndex,
  setPageSize,
  cSetPageSize,
  cSetSortBy,
  setDesc,
  setSelectedRows,
}) => {
  // server side pagination
  const { pageIndex, pageSize, globalFilter } = state;

  useEffect(() => {
    if (setSelectedRows && typeof setSelectedRows === "function") {
      setSelectedRows(selectedFlatRows);
    }
  }, [selectedFlatRows]);

  return (
    <div className="max-w-full mt-2 bg-white shadow rounded text-sm">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <div className="container-table max-w-full w-full overflow-y-auto">
        <table
          {...getTableProps()}
          className="w-full text-left border-collapse table-auto"
        >
          <thead className="w-full font-semibold border-b bg-primary text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  if (column.isSorted) {
                    cSetSortBy(column.id);
                    setDesc(column.isSortedDesc);
                  }
                  return (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="p-3 m-4 text-left noselect text-xs uppercase noselect"
                    >
                      <div>
                        <span className="mb-12">{column.render("Header")}</span>
                        {column.canSort && (
                          <span>
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <span className="ml-1">▼</span>
                              ) : (
                                <span className="ml-1">▲</span>
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()} className="text-baseBlack">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-b even:bg-blue-100"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-4 py-2">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* extras */}
        <div className="flex items-center justify-end w-full p-4 text-sm text-gray-600 extras">
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPageIndex(0);
              cSetPageSize(Number(e.target.value));
            }}
            className="p-1 mr-6 rounded outline-none cursor-pointer"
          >
            {DEFAULT_PAGE_SIZES.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                <FormattedMessage id="show" defaultMessage={"Show"} />{" "}
                {pageSize}
              </option>
            ))}
          </select>

          <span className="mr-6">
            {pageIndex + 1} of{" "}
            {pageOptions.length === 0
              ? pageOptions.length + 1
              : pageOptions.length}
          </span>

          <span className="mr-6">
            <span className="mr-1">
              <FormattedMessage id="goToPage" defaultMessage={"Go to Page"} />:
            </span>
            <input
              className="border rounded px-1 py-0.5 w-12 outline-none"
              min={1}
              max={pageCount}
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;

                if (pageNumber < pageCount && pageNumber >= 0) {
                  setPageIndex(pageNumber);
                }
                gotoPage(pageNumber);
              }}
            />
          </span>
          <button
            onClick={() => {
              setPageIndex(pageIndex - 1);
              previousPage();
            }}
            disabled={!canPreviousPage}
            className="disabled:opacity-50"
          >
            <FiChevronLeft size={19} />
          </button>
          <button
            onClick={() => {
              setPageIndex(pageIndex + 1);
              nextPage();
            }}
            disabled={!canNextPage}
            className="disabled:opacity-50"
          >
            <FiChevronRight size={19} />
          </button>
        </div>

        {/* {selectedFlatRows && (
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map((row) => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>
      )} */}
      </div>
    </div>
  );
};

export default Table;
