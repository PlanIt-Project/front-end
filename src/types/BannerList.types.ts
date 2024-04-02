export interface IBannerListData {
  id: number;
  title: string;
  startAt: string;
  endAt: string;
  imagePath: string;
}

export interface IBannerListResponse {
  code: number;
  message: string;
  data: IBannerListData[];
}
