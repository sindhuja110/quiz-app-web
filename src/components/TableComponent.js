import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import {  Container,Row, Table } from "react-bootstrap";
import { FaSort } from "react-icons/fa";

import "./FilterComponent.css";

const BasicTable = (props) => {
  const columns = useMemo(() => props.COLUMNS, [props.COLUMNS]);
  const data = useMemo(() => props.MOCK_DATA || [], [props.MOCK_DATA]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

  } = useTable(
    {
      columns,
      data,
      autoResetWidth: false,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  return (
    <div>
      <Container fluid className="ml-xxl-n4 ml-xl-n4 ml-lg-n4">
        <Row className="d-flex  flex-lg-row flex-column flex-xxl-row flex-xl-row flex-sm-column flex-md-row">
         
          <Table className="justify-content-center align-items-center"
            striped
            bordered
            hover
            {...getTableProps()}
            responsive={true}
            style={{ width: "100%" }}
          >
          <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      key={column.id}
                      className="text-center text-dark"
                      style={{
                        width: `${column.width}px`,
                        whiteSpace: "nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={(e) => {
                        // Check if the click was not on the sort icon and if the column is not "ACTIONS"
                        if (!e.target.classList.contains('fa-sort') && column.render("Header") !== "ACTIONS") {
                          // Change sorting on a single tap
                          column.toggleSortBy(!column.isSortedDesc);
                        }
                      }}
                    >
                      {column.render("Header") === "ACTIONS" ? (
                        <>{column.render("Header")}</>
                      ) : (
                        <div>
                          {column.render("Header")}
                          <FaSort className="mx-2" />
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.length > 0 ? (
                page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={row.id}>
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          key={cell.column.id}
                          className="text-secondary text-center "
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            maxWidth: "20ch",
                          }}
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center text-dark"
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
         
        </Row>
      </Container>
    </div>
  );
};
export default BasicTable;
