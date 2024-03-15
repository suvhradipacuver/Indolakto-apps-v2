import { format } from "date-fns";
import React from "react";
import { PurchaseOrderItemObj, PurchaseOrderObj } from "../../types/interfaces";

interface Props {
  purchaseOrder: PurchaseOrderObj | null;
}

const PrintPurchaseOrder = React.forwardRef<HTMLDivElement, Props>(
  ({ purchaseOrder }, ref) => {
    return (
      <div ref={ref} className="text-sm min-h-screen">
        <header className="mb-2">
          <h1 className="text-2xl font-semibold">
            PANASONIC LOGISTICS ASIA PACIFIC
          </h1>
          <hr className="py-1 border-gray-700" />
          <div className="address text-xs flex flex-col max-w-md">
            <span>202 BEDOK SOUTH AVENUE 1 #02-01 SINGAPORE 46933</span>
          </div>
        </header>

        <div className="report-date mb-4 mt-4">
          <span className="font-semibold mr-8">Report Date</span>
          <span> {format(new Date(), "dd-MMM-yyyy")}</span>
        </div>

        <div className="purchase-order mb-4">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Purchase Order (New)
          </h2>

          <div className="details flex gap-x-4">
            <div className="left flex-1 flex flex-col gap-y-2">
              <div className="factory flex">
                <span className="flex-1">FACTORY:</span>
                <span className="flex-1">PAPAMY-SA</span>
              </div>
              <div className="po-number flex">
                <span className="flex-1">PO NUMBER:</span>
                <span className="flex-1">A12P952799</span>
              </div>
              <div className="org-group flex">
                <span className="flex-1">ORG.GROUP:</span>
                <span className="flex-1">FT</span>
              </div>
              <div className="orderer flex">
                <span className="flex-1">ORDERER:</span>
                <span className="flex-1">
                  {purchaseOrder?.finalBuyer.name}(
                  {purchaseOrder?.finalBuyer.organisationNumber}) <br />
                  {purchaseOrder?.finalBuyer.address}
                </span>
              </div>
              <div className="accountee flex">
                <span className="flex-1">ACCOUNTEE:</span>
                <span className="flex-1">
                  {purchaseOrder?.accountee.name}(
                  {purchaseOrder?.accountee.organisationNumber}) <br />
                  {purchaseOrder?.accountee.address}
                </span>
              </div>
              <div className="consignee flex">
                <span className="flex-1">CONSIGNEE:</span>
                <span className="flex-1">
                  {purchaseOrder?.consignee.name}(
                  {purchaseOrder?.consignee.organisationNumber}) <br />
                  {purchaseOrder?.consignee.address}
                </span>
              </div>
              <div className="final-buyer flex">
                <span className="flex-1">FINAL BUYER:</span>
                <span className="flex-1"></span>
              </div>
              <div className="original-buyer flex">
                <span className="flex-1">ORIGINAL BUYER:</span>
                <span className="flex-1"></span>
              </div>
              <div className="customer-po flex">
                <span className="flex-1">CUSTOMER PO:</span>
                <span className="flex-1">MAU7901043029/113613A210</span>
              </div>
              <div className="pc-order-po flex">
                <span className="flex-1">PC ORDER NO.:</span>
                <span className="flex-1">SS-TNTB</span>
              </div>
              <div className="order-type flex">
                <span className="flex-1">ORDER TYPE:</span>
                <span className="flex-1">{purchaseOrder?.orderType}</span>
              </div>
            </div>
            <div className="right flex-1 flex flex-col gap-y-2">
              <div className="trade-type flex">
                <span className="flex-1">TRADE TYPE:</span>
                <span className="flex-1">{purchaseOrder?.tradeType}</span>
              </div>
              <div className="product-type flex">
                <span className="flex-1">PRODUCT TYPE:</span>
                <span className="flex-1">FINISHED GOODS</span>
              </div>
              <div className="priority flex">
                <span className="flex-1">PRIORITY:</span>
                <span className="flex-1"></span>
              </div>
              <div className="final-destination flex">
                <span className="flex-1">FINAL DESTINATION:</span>
                <span className="flex-1"></span>
              </div>
              <div className="country flex">
                <span className="flex-1">COUNTRY OF FINAL DEST:</span>
                <span className="flex-1"></span>
              </div>
              <div className="delivery-date flex">
                <span className="flex-1">DELIVERY DATE:</span>
                <span className="flex-1">{purchaseOrder?.deliveryDate}</span>
              </div>
              <div className="transport-mode flex">
                <span className="flex-1">TRANSPORT MODE:</span>
                <span className="flex-1">SEA.F</span>
              </div>
              <div className="whs flex">
                <span className="flex-1">WHS:</span>
                <span className="flex-1"></span>
              </div>
              <div className="whs-date flex">
                <span className="flex-1">WHS Date:</span>
                <span className="flex-1"></span>
              </div>
              <div className="swhs flex">
                <span className="flex-1">SWHS:</span>
                <span className="flex-1"></span>
              </div>
              <div className="swhs-date flex">
                <span className="flex-1">SWHS Date:</span>
                <span className="flex-1"></span>
              </div>
              <div className="pwhs flex">
                <span className="flex-1">PWHS:</span>
                <span className="flex-1"></span>
              </div>
              <div className="pwhs-date flex">
                <span className="flex-1">PWHS Date:</span>
                <span className="flex-1"></span>
              </div>
              <div className="trade-term-place flex">
                <span className="flex-1">TRADE TERM/PLACE:</span>
                <span className="flex-1">FOB/</span>
              </div>
              <div className="payment-term flex">
                <span className="flex-1">PAYMENT TERM:</span>
                <span className="flex-1">
                  REMITTANCE (CMS) 15TH OF NEXT MONTH <br /> AFTER SHIPMENT
                </span>
              </div>
              <div className="currency flex">
                <span className="flex-1">CURRENCY:</span>
                <span className="flex-1">
                  {purchaseOrder?.items[0]?.currency}
                </span>
              </div>
            </div>
          </div>
        </div>

        <table className="table-pdf text-xs">
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
              <th className="p-2">Purchase Unit Price</th>
              <th className="p-2">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {purchaseOrder?.items.map((i, index) => (
              <tr key={i.itemId}>
                <td className="p-1">{i.itemId}</td>
                <td className="p-1">{i.product}</td>
                <td className="p-1">{i.modelNo}</td>
                <td className="p-1">{i.description}</td>
                <td className="p-1">{i.uom}</td>
                <td className="p-1">{i.quantity}</td>
                <td className="p-1">{i.currency}</td>
                <td className="p-1">{i.quantityUnitPrice}</td>
                <td className="p-1">{i.purchaseUnitPrice}</td>
                <td className="p-1">{i.totalAmount}</td>
              </tr>
            ))}
            <tr className="border-none">
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none font-semibold">Total:</td>
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none">
                {purchaseOrder?.items
                  .reduce(
                    (p: number, it: PurchaseOrderItemObj) =>
                      p + parseFloat(it.quantity),
                    0
                  )
                  .toFixed(0)}
              </td>
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none"></td>
              <td className="p-1 border-none">
                {purchaseOrder?.items
                  .reduce(
                    (p: number, it: PurchaseOrderItemObj) =>
                      p + parseFloat(it.totalAmount),
                    0
                  )
                  .toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="revision-remarks py-6 text-xs">
          <span className="font-semibold">REVISION REMARKS:</span>
        </div>

        <div className="row-1 flex items-center justify-between mb-4 text-xs">
          <div className="first-comment">
            <span className="font-semibold">FIRST COMMENT:</span>
          </div>
          <div className="po-number">
            <span className="font-semibold">PO NUMBER:</span>
            <span>A12P952799</span>
          </div>
        </div>

        <div className="case-marks text-xs flex flex-col mb-4">
          <span className="font-semibold">CASE MARKS:</span>
          <span className="ml-4">NO MARK</span>
        </div>
        <div className="last-comment mb-4 text-xs">
          <span className="font-semibold">LAST COMMENT:</span>
        </div>

        <div className="from mb-4 text-xs">
          <span className="font-semibold">FROM:</span>
          <span></span>
        </div>
      </div>
    );
  }
);

export default PrintPurchaseOrder;
