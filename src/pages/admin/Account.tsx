import { useParams } from "react-router-dom";
import AccountBox from "../../components/admin/AccountBox";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useState } from "react";
import Pagination from "../../components/CommonPagination";

export default function Account() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  return <>
  <S.AdminContainer>
    <S.AdminContent>
      <S.Title>계정 관리</S.Title>
      <AccountBox />
    </S.AdminContent>
    <Pagination
          page={page}
          totalPage={10}
          setPage={setPage}
          name={"admin/account"}
        />
  </S.AdminContainer>
</>;
}
