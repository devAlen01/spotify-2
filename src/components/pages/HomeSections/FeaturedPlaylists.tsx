"use client";
import { useGetFeaturedPlaylistsQuery } from "@/redux/api/playlists";
import scss from "./FeaturedPlaylists.module.scss";
import { useRouter } from "next/navigation";
import Loader from "@/ui/Loader/Loader";

const FeaturedPlaylists = () => {
  const { data, isLoading } = useGetFeaturedPlaylistsQuery();
  const router = useRouter();
  if (isLoading) return <Loader />;
  return (
    <section className={scss.FeaturedPlaylists}>
      <div className="container">
        <div className={scss.content}>
          <h3 className={scss.title}>{data?.message}</h3>
          <div className={scss.items}>
            {data?.playlists.items?.map((item) => (
              <div
                key={item.id}
                className={scss.item}
                onClick={() => router.push(`/playlist/${item.id}`)}
              >
                <img src={item.images[0].url} alt="picture" />
                <h4 className={scss.playlist_name}>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaylists;
