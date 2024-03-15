import { useEffect } from "react";
import ErrorBox from "../../ErrorBox/ErrorBox";
import Tooltip from "../../Tooltip/Tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { UseFormSetValue, useWatch } from "react-hook-form";
import { QuoteOrderObj } from "../../../types/interfaces";
import { ITEMS } from "../../../data/items";

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

const ListUnitPriceInput = ({
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
  classes,
  helpText,
  min,
  max,
  disabled = false,
  showError = true,
}: Props) => {
  const row = useWatch({
    control,
    name: `items.${index}`,
  });

  useEffect(() => {
    const itemId = row.itemId;

    const item = ITEMS.find((i) => i.key === itemId);

    setValue(`items.${index}.listUnitPrice`, item?.listUnitPrice!);
  }, [row.itemId, index]);

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

export default ListUnitPriceInput;
