import ErrorBox from "../ErrorBox/ErrorBox";

interface Props {
  label: string;
  id: string;
  name: string;
  classes?: string;
  register: any;
  disabled?: boolean;
  error: string | null;
  outerClasses?: string;
}

const Checkbox = ({
  label,
  id,
  name,
  register,
  error,
  disabled = false,
  classes,
  outerClasses,
}: Props) => {
  return (
    <div className={`input flex flex-col ${outerClasses}`}>
      <div className="box">
        <input
          disabled={disabled}
          id={id}
          className={`${classes}`}
          type="checkbox"
          {...register(name)}
        />
        <label
          htmlFor={id}
          className="font-medium ml-1.5 text-sm text-gray-700"
        >
          {label}
        </label>
      </div>

      {error && <ErrorBox text={error} />}
    </div>
  );
};

export default Checkbox;
