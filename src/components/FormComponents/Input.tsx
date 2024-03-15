import ErrorBox from "../ErrorBox/ErrorBox";
import Tooltip from "../Tooltip/Tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface Props {
  label?: string;
  id: string;
  name: string;
  register: any;
  type?: "text" | "number" | "email" | "password" | "date";
  placeholder?: string;
  error: string | null;
  classes?: string;
  min?: number;
  max?: number;
  required?: boolean;
  helpText?: string;
  minLength?: number;
  disabled?: boolean;
  outerClasses?: string;
  showError?: boolean;
  getValues?: Function;
}

const Input = ({
  label,
  id,
  name,
  outerClasses,
  minLength,
  register,
  getValues,
  type = "text",
  placeholder,
  error,
  required,
  classes,
  helpText,
  min,
  max,
  disabled = false,
  showError = true,
}: Props) => {
  return (
    <div className={`input flex flex-col ${outerClasses}`}>
      {label && (
        <label
          className="font-semibold text-gray-700 mb-1.5 text-sm"
          htmlFor={id}
        >
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
      {getValues ? (
        <Tooltip content={getValues(name)}>
          <span
            className={`bg-white h-full px-1 py-1 outline-none ${
              disabled ? "bg-gray-200 cursor-not-allowed" : ""
            }`}
          >
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
              className={`h-full w-full outline-none ${
                error ? "border border-red-400" : ""
              } disabled:bg-gray-200 disabled:cursor-not-allowed ${classes} text-sm`}
            />
          </span>
        </Tooltip>
      ) : (
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
          className={`bg-white h-full px-1 py-1 outline-none ${
            error ? "border border-red-400" : ""
          } disabled:bg-gray-200 disabled:cursor-not-allowed ${classes} text-sm`}
        />
      )}

      {error && showError && <ErrorBox text={error} />}
    </div>
  );
};

export default Input;
