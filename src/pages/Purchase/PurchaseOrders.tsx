import { useMemo, useRef, useState } from "react";
import TableInstance from "../../components/Table/TableInstance";
import purchaseOrders from "../../data/purchaseOrders.json";
import { Link } from "react-router-dom";
import { Cell } from "react-table";
import IconButton from "../../components/Buttons/IconButton";
import { FiDownload } from "react-icons/fi";
import StatusPill from "../../components/StatusPill/StatusPill";
import { FormattedMessage } from "react-intl";
import PrintPurchaseOrder from "../../components/PrintComponents/PrintPurchaseOrder";
import { useReactToPrint } from "react-to-print";
import PrintPackingList from "../../components/PrintComponents/PrintPackingList";

const PurchaseOrders = () => {
  const [cPageSize, cSetPageSize] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [cSortBy, cSetSortBy] = useState<string | null>(null);
  const [desc, setDesc] = useState(true);
  const [q, setQ] = useState(null);

  const PURCHASE_ORDERS_COLUMNS = useMemo(
    () => [
      {
        Header: (
          <FormattedMessage
            id="purchaseOrderId"
            defaultMessage={"Purchase Order #"}
          />
        ),
        accessor: "orderId",
        Cell: ({ value }: Cell) => {
          return (
            <Link className="text-blue-500" to={`/purchases/${value}`}>
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
        Header: <FormattedMessage id="salesOrderId" defaultMessage={"Sales Order #"} />,
        accessor: "salesId",
      },
      {
        Header: (
          <FormattedMessage id="accountee" defaultMessage={"Accountee"} />
        ),
        accessor: "accountee.organisationNumber",
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
        accessor: "primaryContact",
      },
      {
        Header: (
          <FormattedMessage id="consignee" defaultMessage={"Consignee"} />
        ),
        accessor: "consignee.organisationNumber",
        disableGlobalFilter: true,
      },
      {
        Header: <FormattedMessage id="status" defaultMessage={"Status"} />,
        accessor: "status",
        Cell: ({ value }: Cell) => <StatusPill text={value} />,
      },
      {
        Header: <FormattedMessage id="purchaseOrder" defaultMessage={"Purchase Order"} />,
        accessor: "actions",
        Cell: ({ row }: Cell<{ orderId: number }>) => {
          const printRef = useRef(null);

          const handlePrint = useReactToPrint({
            content: () => printRef.current,
          });

          const order = purchaseOrders.filter(
            (order) => order.orderId === row.original.orderId.toString()
          )[0];

          return (
            <div className="actions flex items-center gap-x-3">
              <div className="hidden">
                <PrintPurchaseOrder purchaseOrder={order!} ref={printRef} />
              </div>

              <IconButton
                classes="text-primary"
                iconSize={16}
                Icon={FiDownload}
                tooltipText="Download"
                onClick={() => {
                  handlePrint();
                }}
              />
            </div>
          );
        },
      },
      {
        Header: <FormattedMessage id="packingList" defaultMessage={"Packing List"} />,
        accessor: "packingList",
        Cell: ({ row }: Cell<{ orderId: number }>) => {
          const printRef = useRef(null);

          const handlePrint = useReactToPrint({
            content: () => printRef.current,
          });

          const order = purchaseOrders.filter(
            (order) => order.orderId === row.original.orderId.toString()
          )[0];

          return (
            <div className="actions flex items-center gap-x-3">
              <div className="hidden">
                <PrintPackingList purchaseOrder={order!} ref={printRef} />
              </div>

              <IconButton
                classes="text-primary"
                iconSize={16}
                Icon={FiDownload}
                tooltipText="Download"
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
          <FormattedMessage
            id="purchaseOrders"
            defaultMessage={"Purchase Orders"}
          />
        </h1>
      </div>

      <TableInstance
        tableData={purchaseOrders}
        column={PURCHASE_ORDERS_COLUMNS}
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

export default PurchaseOrders;
