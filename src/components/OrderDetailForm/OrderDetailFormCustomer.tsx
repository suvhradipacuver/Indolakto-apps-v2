import { useFieldArray, UseFormSetValue } from "react-hook-form";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import {
  OptionObj,
  QuoteOrderItemObj,
  QuoteOrderObj,
} from "../../types/interfaces";
import Input from "../FormComponents/Input";
import NetTotalInput from "../FormComponents/Quotes/NetTotalInput";
import Select from "../FormComponents/Select";
import AllCurrencies from "../../data/currencies.json";
import IconButton from "../Buttons/IconButton";
import TotalPrice from "../FormComponents/Quotes/TotalPrice";
import { FormattedMessage, useIntl } from "react-intl";
import { ITEMS } from "../../data/items";
import DescriptionInput from "../FormComponents/Quotes/DescriptionInput";
import ListUnitPriceInput from "../FormComponents/Quotes/ListUnitPriceInput";
import UOMInput from "../FormComponents/Quotes/UOMInput";

const currencies: OptionObj[] = Object.values(AllCurrencies).map((c) => ({
  label: c.code,
  value: c.code,
}));

interface Props {
  initialRows: number;
  control: any;
  errors: any;
  setValue: UseFormSetValue<QuoteOrderObj>;
  register: any;
  watch: any;
  confirmed?: boolean;
}

const OrderDetailFormCustomer = ({
  initialRows,
  control,
  errors,
  register,
  setValue,
  watch,
  confirmed = false,
}: Props) => {
  const intl = useIntl();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div className="order-detail-form text-sm mt-4">
      <div className="actions w-full flex items-center justify-end mb-4">
        {!confirmed && (
          <IconButton
            onClick={() =>
              append({
                itemId: "",
                modelNo: "",
                description: "",
                uom: "",
                quantity: "",
                currency: "USD",
                listUnitPrice: "",
                totalPrice: "",
                netTotal: "",
              })
            }
            Icon={FiPlus}
            classes="btn primary"
          />
        )}
      </div>

      <table className="table table-fixed shadow-none w-full mb-4">
        <thead>
          <tr>
            <th>
              <FormattedMessage id="itemId" defaultMessage={"Item Id"} />
            </th>
            <th>
              <FormattedMessage
                id="description"
                defaultMessage={"Description"}
              />
            </th>
            <th>
              <FormattedMessage id="modelNo" defaultMessage={"Model No."} />
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
                id="listUnitPrice"
                defaultMessage={"List Unit Price"}
              />
            </th>
            <th>
              <FormattedMessage
                id="totalPrice"
                defaultMessage={"Total Price"}
              />
            </th>
            <th>
              <FormattedMessage id="netTotal" defaultMessage={"Net Total"} />
            </th>
            {!confirmed && <th></th>}
          </tr>
        </thead>
        <tbody>
          {fields.map((item, i) => {
            return (
              <tr className="w-full" key={item.id}>
                <td className="flex-1">
                  <Select
                    register={register}
                    id={`items.${i}.itemId`}
                    name={`items.${i}.itemId`}
                    showError={false}
                    required
                    error={
                      errors?.items ? errors?.items[i]?.itemId?.message! : ""
                    }
                    disabled={i < initialRows || confirmed}
                    options={ITEMS.map((i) => ({
                      label: i.key,
                      value: i.key,
                    }))}
                  />
                </td>
                <td className="flex-1">
                  <DescriptionInput
                    index={i}
                    setValue={setValue}
                    control={control}
                    showError={false}
                    register={register}
                    id={`items.${i}.description`}
                    name={`items.${i}.description`}
                    required
                    disabled={confirmed}
                    error={
                      errors?.items
                        ? errors?.items[i]?.description?.message!
                        : ""
                    }
                  />
                </td>
                <td className="flex-1">
                  <Input
                    showError={false}
                    register={register}
                    id={`items.${i}.modelNo`}
                    name={`items.${i}.modelNo`}
                    disabled={confirmed}
                    error={
                      errors?.items ? errors?.items[i]?.modelNo?.message! : ""
                    }
                  />
                </td>

                <td className="flex-1">
                  <UOMInput
                    control={control}
                    index={i}
                    setValue={setValue}
                    showError={false}
                    register={register}
                    id={`items.${i}.uom`}
                    name={`items.${i}.uom`}
                    required
                    error={errors?.items ? errors?.items[i]?.uom?.message! : ""}
                    disabled={i < initialRows || confirmed}
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
                    disabled={confirmed}
                    error={
                      errors?.items ? errors?.items[i]?.quantity?.message! : ""
                    }
                  />
                </td>

                <td className="flex-1">
                  <Select
                    showError={false}
                    options={currencies}
                    register={register}
                    id={`items.${i}.currency`}
                    name={`items.${i}.currency`}
                    disabled={confirmed}
                    error={
                      errors?.items ? errors?.items[i]?.currency?.message! : ""
                    }
                  />
                </td>
                <td className="flex-1">
                  <ListUnitPriceInput
                    control={control}
                    index={i}
                    setValue={setValue}
                    showError={false}
                    register={register}
                    id={`items.${i}.listUnitPrice`}
                    name={`items.${i}.listUnitPrice`}
                    min={0}
                    type="number"
                    error={
                      errors?.items
                        ? errors?.items[i]?.listUnitPrice?.message!
                        : ""
                    }
                    disabled={i < initialRows || confirmed}
                  />
                </td>
                <td className="flex-1">
                  <TotalPrice
                    control={control}
                    index={i}
                    min={0}
                    disabled={confirmed}
                    showError={false}
                    setValue={setValue}
                    register={register}
                    id={`items.${i}.totalPrice`}
                    name={`items.${i}.totalPrice`}
                    type="number"
                    error={
                      errors?.items
                        ? errors?.items[i]?.totalPrice?.message!
                        : ""
                    }
                  />
                </td>
                <td className="flex-1">
                  <NetTotalInput
                    control={control}
                    index={i}
                    min={0}
                    showError={false}
                    setValue={setValue}
                    register={register}
                    id={`items.${i}.netTotal`}
                    name={`items.${i}.netTotal`}
                    type="number"
                    disabled
                    error={
                      errors?.items ? errors?.items[i]?.netTotal?.message! : ""
                    }
                  />
                </td>
                {!confirmed && (
                  <td>
                    <div className="w-full h-full flex items-center justify-center">
                      <IconButton
                        classes="text-red-500"
                        iconSize={16}
                        Icon={FiTrash2}
                        tooltipText={intl.formatMessage({
                          id: "delete",
                          defaultMessage: "Delete",
                        })}
                        onClick={() => remove(i)}
                      />
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="quote-total flex items-center justify-end mb-6">
        <span className="font-bold">
          <FormattedMessage id="quoteTotal" defaultMessage={"Quote Total"} />:{" "}
          {watch("items")
            .reduce(
              (p: number, i: QuoteOrderItemObj) => p + parseFloat(i.netTotal),
              0
            )
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderDetailFormCustomer;
