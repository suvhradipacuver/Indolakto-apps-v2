import { useEffect } from "react";
import ErrorBox from "../../ErrorBox/ErrorBox";
import Tooltip from "../../Tooltip/Tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { UseFormSetValue, useWatch } from "react-hook-form";
import { QuoteOrderObj } from "../../../types/interfaces";

interface Props {
  label?: string;
  id: string;
  name: string;
  index: number;
  register: any;
  setValue: UseFormSetValue<QuoteOrderObj>;
  control: any;
  type?: "text" | "number" | "email" | "password" | "date";
  placeholder?: string;
  error: string | null;
  classes?: string;
  required?: boolean;
  min?: number;
  max?: number;
  helpText?: string;
  minLength?: number;
  disabled?: boolean;
  outerClasses?: string;
  showError?: boolean;
}

const TotalPrice = ({
  label,
  id,
  name,
  outerClasses,
  minLength,
  control,
  register,
  type = "text",
  placeholder,
  error,
  setValue,
  required,
  index,
  min,
  max,
  classes,
  helpText,
  disabled = false,
  showError = true,
}: Props) => {
  const row = useWatch({
    control,
    name: `items.${index}`,
  });

  useEffect(() => {
    const listUnitPrice = parseFloat(row.listUnitPrice) || 0;
    const regularUnitPrice = parseFloat(row.regularUnitPrice) || 0;
    const customerUnitPrice = parseFloat(row.customerUnitPrice) || 0;
    const additionalDiscount = parseFloat(row.additionalDiscount);
    const promotionalDiscount = parseFloat(row.promotionalDiscount);
    const quantity = parseFloat(row.quantity) || 1;

    let price = 0;

    if (customerUnitPrice) {
      price = customerUnitPrice;
    } else if (regularUnitPrice) {
      price = regularUnitPrice;
    } else {
      price = listUnitPrice;
    }

    if (!customerUnitPrice) {
      if (additionalDiscount) {
        price = (price * additionalDiscount) / 100;
      }

      if (promotionalDiscount) {
        price = (price * promotionalDiscount) / 100;
      }
    }

    price = quantity ? quantity * price : price;

    setValue(`items.${index}.totalPrice`, price.toFixed(2).toString());
  }, [
    row.listUnitPrice,
    row.regularUnitPrice,
    row.customerUnitPrice,
    row.additionalDiscount,
    row.promotionalDiscount,
    row.quantity,
    index,
  ]);

  return (
    <div className={`input flex flex-col ${outerClasses}`}>
      {label && (
        <label className="font-medium mb-1.5 text-sm" htmlFor={id}>
          {required && <span className="text-red-500 mr-1">*</span>}
          <span>{label}</span>{" "}
          {helpText && (
            <>
              <Tooltip content={helpText}>
                <div className="cursor-default inline-block">
                  <AiOutlineQuestionCircle size={10} />
                </div>
              </Tooltip>
            </>
          )}
        </label>
      )}
      <input
        disabled={disabled}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        step="any"
        min={type === "number" ? min : null}
        max={type === "number" ? max : null}
        minLength={type === "number" ? minLength : null}
        className={`bg-white px-1 py-1 outline-none ${
          error ? "border border-red-400" : ""
        } disabled:bg-gray-200 disabled:cursor-not-allowed ${classes} text-sm`}
      />

      {error && showError && <ErrorBox text={error} />}
    </div>
  );
};

export default TotalPrice;
