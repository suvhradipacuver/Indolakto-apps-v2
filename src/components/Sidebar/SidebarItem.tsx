import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import useSidebar from "../../hooks/useSidebar";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  to: string;
  text: string;
  Icon: IconType;
  iconSize?: string;
}

const SidebarItem = ({ to, text, Icon, iconSize }: Props) => {
  const { show } = useSidebar();

  return show ? (
    <li className="noselect">
      <NavLink
        to={to}
        className={({ isActive }) => {
          return `text-center font-sans ${
            isActive
              ? "bg-primary text-white"
              : "hover:bg-primary text-gray-300 hover:text-white"
          } flex w-full rounded-md mb-1.5 px-4 gap-x-2 items-center justify-start h-14`;
        }}
      >
        <Icon size={iconSize || 22} />
        <span className={"block"}>{text}</span>
      </NavLink>
    </li>
  ) : (
    <li className="noselect">
      <Tooltip content={text} position="right">
        <NavLink
          to={to}
          className={({ isActive }) => {
            return `text-center font-sans ${
              isActive
                ? "bg-primary text-white"
                : "hover:bg-primary text-gray-300 hover:text-white"
            } flex px-4 gap-x-2 mb-2.5 rounded-md flex-col justify-center items-center h-12`;
          }}
        >
          <Icon size={iconSize || 22} />
          <span className={"hidden"}>{text}</span>
        </NavLink>
      </Tooltip>
    </li>
  );
};

export default SidebarItem;