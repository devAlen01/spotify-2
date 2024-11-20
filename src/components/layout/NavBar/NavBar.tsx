import Link from "next/link";
import scss from "./NavBar.module.scss";
import { FaSpotify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const NavBar = () => {
  return (
    <nav className={scss.NavBar}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <FaSpotify />
            </Link>
          </div>
          <div className={scss.search}>
            <Link href="/search">
              <FiSearch />
            </Link>
          </div>
          <div className={scss.playList}>
            <Link href="/mediateka">
              <VscFolderLibrary />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
