import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import RequestBox from "../../components/admin/RequestBox";


export default function AdminRequest() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>등록 요청 관리</S.Title>
          <S.ButtonContainer>
            <S.SelectButton>
              <S.SelectOption>모든 이용권</S.SelectOption>
              <S.SelectOption>진행중</S.SelectOption>
            </S.SelectButton>
          </S.ButtonContainer>
          <RequestBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={10}
          setPage={setPage}
          name={"admin/program"}
        />
      </S.AdminContainer>
     
    </>
  );
}