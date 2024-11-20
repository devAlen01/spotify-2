"use client";
import { useGetCategorySeveralQuery } from "@/redux/api/category";
import scss from "./Recommendations.module.scss";

const Recommendations = () => {
  const { data } = useGetCategorySeveralQuery();

  let res = data?.categories.items[0].id;
  console.log("🚀 ~ Recommendations ~ res:", res);
  return (
    <section className={scss.Recommendations}>
      <div className="container">
        <div className={scss.content}>
          <h1>Recommendations</h1>
          <div className={scss.items}>
            {data?.categories.items?.map((item, index) => (
              <div
                className={scss.m}
                key={index}
                style={{
                  width: "100%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  minWidth: "180px",
                  maxWidth: "270px",
                  height: "clamp(120px, 25vw, 160px)",
                  background: `url(${item.icons[0].url})`,
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

export default Recommendations;
