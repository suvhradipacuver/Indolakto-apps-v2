import { FiMenu } from "react-icons/fi";
import useSidebar from "../../hooks/useSidebar";
import Logo from "../Logo/Logo";
import LanguageSelector from "./LanguageSelector";
import Notifications from "./Notifications";
import ProfileCard from "./ProfileCard";

const Header = () => {
  const { show, setShow } = useSidebar();

  return (
    <header
      className={`header h-14 bg-baseBlack z-20 flex items-center justify-between px-8 shadow fixed top-0 right-0 left-0`}
    >
      <div className="left flex items-center gap-x-4">
        <Logo />
      </div>
      <div className="options flex items-center gap-x-4">
        <LanguageSelector />
        <Notifications />
        <ProfileCard />
      </div>
    </header>
  );
};

export default Header;
