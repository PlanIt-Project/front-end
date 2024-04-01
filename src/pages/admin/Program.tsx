import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import ProgramBox from "../../components/admin/ProgramBox";
import { useProgramOptionStore } from "../../stores/programStore";

export default function Program() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const {option ,setOption} = useProgramOptionStore();

  const onChangeOption = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value)
  }

  
  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>이용권 관리</S.Title>
          <S.ButtonContainer>
            <S.SelectButton
              value={option}
              onChange={(e) => {
                onChangeOption(e);
              }}
            >
              <S.SelectOption value="ALL">모든 이용권</S.SelectOption>
              <S.SelectOption value="VALID">진행중</S.SelectOption>
              <S.SelectOption value="INVALID">진행중지</S.SelectOption>
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
