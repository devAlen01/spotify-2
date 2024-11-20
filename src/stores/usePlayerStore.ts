import { create } from "zustand";

interface IPlayerStore {
  accessToken: string;
  trackUris: string[];
  truckIndex: number | null;
  activeUri: string | null;
  openSideBar: boolean;

  setAccessToken: (token: string) => void;
  setTrackUris: (uri: string[]) => void;
  setTrackIndex: (index: number) => void;
  setActiveUri: (active: string) => void;
  setOpenSideBar: (isOpen: boolean) => void;
}

export const usePlayerStore = create<IPlayerStore>((set) => ({
  accessToken: "",
  trackUris: [],
  truckIndex: null,
  activeUri: null,
  openSideBar: false,

  setAccessToken: (token) => set({ accessToken: token }),
  setTrackUris: (uri) => set({ trackUris: uri }),
  setTrackIndex: (index) => set({ truckIndex: index }),
  setActiveUri: (active) => set({ activeUri: active }),
  setOpenSideBar: (isOpen) => set({ openSideBar: isOpen }),
}));
