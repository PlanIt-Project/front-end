import { useEffect, useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import BannerBox from "../../components/admin/BannerBox";
import BannerMakeModal from "../../components/admin/BannerMakeModal";
import { getAdminBanner } from "../../hooks/queries/admin/getBanner";
import {
  useAdminBannerStore,
  useAdminBannerTriggerStore,
} from "../../stores/adminBannerStore";

export default function Banner() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [onModal, setOnModal] = useState(false);

  const { setBannerContent } = useAdminBannerStore();
  const { bannerTrigger } = useAdminBannerTriggerStore();

  const { data, refetch } = getAdminBanner(page - 1, 7);

  const onClickMakeButton = () => {
    setOnModal(!onModal);
  };

  useEffect(() => {
    if (data) {
      setBannerContent(data.content);
    }
    console.log(data)
  }, [data]);

  useEffect(() => {
    refetch();
  }, [bannerTrigger]);
  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>배너 관리</S.Title>
          <S.ButtonContainer>
            <S.MakeButton
              onClick={() => {
                onClickMakeButton();
              }}
            >
              배너 추가
            </S.MakeButton>
          </S.ButtonContainer>

          <BannerBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={Number(data?.totalPages)}
          setPage={setPage}
          name={"admin/banner"}
        />
      </S.AdminContainer>
      {onModal && <BannerMakeModal setOnModal={setOnModal} />}
    </>
  );
}
