"use client";
import { useParams } from "next/navigation";
import scss from "./SearchResults.module.scss";
import { useSearchTracksQuery } from "@/redux/api/search";
import { usePlayerStore } from "@/stores/usePlayerStore";
import Loader from "@/ui/Loader/Loader";
const SearchResults = () => {
  const { searchQuery } = useParams();
  const decodeText = decodeURIComponent(String(searchQuery));
  const { data, isLoading } = useSearchTracksQuery(decodeText);

  const { setTrackUris, setTrackIndex, setActiveUri, activeUri } =
    usePlayerStore();

  const getTrackUris = async (index: number) => {
    const trackUrisFilter = data?.tracks.items.map((item) => item.uri);
    setTrackUris(trackUrisFilter!);
    setTrackIndex(index);
  };

  const filterActiveTrack = (uri: string) => {
    const activeTrack = data?.tracks.items.find((item) => item.uri === uri);
    setActiveUri(activeTrack?.uri!);
  };

  if (isLoading) return <Loader />;
  return (
    <section className={scss.SearchResults}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.tracks}>
            {data?.tracks.items.map((item, index) => (
              <div
                onClick={() => {
                  filterActiveTrack(item.uri);
                  getTrackUris(index);
                }}
                key={item.id}
                className={
                  activeUri === item.uri
                    ? `${scss.track} ${scss.active}`
                    : `${scss.track}`
                }
              >
                <img src={item.album.images[0].url} alt="picture" />
                <h5>{item.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
