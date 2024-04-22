import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserInfoService } from "../api/services/Login.services";
import { IMemberData } from "../types/Login.types";

interface IAuthState {
  user: IMemberData | null;
  accessToken: string;
  refreshToken: string;
  userInfo: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create(
  persist<IAuthState>(
    (set) => ({
      user: null,
      accessToken: "",
      refreshToken: "",
      userInfo: async () => {
        try {
          // NOTE 사용자 정보 가져오기
          const { data: userInfoData } = await getUserInfoService();

          set({
            user: userInfoData,
          });
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
      logout: () => {
        set({ user: null, accessToken: "", refreshToken: "" });
      },
    }),
    {
      name: "auth",
      getStorage: () => localStorage,
    },
  ),
);
