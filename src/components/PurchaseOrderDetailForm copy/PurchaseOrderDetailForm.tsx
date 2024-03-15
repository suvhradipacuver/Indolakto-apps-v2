import { useFieldArray, UseFormSetValue } from "react-hook-form";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import {
  OptionObj,
  PurchaseOrderItemObj,
  PurchaseOrderItemsForm,
} from "../../types/interfaces";
import Input from "../FormComponents/Input";
import Select from "../FormComponents/Select";
import AllCurrencies from "../../data/currencies.json";
import IconButton from "../Buttons/IconButton";
import PurchaseTotalAmount from "../FormComponents/Purchases/PurchaseTotalAmount";
import { FormattedMessage, useIntl } from "react-intl";

const currencies: OptionObj[] = Object.values(AllCurrencies).map((c) => ({
  label: c.code,
  value: c.code,
}));

interface Props {
  initialRows: number;
  control: any;
  errors: any;
  setValue: UseFormSetValue<PurchaseOrderItemsForm>;
  register: any;
  watch: any;
  getValues: Function;
}

const PurchaseOrderDetailForm = ({
  initialRows,
  control,
  errors,
  register,
  setValue,
  getValues,
  watch,
}: Props) => {
  const intl = useIntl();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div className="order-detail-form text-sm">
      <table className="table table-fixed shadow-none w-full mb-4">
        <thead>
          <tr>
            <th>
              <FormattedMessage id="itemId" defaultMessage={"Item Id"} />
            </th>
            <th>
              <FormattedMessage id="product" defaultMessage={"Product"} />
            </th>
            <th>
              <FormattedMessage id="modelNo" defaultMessage={"Model No."} />
            </th>
            <th>
              <FormattedMessage
                id="description"
                defaultMessage={"Description"}
              />
            </th>
            <th>
              <FormattedMessage id="uom" defaultMessage={"UOM"} />
            </th>
            <th>
              <FormattedMessage id="quantity" defaultMessage={"Quantity"} />
            </th>
            <th>
              <FormattedMessage id="currency" defaultMessage={"Currency"} />
            </th>
            <th>
              <FormattedMessage
                id="quantityUnitPrice"
                defaultMessage={"Quantity Unit Price"}
              />
            </th>
            <th>
              <FormattedMessage
                id="purchaseUnitPrice"
                defaultMessage={"Purchase Unit Price"}
              />
            </th>
            <th>
              <FormattedMessage
                id="totalAmount"
                defaultMessage={"Total Amount"}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {fields.map((item, i) => {
            return (
              <tr className="w-full" key={item.id}>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    getValues={getValues}
                    id={`items.${i}.itemId`}
                    name={`items.${i}.itemId`}
                    required
                    error={
                      errors?.items ? errors?.items[i]?.itemId?.message! : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.product`}
                    name={`items.${i}.product`}
                    required
                    getValues={getValues}
                    error={
                      errors?.items ? errors?.items[i]?.product?.message! : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.modelNo`}
                    name={`items.${i}.modelNo`}
                    error={
                      errors?.items ? errors?.items[i]?.modelNo?.message! : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    getValues={getValues}
                    id={`items.${i}.description`}
                    name={`items.${i}.description`}
                    required
                    error={
                      errors?.items
                        ? errors?.items[i]?.description?.message!
                        : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.uom`}
                    name={`items.${i}.uom`}
                    required
                    error={errors?.items ? errors?.items[i]?.uom?.message! : ""}
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.quantity`}
                    name={`items.${i}.quantity`}
                    type="number"
                    min={1}
                    error={
                      errors?.items ? errors?.items[i]?.quantity?.message! : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Select
                    showError={false}
                    options={currencies}
                    register={register}
                    id={`items.${i}.currency`}
                    name={`items.${i}.currency`}
                    error={
                      errors?.items ? errors?.items[i]?.currency?.message! : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.quantityUnitPrice`}
                    name={`items.${i}.quantityUnitPrice`}
                    min={0}
                    type="number"
                    error={
                      errors?.items
                        ? errors?.items[i]?.quantityUnitPrice?.message!
                        : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.purchaseUnitPrice`}
                    name={`items.${i}.purchaseUnitPrice`}
                    min={0}
                    type="number"
                    error={
                      errors?.items
                        ? errors?.items[i]?.purchaseUnitPrice?.message!
                        : ""
                    }
                    disabled={i < initialRows}
                  />
                </td>

                <td className="flex-1">
                  <PurchaseTotalAmount
                    disabled
                    control={control}
                    index={i}
                    min={0}
                    showError={false}
                    setValue={setValue}
                    register={register}
                    id={`items.${i}.totalAmount`}
                    name={`items.${i}.totalAmount`}
                    type="number"
                    error={
                      errors?.items
                        ? errors?.items[i]?.totalAmount?.message!
                        : ""
                    }
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="quote-total flex items-center justify-end mb-6">
        <span className="font-bold">
          <FormattedMessage id="total" defaultMessage={"Total"} />:{" "}
          {watch("items")
            .reduce(
              (p: number, i: PurchaseOrderItemObj) =>
                p + parseFloat(i.totalAmount),
              0
            )
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default PurchaseOrderDetailForm;
