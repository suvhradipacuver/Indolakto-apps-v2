import React from "react";
import { SalesOrderObj } from "../../types/interfaces";

interface Props {
  salesOrder: SalesOrderObj | null;
}

const PrintCostSheet = React.forwardRef<HTMLDivElement, Props>(
  ({ salesOrder }, ref) => {
    return (
      <div ref={ref} className="text-sm min-h-screen">
        <header className="mb-2">
          <h1 className="text-2xl font-semibold">
            PANASONIC LOGISTICS ASIA PACIFIC
          </h1>
          <hr className="py-1 border-gray-700" />
          <div className="address text-xs flex flex-col max-w-md">
            <span>
              202 BEDOK SOUTH AVENUE 1 #02-01 <br /> SINGAPORE 46933
            </span>
          </div>
        </header>

        <p className="mb-4">
          Report Date: <span className="ml-2">28-Sep-2022</span>
        </p>

        <h3 className="mb-4 font-semibold text-center">PA-PLAP Cost Sheet</h3>

        <div className="shipment flex flex-col gap-y-1">
          <div>
            Shipment Date: <span className="ml-2">28-Sep-2022 12:00:0</span>
          </div>
          <div>
            Invoice No: <span className="ml-2">6DBL00534206</span>
          </div>
          <div>
            User ID: <span className="ml-2">SGMIAWWEI</span>
          </div>
        </div>

        <table className="table-pdf">
          <thead>
            <tr>
              <th>Particulars</th>
              <th></th>
              <th>Currency</th>
              <th>TC Amount</th>
              <th>FC Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              <td></td>
              <td>USD 1.000000</td>
              <td>1585.95</td>
              <td>1585.95</td>
            </tr>
            <tr>
              <td>Purchase</td>
              <td>PMI</td>
              <td>USD 1.000000</td>
              <td>1579.60</td>
              <td>1579.60</td>
            </tr>
            <tr>
              <td>Total Purchase</td>
              <td></td>
              <td></td>
              <td></td>
              <td>1579.60</td>
            </tr>
            <tr>
              <td className="font-semibold">Gross Profit</td>
              <td></td>
              <td></td>
              <td></td>
              <td>0.00</td>
            </tr>
            <tr>
              <td className="font-semibold text-center">Provision Profit</td>
              <td className="font-semibold text-center">
                % Based On Commodity Amt
              </td>
              <td className="font-semibold">TC</td>
              <td></td>
              <td className="font-semibold">FC</td>
            </tr>
            <tr>
              <td>OTHER_COMMISSION</td>
              <td>0.40</td>
              <td>USD</td>
              <td>6.34</td>
              <td>6.34</td>
            </tr>
            <tr>
              <td>LOGISTICS_COMMISSION</td>
              <td>-0.40</td>
              <td>USD</td>
              <td>-70.11</td>
              <td>-70.11</td>
            </tr>
            <tr>
              <td className="font-semibold">VARIANCE(%) & FC Amount</td>
              <td></td>
              <td></td>
              <td>(0.0%)</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
);

export default PrintCostSheet;
