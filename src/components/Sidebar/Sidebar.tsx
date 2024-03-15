import SidebarItem from "./SidebarItem";
import {
  FiChevronsLeft,
  FiChevronsRight,
  FiCreditCard,
  FiEdit,
  FiShoppingCart,
} from "react-icons/fi";
import useSidebar from "../../hooks/useSidebar";
import { useIntl } from "react-intl";
import useAuth from "../../hooks/useAuth";
import { ALL_ROLES } from "../../types/constants";

const Sidebar = () => {
  const intl = useIntl();

  const { show, setShow } = useSidebar();
  const { user } = useAuth();

  return (
    <aside
      className={`sidebar pt-4 ${show ? "w-56" : "w-20"
        } bg-baseBlack text-gray-100 flex flex-col fixed left-0 top-14 bottom-0 z-30`}
      style={{
        minHeight: `calc(100% - 3.5rem)`,
        maxHeight: `calc(100% - 3.5rem)`,
      }}
    >
      <button
        style={{
          top: "56px",
        }}
        aria-label="sidebar-toggle-btn"
        className="absolute -right-3 toggle-btn flex items-center justify-center text-baseBlack bg-white shadow-lg p-1 rounded-full z-30"
        onClick={() => setShow((prevValue) => !prevValue)}
      >
        {show ? <FiChevronsLeft size={18} /> : <FiChevronsRight size={18} />}
      </button>
      <ul className="invisible-scrollbar flex-1 overflow-y-auto w-full flex flex-col px-3 gap-y-2">
        <SidebarItem
          to="/quotes"
          text={intl.formatMessage({
            id: "quote",
            defaultMessage: "Quote",
          })}
          Icon={FiEdit}
        />
        {user?.role === ALL_ROLES.ADMIN && (
          <>
            <SidebarItem
              to="/sales"
              text={intl.formatMessage({
                id: "salesOrders",
                defaultMessage: "Sales Orders",
              })}
              Icon={FiShoppingCart}
            />
            <SidebarItem
              to="/purchases"
              text={intl.formatMessage({
                id: "purchaseOrder",
                defaultMessage: "Purchase Order",
              })}
              Icon={FiCreditCard}
            />
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
