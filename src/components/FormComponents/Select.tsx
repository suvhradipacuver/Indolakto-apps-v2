import ErrorBox from "../ErrorBox/ErrorBox";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Tooltip from "../Tooltip/Tooltip";
import { OptionObj } from "../../types/interfaces";

interface Props {
  label?: string;
  id: string;
  name: string;
  options: OptionObj[];
  classes?: string;
  register: any;
  error: string | null;
  outerClasses?: string;
  defaultValue?: OptionObj;
  required?: boolean;
  helpText?: string;
  disabled?: boolean;
  showError?: boolean;
  getValues?: Function;
}

const Select = ({
  label,
  id,
  name,
  options,
  register,
  error,
  required,
  classes,
  outerClasses,
  helpText,
  defaultValue,
  getValues,
  disabled = false,
  showError = true,
}: Props) => {
  return (
    <div className={`input flex flex-col ${outerClasses}`}>
      {label && (
        <label
          htmlFor={id}
          className="font-semibold mb-1.5 text-sm text-gray-700"
        >
          {required && <span className="text-red-500 mr-1">*</span>}
          <span>{label}</span>{" "}
          {helpText && (
            <Tooltip content={helpText}>
              <div className="cursor-default inline-block">
                <AiOutlineQuestionCircle size={10} />
              </div>
            </Tooltip>
          )}
        </label>
      )}

      {getValues ? (
        <Tooltip content={getValues(name)}>
          <div className="flex items-center">
            <select
              defaultValue={defaultValue?.value}
              className={`bg-white w-full px-1 py-1 outline-none ${
                error ? "border border-red-400" : ""
              } disabled:bg-gray-200 disabled:cursor-not-allowed ${classes} text-sm`}
              disabled={disabled}
              {...register(name)}
            >
              {options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </Tooltip>
      ) : (
        <div className="flex items-center">
          <select
            defaultValue={defaultValue?.value}
            className={`bg-white w-full px-1 py-1 outline-none ${
              error ? "border border-red-400" : ""
            } disabled:bg-gray-200 disabled:cursor-not-allowed ${classes} text-sm`}
            disabled={disabled}
            {...register(name)}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {error && showError && <ErrorBox text={error} />}
    </div>
  );
};

export default Select;
