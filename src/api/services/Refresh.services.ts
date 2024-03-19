import { instance } from "../instance";

export const getNewRefreshToken = async () => {
  const refreshToken = localStorage.getItem("refresh");

  if (refreshToken !== null) {
    const res = await instance.get("/refresh", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    return res.data;
  } else {
    throw new Error("Refresh token이 없습니다.");
  }
};
