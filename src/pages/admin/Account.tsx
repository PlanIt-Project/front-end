import { useParams } from "react-router-dom";
import AccountBox from "../../components/admin/AccountBox";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useEffect, useState } from "react";
import Pagination from "../../components/CommonPagination";
import { getAdminAccount } from "../../hooks/queries/admin/getAccount";
import {
  useAdminAccountStore,
  useAdminAccountTriggerStore,
} from "../../stores/adminAccountStore";

export default function Account() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));

  const { setAccountContent } = useAdminAccountStore();
  const { accountTrigger } = useAdminAccountTriggerStore();

  const { data, refetch } = getAdminAccount(page - 1, 7);

  useEffect(() => {
    if (data) {
      setAccountContent(data.content);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [accountTrigger]);
  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>계정 관리</S.Title>
          <AccountBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={Number(data?.totalPages)}
          setPage={setPage}
          name={"admin/account"}
        />
      </S.AdminContainer>
    </>
  );
}
