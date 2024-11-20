"use client";
import { ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loader from "@/ui/Loader/Loader";
import SideBar from "./SideBar/SideBar";
import { useGetMeQuery } from "@/redux/api/me";

const LayoutSite = ({ children }: { children: ReactNode }) => {
  const { status, data } = useGetMeQuery();
  const [isLoad, setIsLoad] = useState<boolean>(true);

  useEffect(() => {
    if (status === "fulfilled" || status === "rejected") {
      setTimeout(() => {
        setIsLoad(false);
      }, 100);
    }
  }, [status]);
  const handleLogIn = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  if (isLoad) {
    return <Loader />;
  }
  return (
    <div className={scss.LayoutSite}>
      {data?.email ? (
        <>
          <Header />
          <div className={scss.home}>
            <div className={scss.sideBar}>
              <SideBar />
            </div>
            <main>{children}</main>
          </div>
          <Footer />
        </>
      ) : (
        <div className={scss.action}>
          <button title="Войти" className={scss.login} onClick={handleLogIn}>
            Войти
          </button>
        </div>
      )}
    </div>
  );
};

export default LayoutSite;
