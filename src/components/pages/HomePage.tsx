"use client";

import Loader from "@/ui/Loader/Loader";
import Albums from "./HomeSections/Albums";
import ArtistsSection from "./HomeSections/ArtistsSection";
import FeaturedPlaylists from "./HomeSections/FeaturedPlaylists";
import Recommendations from "./HomeSections/Recommendations";
import { useGetFeaturedPlaylistsQuery } from "@/redux/api/playlists";

const HomePage = () => {
  const { isLoading } = useGetFeaturedPlaylistsQuery();
  if (isLoading) return <Loader />;
  return (
    <>
      <ArtistsSection />
      <FeaturedPlaylists />
      <Recommendations />
      <Albums />
    </>
  );
};

export default HomePage;
