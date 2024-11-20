"use client";

import scss from "./Header.module.scss";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { useState } from "react";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";
import SearchTracks from "@/components/shared/SearchTracks";
import { useGetMeQuery } from "@/redux/api/me";

const Header = () => {
  const { data: session } = useGetMeQuery();
  const [modal, setModal] = useState<boolean>(false);

  const handleLogIn = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  const handleLogOut = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Link href="/">
              <FaSpotify />
            </Link>
          </div>

          <div className={scss.navbar}>
            {/* <span className={scss.home}>
                <VscFolderLibrary />
              </span> */}

            <div className={scss.search}>
              <span className={scss.search_icon}>
                <FiSearch />
              </span>
              <SearchTracks />
              <span className={scss.box_icon}>
                <div className={scss.line}></div>
                <LiaBoxOpenSolid />
              </span>
            </div>
          </div>

          <div className={scss.auth}>
            {session ? (
              <>
                {
                  <div className={scss.user}>
                    {session.images[0].url ? (
                      <img
                        title={session.display_name}
                        onClick={() => setModal(!modal)}
                        src={session.images[0].url}
                        alt="ava"
                      />
                    ) : (
                      <h3
                        title={session.display_name}
                        onClick={() => setModal(!modal)}
                      >
                        {session.display_name.slice(0, 1)}
                      </h3>
                    )}
                    {modal ? (
                      <div className={scss.modal}>
                        <button className={scss.logout} onClick={handleLogOut}>
                          Выйти
                        </button>
                      </div>
                    ) : null}
                  </div>
                }
              </>
            ) : (
              <>
                <button
                  title="Войти"
                  className={scss.login}
                  onClick={handleLogIn}
                >
                  Войти
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
