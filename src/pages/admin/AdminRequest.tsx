import { useEffect, useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import RequestBox from "../../components/admin/RequestBox";
import { getAdminRequest } from "../../hooks/queries/admin/getRequest";
import { useAdminRequestStore } from "../../stores/adminRequestStore";

export default function AdminRequest() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [option, setOption] = useState<string>("READY");
  const { setRequestContent } = useAdminRequestStore();

  const onChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };

  const { data } = getAdminRequest(page - 1, 7, option);

  // member가 트레이너 인지 회원인지
  // 회원과 트레이너 모두 접근할 수 있어야 할 것 같음
  useEffect(() => {
    if (data) {
      setRequestContent(data.content);
    }
    console.log(data?.content);
  }, [data]);
  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>등록 요청 관리</S.Title>
          <S.ButtonContainer>
            <S.SelectButton
              value={option}
              onChange={(e) => {
                onChangeOption(e);
              }}
            >
              <S.SelectOption value="ALL">모든 이용권</S.SelectOption>
              <S.SelectOption value="READY">승인 대기 중</S.SelectOption>
            </S.SelectButton>
          </S.ButtonContainer>
          <RequestBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={10}
          setPage={setPage}
          name={"admin/adminRequest"}
        />
      </S.AdminContainer>
    </>
  );
}
