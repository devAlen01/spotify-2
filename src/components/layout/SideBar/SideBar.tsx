"use client";
import { useGetMyPlaylistQuery } from "@/redux/api/playlists";
import scss from "./SideBar.module.scss";
import { useRouter } from "next/navigation";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";
import { usePlayerStore } from "@/stores/usePlayerStore";

const SideBar = () => {
  const { data } = useGetMyPlaylistQuery();
  const { openSideBar, setOpenSideBar } = usePlayerStore();
  const router = useRouter();

  return (
    <section
      className={scss.SideBar}
      style={{ width: openSideBar ? "66px" : "" }}
    >
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.playlist_bar}>
            <div className={scss.icon_text}>
              <div
                title="Моя медиатека"
                onClick={() =>
                  window.innerWidth > 700 ? setOpenSideBar(!openSideBar) : null
                }
                className={scss.library}
              >
                <VscFolderLibrary />
                {!openSideBar ? <h5>Моя медиатека</h5> : null}
              </div>
              {!openSideBar ? (
                <div className={scss.icons}>
                  <span className={scss.plus}>
                    <IoMdAdd />
                  </span>
                  <span className={scss.arrow}>
                    <LuArrowRight />
                  </span>
                </div>
              ) : null}
            </div>

            {!openSideBar ? (
              <div className={scss.actions}>
                <button>Плейлисты</button>
                <button>Исполнители</button>
              </div>
            ) : null}
          </div>
          <div className={scss.playlists}>
            {data?.items.map((item) => (
              <div
                key={item.id}
                className={scss.playlist}
                onClick={() => {
                  router.push(`/playlist/${item.id}`);
                }}
              >
                <img
                  src={item?.images[0]?.url}
                  alt={item.name}
                  title={item.name}
                />

                {!openSideBar ? <h4>{item.name}</h4> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
