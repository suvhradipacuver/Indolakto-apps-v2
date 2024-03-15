interface Props {
  text: string;
  classes? : string
}

const ErrorBox = ({ text, classes }: Props) => {
  return <div className={`error mt-2 text-red-400 text-sm ${classes}`}>{text}</div>;
};

export default ErrorBox;
