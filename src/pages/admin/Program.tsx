import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import ProgramBox from "../../components/admin/ProgramBox";

// TO DO, Modal과 Detail 컴포넌트로 분리
// Modal은 등록 관련해서 사용
// Detail은 id 관련으로 상세 조회할 때 사용
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