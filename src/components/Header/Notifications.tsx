import { useState } from "react";
import { FiBell } from "react-icons/fi";
import useOutSideClose from "../../hooks/useOutSideClose";

const Notifications = () => {
  const [showOptions, setShowOptions] = useState(false);

  const ref = useOutSideClose(() => setShowOptions(false));

  return (
    <div
      className="notifications relative flex items-center justify-center text-sm"
      ref={ref}
    >
      <button
        onClick={() => setShowOptions(!showOptions)}
        className={`${
          showOptions ? "active" : ""
        } text-white icon-button`}
      >
        <FiBell size={20} />
      </button>

      {showOptions && (
        <div
          className="absolute -right-2 z-40 bg-white rounded-xl shadow-lg top-8"
          style={{
            minWidth: "200px",
          }}
        >
          <ul className="flex flex-col font-base">
            <li className="rounded-xl cursor-pointer px-4 py-2 hover:bg-blue-200">
              1 New Order
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
