import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../../styles/admin/AdminCommon.styles";
import TrainerBox from "../../components/admin/TrainerBox";
import Pagination from "../../components/CommonPagination";

export default function Trainer() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));


  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>트레이너 관리</S.Title>
          <TrainerBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={10}
          setPage={setPage}
          name={"admin/product"}
        />
      </S.AdminContainer>
    </>
  );
}
