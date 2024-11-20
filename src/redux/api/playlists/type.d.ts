namespace PLAYLIST {
  type GetPlaylistResponse = IUserPLaylist;
  type GetPlaylistRequest = void;

  type GetOnePlaylistResponse = IUserPLaylistID;
  type GetOnePlaylistRequest = string;

  type GetFeaturedPlaylistsResponse = IFeaturedPlaylist;
  type GetFeaturedPlaylistsRequest = void;
}
