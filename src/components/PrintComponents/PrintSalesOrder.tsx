import React from "react";
import { ToWords } from "to-words";
import { SalesOrderItemObj, SalesOrderObj } from "../../types/interfaces";

interface Props {
  salesOrder: SalesOrderObj | null;
}

const PrintSalesOrder = React.forwardRef<HTMLDivElement, Props>(
  ({ salesOrder }, ref) => {
    const toWords = new ToWords({
      localeCode: "en-US",
      converterOptions: {
        currency: true,
        ignoreDecimal: false,
      },
    });

    const total =
      salesOrder?.items.reduce(
        (p: number, it: SalesOrderItemObj) => p + parseFloat(it.totalPrice),
        0
      ) || 0;

    const netTotal = (total + (total * 7) / 100).toFixed(2);

    return (
      <div ref={ref} className="min-h-screen text-sm">
        <header className="header text-center pb-2 border-b border-gray-800">
          <h1 className="mb-6">
            <span className="text-2xl font-semibold block">
              PANASONIC LOGISTICS ASIA PACIFIC
            </span>
            <span className="max-w-md">
              202 BEDOK SOUTH AVENUE 1 #02-01 SINGAPORE 46933
            </span>
          </h1>

          <div className="bottom flex items-center justify-between">
            <div className="left font-semibold">
              <span className="px-8 py-1 border border-gray-800">
                Sales Note
              </span>
            </div>
            <div className="right">
              <div className="date flex flex-col mb-3">
                <span>UPDATE DATE: {salesOrder?.orderDate}</span>
                <span>UPDATE TIME: 10:34:50</span>
              </div>
              <span className="font-semibold">
                Sales Note No: {salesOrder?.salesNoteNo}
              </span>
            </div>
          </div>
        </header>

        <div className="content">
          <div className="order-details flex">
            <div
              className="col-1 border-gray-800 border-r border-b pb-2"
              style={{
                flex: "4 4 0",
              }}
            >
              <div className="content pr-2 pt-2 flex flex-col gap-y-3">
                <div className="order-placed-by flex items-start">
                  <div className="flex-1">Order Placed by</div>

                  <span className="flex-1">
                    {salesOrder?.orderPlacedBy.name}(
                    {salesOrder?.orderPlacedBy.organisationNumber}) <br />
                    {salesOrder?.orderPlacedBy.address}
                  </span>
                </div>
                <div className="for-account-to flex items-start">
                  <div className="flex-1">For Account to</div>

                  <span className="flex-1">
                    {salesOrder?.orderPlacedBy.name}(
                    {salesOrder?.orderPlacedBy.organisationNumber}) <br />
                    {salesOrder?.orderPlacedBy.address}
                  </span>
                </div>
                <div className="consigned-to flex items-start">
                  <div className="flex-1">Consigned to</div>

                  <span className="flex-1">
                    {salesOrder?.consignedTo.name}(
                    {salesOrder?.consignedTo.organisationNumber}) <br />
                    {salesOrder?.consignedTo.address}
                  </span>
                </div>
              </div>
              <div className="bottom border-gray-800 border-t pt-2 pr-2 h-8">
                <p>Sailing on or about {salesOrder?.orderDate}</p>
              </div>
            </div>
            <div
              className="col-2 border-gray-800 border-r border-b flex flex-col"
              style={{
                flex: "2 2 0",
              }}
            >
              <div className="content px-2 pb-2 flex-1">
                <p>Shipping Mark:</p>

                <span className="text-xs block mt-2">NO MARK</span>
              </div>
              <div className="bottom border-gray-800 border-t pt-2 pr-2 h-10"></div>
            </div>
            <div
              className="col-3 px-2 pt-2 pb-2 flex flex-col"
              style={{
                flex: "2 2 0",
              }}
            >
              <div className="content flex-1 flex flex-col gap-y-2">
                <div className="sales-note-no">
                  <span className="mr-4">Sales Note No:</span>
                  <span>{salesOrder?.salesNoteNo}</span>
                </div>
                <div className="date">
                  <span className="mr-4">Date:</span>
                  <span>{salesOrder?.orderDate}</span>
                </div>
                <div className="order-no">
                  <span className="mr-4">Order No:</span>
                  <span>{salesOrder?.orderId}</span>
                </div>
              </div>

              <div className="bottom h-8">
                <p className="text-xs">
                  This is a computer generated invoice. <br /> No signature is
                  required
                </p>
              </div>
            </div>
          </div>

          <div className="payment-details flex items-center py-2">
            <span className="block mr-8">Payment</span>
            <span>REMITTANCE (CMS) 15TH OF NEXT MONTH AFTER SHIPMENT</span>
          </div>

          <table className="table-pdf">
            <thead>
              <tr>
                <th className="p-2">Item Id</th>
                <th className="p-2">Product</th>
                <th className="p-2">Model No.</th>
                <th className="p-2">Description</th>
                <th className="p-2">UOM</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Currency</th>
                <th className="p-2">Quantity Unit Price</th>
                <th className="p-2">Total Price</th>
                <th className="p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {salesOrder?.items.map((i) => (
                <tr key={i.itemId}>
                  <td className="p-2">{i.itemId}</td>
                  <td className="p-2">{i.product}</td>
                  <td className="p-2">{i.modelNo}</td>
                  <td className="p-2">{i.description}</td>
                  <td className="p-2">{i.uom}</td>
                  <td className="p-2">{i.quantity}</td>
                  <td className="p-2">{i.currency}</td>
                  <td className="p-2">{i.quantityUnitPrice}</td>
                  <td className="p-2">
                    {salesOrder.orderId === "A12S952828"
                      ? "0.00"
                      : i.totalPrice}
                  </td>
                  <td className="p-2">{i.remarks}</td>
                </tr>
              ))}
              <tr>
                <td className="p-2 font-semibold">Total</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  {salesOrder?.items
                    .reduce(
                      (p: number, it: SalesOrderItemObj) =>
                        p + parseFloat(it.quantity),
                      0
                    )
                    .toFixed(0)}
                </td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="mr-2">
                      {salesOrder?.items[0]?.currency}
                    </span>
                    {salesOrder?.orderId === "A12S952828"
                      ? "0.00"
                      : salesOrder?.items
                          .reduce(
                            (p: number, it: SalesOrderItemObj) =>
                              p + parseFloat(it.totalPrice),
                            0
                          )
                          .toFixed(2)}
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="right w-full flex items-start justify-end mb-4">
            <div className="content flex flex-col gap-y-3 mt-4">
              <div>
                <span className="font-semibold mr-4 w-24 inline-block">
                  Total:
                </span>
                <span className="mr-1">{salesOrder?.items[0]?.currency} </span>
                {salesOrder?.orderId === "A12S952828" ? (
                  <>0.00</>
                ) : (
                  <>
                    {salesOrder?.items
                      .reduce(
                        (p: number, it: SalesOrderItemObj) =>
                          p + parseFloat(it.totalPrice),
                        0
                      )
                      .toFixed(2)}
                  </>
                )}
              </div>
              <div>
                <span className="font-semibold mr-4 w-24 inline-block">
                  Charges:
                </span>
                <span className="mr-1">{salesOrder?.items[0]?.currency} </span>
                {salesOrder?.orderId === "A12S952828" ? "1.00" : "0.00"}
              </div>
              <div>
                <span className="font-semibold mr-4 w-24 inline-block">
                  GST @7%:
                </span>
                <span className="mr-1">{salesOrder?.items[0]?.currency} </span>
                {salesOrder?.orderId === "A12S952828"
                  ? "0.00"
                  : ((total * 7) / 100).toFixed(2)}
              </div>
              <div>
                <span className="font-semibold mr-4 w-24 inline-block">
                  Grand Total:
                </span>
                <span className="mr-1">{salesOrder?.items[0]?.currency} </span>
                {salesOrder?.orderId === "A12S952828" ? (
                  "1.00"
                ) : (
                  <>{netTotal} </>
                )}
              </div>
            </div>
          </div>

          <div className="last-comment mt-4">
            <span className="font-semibold">Last Comment</span>
          </div>
        </div>
      </div>
    );
  }
);

export default PrintSalesOrder;
