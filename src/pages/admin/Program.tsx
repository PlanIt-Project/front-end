import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import ProgramBox from "../../components/admin/ProgramBox";

export default function Program() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>이용권 관리</S.Title>
          <S.ButtonContainer>
            <S.SelectButton>
              <S.SelectOption>모든 이용권</S.SelectOption>
              <S.SelectOption>진행중</S.SelectOption>
              <S.SelectOption>진행중지</S.SelectOption>
            </S.SelectButton>
          </S.ButtonContainer>
          <ProgramBox />
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