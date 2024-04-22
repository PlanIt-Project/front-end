export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  offset: boolean;
  unpaged: boolean;
  paged: boolean;
}
