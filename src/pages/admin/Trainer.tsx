import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../../styles/admin/AdminCommon.styles";
import TrainerBox from "../../components/admin/TrainerBox";
import Pagination from "../../components/CommonPagination";
import { getAdminTrainer } from "../../hooks/queries/admin/getTrainer";
import { useAdminTrainerStore } from "../../stores/adminTrainerStore";

export default function Trainer() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const { setTrainerContent } = useAdminTrainerStore();

  const { data } = getAdminTrainer(page - 1, 7);

  useEffect(() => {
    if (data) {
      setTrainerContent(data.content);
    }
  }, [data]);

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>트레이너 관리</S.Title>
          <TrainerBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={Number(data?.totalPages)}
          setPage={setPage}
          name={"admin/trainer"}
        />
      </S.AdminContainer>
    </>
  );
}
