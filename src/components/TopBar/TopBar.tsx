import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  goBack?: boolean;
  actions?: React.ReactNode;
}

const TopBar = ({ title, goBack, actions }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-white shadow mb-4 flex items-center justify-between px-4 rounded sticky top-14 z-10">
      <div className="left flex items-center gap-x-2">
        {goBack && (
          <button onClick={() => navigate(-1)} className="text-primary">
            <HiArrowNarrowLeft size={18} />
          </button>
        )}
        <h1 className="text-sm font-bold">{title}</h1>
      </div>
      <div className="right flex items-center gap-x-2">{actions}</div>
    </div>
  );
};

export default TopBar;
