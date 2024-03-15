import React from "react";
import { ToWords } from "to-words";
import { QuoteOrderItemObj, QuoteOrderObj } from "../../types/interfaces";

interface Props {
  quoteOrder: QuoteOrderObj | null;
}

const PrintQuote = React.forwardRef<HTMLDivElement, Props>(
  ({ quoteOrder }, ref) => {
    const toWords = new ToWords({
      localeCode: "en-US",
      converterOptions: {
        currency: true,
        ignoreDecimal: false,
      },
    });

    return (
      <div ref={ref} className="min-h-screen text-sm">
        <header className="header text-center pb-2 border-b border-gray-800">
          <div className="bottom flex items-center justify-between">
            <div className="left">
              <span className="text-sm w-48 text-left block">
                <div className="font-semibold mb-1">Order Placed By</div>
                {quoteOrder?.orderPlacedBy}
              </span>
            </div>
            <div className="right">
              <div className="date flex flex-col mb-3">
                <span>UPDATE DATE: {quoteOrder?.quoteDate}</span>
                <span>UPDATE TIME: 10:34:50</span>
              </div>
              <span className="font-semibold">
                {/* Quote No: {quoteOrder?.quoteNo} */}
              </span>
            </div>
          </div>
        </header>

        <div className="content">
          <div className="flex justify-between mb-4 mt-4">
            <div className="bill-to w-44">
              <div className="font-semibold mb-2">Bill To</div>
              {quoteOrder?.billTo}
            </div>

            <div className="others flex flex-col gap-y-2">
              <div>
                <span className="font-semibold mr-4">Primary Contact:</span>
                {quoteOrder?.email}
              </div>
              <div>
                <span className="font-semibold mr-4">Expires On:</span>
                {quoteOrder?.expiresOn}
              </div>
              <div>
                <span className="font-semibold mr-4">Payment Terms:</span>
                {quoteOrder?.paymentTerms}
              </div>
            </div>
          </div>

          <table className="table-pdf">
            <thead>
              <tr>
                <th className="p-2">Item Id</th>
                <th className="p-2">Description</th>
                <th className="p-2">Model No.</th>
                <th className="p-2">UOM</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Currency</th>
                <th className="p-2">List Unit Price</th>
                <th className="p-2">Regular Unit Price</th>
                <th className="p-2">Customer Unit Price</th>
                {/* <th className="p-2">Additional Dis</th> */}
                {/* <th className="p-2">Promotional Dis</th> */}
                <th className="p-2">Total Price</th>
                {/* <th className="p-2">Total Tax</th> */}
                {/* <th className="p-2">Shipping Charges</th> */}
                {/* <th className="p-2">Net Total</th> */}
              </tr>
            </thead>
            <tbody>
              {quoteOrder?.items.map((i) => (
                <tr key={i.itemId}>
                  <td className="p-2">{i.itemId}</td>
                  <td className="p-2">{i.description}</td>
                  <td className="p-2">{i.modelNo}</td>
                  <td className="p-2">{i.uom}</td>
                  <td className="p-2">{i.quantity}</td>
                  <td className="p-2">{i.currency}</td>
                  <td className="p-2">{i.listUnitPrice}</td>
                  <td className="p-2">{i.regularUnitPrice}</td>
                  <td className="p-2">{i.customerUnitPrice}</td>
                  {/* <td className="p-2">{i.additionalDiscount}</td> */}
                  {/* <td className="p-2">{i.promotionalDiscount}</td> */}
                  <td className="p-2">{i.totalPrice}</td>
                  {/* <td className="p-2">{i.totalTax}</td> */}
                  {/* <td className="p-2">{i.shippingCharges}</td> */}
                  {/* <td className="p-2">{i.netTotal}</td> */}
                </tr>
              ))}
              <tr>
                <td className="p-2 font-semibold">Grand Total</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  {quoteOrder?.items
                    .reduce(
                      (p: number, it: QuoteOrderItemObj) =>
                        p + parseFloat(it.quantity),
                      0
                    )
                    .toFixed(0)}
                </td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2">
                  <div className="flex items-center justify-between">
                    {" "}
                    <span className="mr-2">
                      {quoteOrder?.items[0]?.currency}
                    </span>
                    {quoteOrder?.items
                      .reduce(
                        (p: number, it: QuoteOrderItemObj) =>
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

          <div className="right w-full flex items-start justify-end">
            <div className="content flex flex-col gap-y-3 mt-4">
              <div>
                <span className="font-semibold mr-4">
                  Total Additional Discount:
                </span>
                {quoteOrder?.items
                  .reduce(
                    (p: number, it: QuoteOrderItemObj) =>
                      p +
                      parseFloat(
                        it.additionalDiscount === ""
                          ? "0"
                          : it.additionalDiscount
                      ),
                    0
                  )
                  .toFixed(2)}
              </div>
              <div>
                <span className="font-semibold mr-4">
                  Total Promotional Discount:
                </span>
                {quoteOrder?.items
                  .reduce(
                    (p: number, it: QuoteOrderItemObj) =>
                      p +
                      parseFloat(
                        it.promotionalDiscount === ""
                          ? "0"
                          : it.promotionalDiscount
                      ),
                    0
                  )
                  .toFixed(2)}
              </div>
              <div>
                <span className="font-semibold mr-4">Total Tax:</span>
                {quoteOrder?.items
                  .reduce(
                    (p: number, it: QuoteOrderItemObj) =>
                      p + parseFloat(it.totalTax === "" ? "0" : it.totalTax),
                    0
                  )
                  .toFixed(2)}
              </div>
              <div>
                <span className="font-semibold mr-4">
                  Total Shipping Charges:
                </span>
                {quoteOrder?.items
                  .reduce(
                    (p: number, it: QuoteOrderItemObj) =>
                      p +
                      parseFloat(
                        it.shippingCharges === "" ? "0" : it.shippingCharges
                      ),
                    0
                  )
                  .toFixed(2)}
              </div>
              <div>
                <span className="font-semibold mr-4">Net Total:</span>
                <span className="mr-2">{quoteOrder?.items[0]?.currency} </span>
                {quoteOrder?.items
                  .reduce(
                    (p: number, it: QuoteOrderItemObj) =>
                      p + parseFloat(it.netTotal),
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PrintQuote;
