import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import BannerBox from "../../components/admin/BannerBox";
import BannerMakeModal from "../../components/admin/BannerMakeModal";

export default function Banner() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [onModal, setOnModal] = useState(false);

  const onClickMakeButton = () => {
    setOnModal(!onModal);
  };

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
          totalPage={10}
          setPage={setPage}
          name={"admin/product"}
        />
      </S.AdminContainer>
      {onModal && <BannerMakeModal setOnModal={setOnModal} />}
    </>
  );
}
