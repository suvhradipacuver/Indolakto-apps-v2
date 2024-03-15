import { useMemo, useRef, useState } from "react";
import IconButton from "../../components/Buttons/IconButton";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import TableInstance from "../../components/Table/TableInstance";
import draftOrders from "../../data/draftOrders.json";
import { Link } from "react-router-dom";
import { Cell } from "react-table";
import Button from "../../components/Buttons/Button";
import StatusPill from "../../components/StatusPill/StatusPill";
import { FormattedMessage, useIntl } from "react-intl";
import useToast from "../../hooks/useToast";
import { useReactToPrint } from "react-to-print";
import PrintQuote from "../../components/PrintComponents/PrintQuote";
import useAuth from "../../hooks/useAuth";
import { ALL_ROLES, ALL_STATUSES } from "../../types/constants";
import PrintQuoteCustomer from "../../components/PrintComponents/PrintQuoteCustomer";

const Quotes = () => {
  const [cPageSize, cSetPageSize] = useState(50);
  const [pageIndex, setPageIndex] = useState(0);
  const [cSortBy, cSetSortBy] = useState<string | null>(null);
  const [desc, setDesc] = useState(true);
  const [q, setQ] = useState(null);

  const { user } = useAuth();

  const intl = useIntl();

  const { showSuccess } = useToast();

  const DRAFT_ORDERS_COLUMN = useMemo(
    () => [
      {
        Header: <FormattedMessage id="quoteId" defaultMessage={"Quote #"} />,
        accessor: "quoteId",
      },
      {
        Header: <FormattedMessage id="orgId" defaultMessage={"Org Id"} />,
        accessor: "orgId",
      },
      {
        Header: (
          <FormattedMessage
            id="salesOrderId"
            defaultMessage={"Sales Order #"}
          />
        ),
        accessor: "salesOrderId",
      },
      {
        Header: (
          <FormattedMessage
            id="orderPlacedBy"
            defaultMessage={"Order Placed By"}
          />
        ),
        accessor: "orderPlacedBy",
        Cell: ({ value }: Cell) => {
          return value.slice(value.indexOf("(") + 1, value.lastIndexOf(")"));
        },
      },
      {
        Header: (
          <FormattedMessage id="quoteDate" defaultMessage={"Quote Date"} />
        ),
        accessor: "quoteDate",
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
        accessor: "consignedTo",
        Cell: ({ value }: Cell) => {
          return value.slice(value.indexOf("(") + 1, value.lastIndexOf(")"));
        },
        disableGlobalFilter: true,
      },
      {
        Header: <FormattedMessage id="status" defaultMessage={"Status"} />,
        accessor: "status",
        Cell: ({ value }: Cell) => <StatusPill text={value} />,
      },
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }: Cell<{ quoteId: string; status: string }>) => {
          const printRef = useRef(null);

          const handlePrint = useReactToPrint({
            content: () => printRef.current,
          });

          const order = draftOrders.filter(
            (order) => order.quoteId === row.original.quoteId
          )[0];

          return (
            <div className="actions flex items-center gap-x-3">
              {user?.role === ALL_ROLES.ADMIN ? (
                <Button
                  disabled={
                    row.original.status === ALL_STATUSES.QUOTE_CONFIRMED
                  }
                  variant="primary"
                  text={intl.formatMessage({
                    id: "confirmQuote",
                    defaultMessage: "Confirm Quote",
                  })}
                  onClick={() => {
                    showSuccess(
                      intl.formatMessage({
                        id: "quoteConfirmed",
                        defaultMessage: "Quote Confirmed",
                      })
                    );
                  }}
                  classes="text-xs"
                  outlined
                />
              ) : (
                <Button
                  disabled={
                    row.original.status === ALL_STATUSES.QUOTE_CONFIRMED
                  }
                  variant="primary"
                  text={intl.formatMessage({
                    id: "submit",
                    defaultMessage: "Submit",
                  })}
                  onClick={() => {
                    showSuccess(
                      intl.formatMessage({
                        id: "quoteSubmitted",
                        defaultMessage: "Quote Submitted",
                      })
                    );
                  }}
                  classes="text-xs"
                  outlined
                />
              )}
              <Link
                className="text-blue-500"
                to={`/quotes/${row.original.quoteId}`}
              >
                <FormattedMessage id="edit" defaultMessage={"Edit"} />
              </Link>
              <div className="hidden">
                {user?.role === ALL_ROLES.CUSTOMER ? (
                  <PrintQuoteCustomer quoteOrder={order!} ref={printRef} />
                ) : (
                  <PrintQuote quoteOrder={order!} ref={printRef} />
                )}
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
              <IconButton
                classes="text-red-500"
                iconSize={16}
                Icon={FiTrash2}
                tooltipText={intl.formatMessage({
                  id: "delete",
                  defaultMessage: "Delete",
                })}
                onClick={() => {}}
              />
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="quotes page">
      <div className="title mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <FormattedMessage id="quote" defaultMessage={"Quote"} />
        </h1>
        <Link className="btn primary" to={`/quotes/add-quote`}>
          <FormattedMessage id="newQuote" defaultMessage={"New Quote"} />
        </Link>
      </div>

      <TableInstance
        tableData={draftOrders}
        column={DRAFT_ORDERS_COLUMN}
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

export default Quotes;
