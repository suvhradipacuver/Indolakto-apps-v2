import React from "react";
import { ToWords } from "to-words";
import {
  PurchaseOrderItemObj,
  PurchaseOrderObj,
  SalesOrderItemObj,
} from "../../types/interfaces";
import purchaseOrders from "../../data/purchaseOrders.json";

interface Props {
  purchaseOrder: PurchaseOrderObj | null;
}

const PrintPackingList = React.forwardRef<HTMLDivElement, Props>(
  ({ purchaseOrder }, ref) => {
    const toWords = new ToWords({
      localeCode: "en-US",
      converterOptions: {
        currency: true,
        ignoreDecimal: false,
      },
    });

    const otherItems: PurchaseOrderItemObj[] = [];

    purchaseOrders.slice(0, 3).forEach((o) => otherItems.push(...o.items));

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
                Packing List
              </span>
            </div>
            <div className="right">
              <div className="date flex flex-col mb-3">
                <span>UPDATE DATE: {purchaseOrder?.orderDate}</span>
                <span>UPDATE TIME: 10:34:50</span>
              </div>
              <span className="font-semibold">
                Packing List No.:{" "}
                {purchaseOrder?.orderId === "PO1000110"
                  ? "100002901"
                  : purchaseOrder?.salesId}
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
                    {purchaseOrder?.finalBuyer.name}(
                    {purchaseOrder?.finalBuyer.organisationNumber}) <br />
                    {purchaseOrder?.finalBuyer.address}
                  </span>
                </div>
                <div className="for-account-to flex items-start">
                  <div className="flex-1">For Account to</div>

                  <span className="flex-1">
                    {purchaseOrder?.accountee.name}(
                    {purchaseOrder?.accountee.organisationNumber}) <br />
                    {purchaseOrder?.accountee.address}
                  </span>
                </div>
                <div className="consigned-to flex items-start">
                  <div className="flex-1">Consigned to</div>

                  <span className="flex-1">
                    {purchaseOrder?.consignee.name}(
                    {purchaseOrder?.consignee.organisationNumber}) <br />
                    {purchaseOrder?.consignee.address}
                  </span>
                </div>
              </div>
              <div className="bottom border-gray-800 border-t pt-2 pr-2 h-8">
                <p>Sailing on or about {purchaseOrder?.orderDate}</p>
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
                  <span className="mr-4">Packing List No.:</span>
                  <span>{purchaseOrder?.salesId}</span>
                </div>
                <div className="date">
                  <span className="mr-4">Date:</span>
                  <span>{purchaseOrder?.orderDate}</span>
                </div>
                <div className="order-no">
                  <span className="mr-4">Order No:</span>
                  <span>{purchaseOrder?.orderId}</span>
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
                <th className="p-2">Case No.</th>
                <th className="p-2">No. of Pkgs</th>
                <th className="p-2">Item Id</th>
                <th className="p-2">Product</th>
                <th className="p-2">Model No.</th>
                <th className="p-2">Description</th>
                <th className="p-2">UOM</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Currency</th>
                <th className="p-2">Quantity Unit Price</th>
                <th className="p-2">Total Price</th>
                <th>Net Wt Per P'kg Total</th>
                <th>Grs Wt Per P'kg Total</th>
                <th>Measmt Per P'kg Total</th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrder?.orderId === "PO1000110" ? (
                <>
                  {otherItems?.map((i, index) => (
                    <tr key={i.itemId}>
                      <td className="p-2">
                        PALLET {index + 1} - {index + 1}
                      </td>
                      <td className="p-2">1</td>
                      <td className="p-2">{i.itemId}</td>
                      <td className="p-2">{i.product}</td>
                      <td className="p-2">{i.modelNo}</td>
                      <td className="p-2">{i.description}</td>
                      <td className="p-2">{i.uom}</td>
                      <td className="p-2">{i.quantity}</td>
                      <td className="p-2">{i.currency}</td>
                      <td className="p-2">{i.quantityUnitPrice}</td>
                      <td className="p-2">{i.totalAmount}</td>
                      <td className="p-2">227.520</td>
                      <td className="p-2">235.520</td>
                      <td className="p-2">1.5000</td>
                    </tr>
                  ))}
                </>
              ) : (
                purchaseOrder?.items.map((i, index) => (
                  <tr key={i.itemId}>
                    <td className="p-2">
                      PALLET {index + 1} - {index + 1}
                    </td>
                    <td className="p-2">1</td>
                    <td className="p-2">{i.itemId}</td>
                    <td className="p-2">{i.product}</td>
                    <td className="p-2">{i.modelNo}</td>
                    <td className="p-2">{i.description}</td>
                    <td className="p-2">{i.uom}</td>
                    <td className="p-2">{i.quantity}</td>
                    <td className="p-2">{i.currency}</td>
                    <td className="p-2">{i.quantityUnitPrice}</td>
                    <td className="p-2">{i.totalAmount}</td>
                    <td className="p-2">227.520</td>
                    <td className="p-2">235.520</td>
                    <td className="p-2">1.5000</td>
                  </tr>
                ))
              )}
              <tr>
                <td className="p-2">Total</td>
                <td className="p-2">
                  {purchaseOrder?.orderId === "PO1000110"
                    ? 13
                    : purchaseOrder?.items.length}
                </td>
                <td className="p-2">PALLET</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  {purchaseOrder?.orderId === "PO1000110"
                    ? otherItems
                        .reduce(
                          (p: number, it: PurchaseOrderItemObj) =>
                            p + parseFloat(it.quantity),
                          0
                        )
                        .toFixed(2)
                    : purchaseOrder?.items
                        .reduce(
                          (p: number, it: PurchaseOrderItemObj) =>
                            p + parseFloat(it.quantity),
                          0
                        )
                        .toFixed(2)}
                </td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  <div className="flex items-center justify-between">
                    {" "}
                    {purchaseOrder?.orderId === "PO1000110"
                      ? otherItems
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)
                      : purchaseOrder?.items
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)}
                  </div>
                </td>
                <td className="p-2">426.600</td>
                <td className="p-2">442.600</td>
                <td className="p-2">3.0000</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Grand Total</td>
                <td className="p-2">
                  {purchaseOrder?.orderId === "PO1000110"
                    ? 13
                    : purchaseOrder?.items.length}
                </td>{" "}
                <td className="p-2">PALLET</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  {purchaseOrder?.orderId === "PO1000110"
                    ? otherItems
                        .reduce(
                          (p: number, it: PurchaseOrderItemObj) =>
                            p + parseFloat(it.quantity),
                          0
                        )
                        .toFixed(2)
                    : purchaseOrder?.items
                        .reduce(
                          (p: number, it: PurchaseOrderItemObj) =>
                            p + parseFloat(it.quantity),
                          0
                        )
                        .toFixed(2)}
                </td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  <div className="flex items-center justify-between">
                    {" "}
                    {purchaseOrder?.orderId === "PO1000110"
                      ? otherItems
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)
                      : purchaseOrder?.items
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)}
                  </div>
                </td>
                <td className="p-2">426.600</td>
                <td className="p-2">442.600</td>
                <td className="p-2">3.0000</td>
              </tr>
              <tr className="border-none">
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none">
                  <div className="flex items-center justify-between">
                    {" "}
                    {purchaseOrder?.items[0]?.currency}{" "}
                    {purchaseOrder?.orderId === "PO1000110"
                      ? otherItems
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)
                      : purchaseOrder?.items
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)}
                  </div>
                </td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
                <td className="p-2 border-none"></td>
              </tr>
            </tbody>
          </table>
          <div>
            {purchaseOrder?.items[0]?.currency}{" "}
            {purchaseOrder?.orderId === "PO1000110"
              ? toWords.convert(
                  parseFloat(
                    otherItems
                      .reduce(
                        (p: number, it: PurchaseOrderItemObj) =>
                          p + parseFloat(it.totalAmount),
                        0
                      )
                      .toFixed(2)
                  )
                )
              : toWords.convert(
                  purchaseOrder
                    ? parseFloat(
                        purchaseOrder?.items
                          .reduce(
                            (p: number, it: PurchaseOrderItemObj) =>
                              p + parseFloat(it.totalAmount),
                            0
                          )
                          .toFixed(2)
                      )
                    : 0
                )}
          </div>
          <div className="last-comment mt-6">
            <span className="font-semibold">Last Comment</span>
          </div>
        </div>
      </div>
    );
  }
);

export default PrintPackingList;
