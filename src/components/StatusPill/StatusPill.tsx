import React from "react";
import { ALL_STATUSES } from "../../types/constants";

interface Props {
  text: string;
  highlight?: boolean;
}

const StatusPill = ({ text, highlight = false }: Props) => {
  let classes = "";

  switch (text) {
    case ALL_STATUSES.PENDING:
    case ALL_STATUSES.PACKED:
    case ALL_STATUSES.CREATED:
      classes = `text-yellow-500 bg-yellow-100`;
      break;
    case ALL_STATUSES.SENT:
    case ALL_STATUSES.SHIPPED:
    case ALL_STATUSES.QUOTE_CONFIRMED:
      classes = `text-green-500 bg-green-100`;
      break;
    case ALL_STATUSES.DELIVERED:
      classes = `text-purple-500 bg-purple-100`;
      break;
    case ALL_STATUSES.CONFIRMED:
      classes = `text-red-500 bg-red-100`;
      break;
    default:
      classes = `text-gray-500 bg-gray-100`;
  }

  if (highlight) classes = " text-red-500 bg-red-100";

  return (
    <div className={`text-xs ${classes} w-max px-2 py-1 rounded-full`}>
      {text}
    </div>
  );
};

export default StatusPill;
