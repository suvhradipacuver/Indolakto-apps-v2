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
  helpText?: string;
  minLength?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  outerClasses?: string;
  showError?: boolean;
}

const CustomerUnitPriceInput = ({
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
  min,
  max,
  setValue,
  required,
  index,
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
    const listUnitPrice = row.listUnitPrice;
    const additionalDiscount = row.additionalDiscount;
    const promotionalDiscount = row.promotionalDiscount;
    const regularUnitPrice = row.regularUnitPrice;

    let customerUnitPrice = listUnitPrice;

    if (regularUnitPrice) {
      customerUnitPrice = regularUnitPrice;
    }

    if (additionalDiscount && additionalDiscount !== 0) {
      customerUnitPrice = (customerUnitPrice * additionalDiscount) / 100;
    }

    if (promotionalDiscount && promotionalDiscount !== 0) {
      customerUnitPrice = (customerUnitPrice * promotionalDiscount) / 100;
    }

    setValue(`items.${index}.customerUnitPrice`, customerUnitPrice);
  }, [
    row.listUnitPrice,
    row.additionalDiscount,
    row.promotionalDiscount,
    row.regularUnitPrice,
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
        min={type === "number" ? min : null}
        max={type === "number" ? max : null}
        step="any"
        minLength={type === "number" ? minLength : null}
        className={`bg-white px-1 py-1 outline-none ${
          error ? "border border-red-400" : ""
        } disabled:bg-gray-200 disabled:cursor-not-allowed ${classes} text-sm`}
      />

      {error && showError && <ErrorBox text={error} />}
    </div>
  );
};

export default CustomerUnitPriceInput;
