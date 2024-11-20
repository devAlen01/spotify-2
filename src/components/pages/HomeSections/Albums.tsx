"use client";
import { useGetNewReleasesQuery } from "@/redux/api/albums";
import scss from "./Albums.module.scss";

const Albums = () => {
  const { data } = useGetNewReleasesQuery();
  console.log("🚀 ~ Albums ~ data:", data);
  return (
    <section className={scss.Albums}>
      <div className="container">
        <div className={scss.content}>
          <h1>NewReleases</h1>
          <div className={scss.items}>
            {data?.albums.items?.map((item, index) => (
              <div
                className={scss.m}
                key={index}
                style={{
                  width: "100%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  minWidth: "180px",
                  maxWidth: "270px",
                  height: "clamp(120px, 25vw, 160px)",
                  background: `url(${item.images[0].url})`,
                  cursor: "pointer",
                  borderRadius: "10px",
                  backgroundPosition: "center",
                  backgroundSize: "center",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className={scss.category_title}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Albums;
