"use client";
import { useGetArtistsSeveralQuery } from "@/redux/api/artists";
import scss from "./ArtistsSection.module.scss";

const ArtistsSection = () => {
  const { data } = useGetArtistsSeveralQuery();
  return (
    <section className={scss.ArtistsSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.items}>
            {data?.artists.items.map((item) => (
              <div key={item.id} className={scss.item}>
                <img src={item.images[0].url} alt="picture" />
                <h4 className={scss.artist_name}>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
