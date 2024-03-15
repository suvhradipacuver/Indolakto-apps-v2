import { useMemo, useRef, useState } from "react";
import TableInstance from "../../components/Table/TableInstance";
import salesOrders from "../../data/salesOrders.json";
import { Link } from "react-router-dom";
import { Cell } from "react-table";
import IconButton from "../../components/Buttons/IconButton";
import { FiDownload } from "react-icons/fi";
import StatusPill from "../../components/StatusPill/StatusPill";
import { FormattedMessage, useIntl } from "react-intl";
import { useReactToPrint } from "react-to-print";
import PrintSalesOrder from "../../components/PrintComponents/PrintSalesOrder";
import PrintCostSheet from "../../components/PrintComponents/PrintCostSheet";
import PrintSalesInvoice from "../../components/PrintComponents/PrintSalesInvoice";

const SalesOrders = () => {
  const [cPageSize, cSetPageSize] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [cSortBy, cSetSortBy] = useState<string | null>(null);
  const [desc, setDesc] = useState(true);
  const [q, setQ] = useState(null);

  const intl = useIntl();

  const SALES_ORDERS_COLUMN = useMemo(
    () => [
      {
        Header: (
          <FormattedMessage
            id="salesOrderId"
            defaultMessage={"Sales Order #"}
          />
        ),
        accessor: "orderId",
        Cell: ({ value }: Cell) => {
          return (
            <Link className="text-blue-500" to={`/sales/${value}`}>
              {value}
            </Link>
          );
        },
      },

      {
        Header: <FormattedMessage id="orgId" defaultMessage={"Org Id"} />,
        accessor: "orgId",
      },
      {
        Header: <FormattedMessage id="quoteId" defaultMessage={"Quote #"} />,
        accessor: "quoteId",
      },
      {
        Header: (
          <FormattedMessage
            id="purchaseOrdreId"
            defaultMessage={"Purchase Order #"}
          />
        ),
        accessor: "purchaseId",
      },
      {
        Header: (
          <FormattedMessage
            id="orderPlacedBy"
            defaultMessage={"Order Place By"}
          />
        ),
        accessor: "orderPlacedBy.organisationNumber",
      },
      {
        Header: (
          <FormattedMessage id="orderDate" defaultMessage={"Order Date"} />
        ),
        accessor: "orderDate",
      },
      {
        Header: <FormattedMessage id="email" defaultMessage={"Email"} />,
        accessor: "email",
      },
      {
        Header: (
          <FormattedMessage id="mobileNo" defaultMessage={"Mobile No."} />
        ),
        accessor: "mobileNo",
      },
      {
        Header: (
          <FormattedMessage id="consignedTo" defaultMessage={"Consigned To"} />
        ),
        accessor: "consignedTo.organisationNumber",
        disableGlobalFilter: true,
      },
      {
        Header: <FormattedMessage id="status" defaultMessage={"Status"} />,
        accessor: "status",
        Cell: ({ value }: Cell) => <StatusPill text={value} />,
      },
      {
        Header: (
          <FormattedMessage id="salesNote" defaultMessage={"Sales Note"} />
        ),
        accessor: "actions",
        Cell: ({ row }: Cell<{ orderId: number }>) => {
          const printRef = useRef(null);

          const handlePrint = useReactToPrint({
            content: () => printRef.current,
          });

          const order = salesOrders.filter(
            (order) => order.orderId === row.original.orderId.toString()
          )[0];

          return (
            <div className="actions flex items-center gap-x-3">
              <div className="hidden">
                <PrintSalesOrder salesOrder={order} ref={printRef} />
              </div>
              <IconButton
                classes="text-primary"
                iconSize={16}
                Icon={FiDownload}
                tooltipText={intl.formatMessage({
                  id: "download",
                  defaultMessage: "Download",
                })}
                onClick={() => {
                  handlePrint();
                }}
              />
            </div>
          );
        },
      },
      {
        Header: (
          <FormattedMessage
            id="salesInvoice"
            defaultMessage={"Sales Invoice"}
          />
        ),
        accessor: "salesInvoice",
        Cell: ({ row }: Cell<{ orderId: number }>) => {
          const printRef = useRef(null);

          const handlePrint = useReactToPrint({
            content: () => printRef.current,
          });

          const order = salesOrders.filter(
            (order) => order.orderId === row.original.orderId.toString()
          )[0];

          return (
            <div className="actions flex items-center gap-x-3">
              <div className="hidden">
                <PrintSalesInvoice salesOrder={order} ref={printRef} />
              </div>
              <IconButton
                classes="text-primary"
                iconSize={16}
                Icon={FiDownload}
                tooltipText={intl.formatMessage({
                  id: "download",
                  defaultMessage: "Download",
                })}
                onClick={() => {
                  handlePrint();
                }}
              />
            </div>
          );
        },
      },
      {
        Header: (
          <FormattedMessage id="costSheet" defaultMessage={"Cost Sheet"} />
        ),
        accessor: "costsheet",
        Cell: ({ row }: Cell<{ orderId: number }>) => {
          const printRef = useRef(null);

          const handlePrint = useReactToPrint({
            content: () => printRef.current,
          });

          const order = salesOrders.filter(
            (order) => order.orderId === row.original.orderId.toString()
          )[0];

          return (
            <div className="actions flex items-center gap-x-3">
              <div className="hidden">
                <PrintCostSheet salesOrder={order} ref={printRef} />
              </div>
              <IconButton
                classes="text-primary"
                iconSize={16}
                Icon={FiDownload}
                tooltipText={intl.formatMessage({
                  id: "download",
                  defaultMessage: "Download",
                })}
                onClick={() => {
                  handlePrint();
                }}
              />
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="sales-orders page">
      <div className="title mb-4">
        <h1 className="text-2xl font-bold">
          <FormattedMessage id="salesOrders" defaultMessage={"Sales Orders"} />
        </h1>
      </div>

      <TableInstance
        tableData={salesOrders}
        column={SALES_ORDERS_COLUMN}
        cPageSize={cPageSize}
        cSetPageSize={cSetPageSize}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        pageCount={-1} // do calculation here
        cSortBy={cSortBy}
        cSetSortBy={cSetSortBy}
        desc={desc}
        setDesc={setDesc}
      />
    </div>
  );
};

export default SalesOrders;
