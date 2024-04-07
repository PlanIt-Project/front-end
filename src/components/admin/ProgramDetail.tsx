import { useAdminProgramDetailStore } from "../../stores/adminProgramStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";
import { skipNull, statusToKor } from "../../utils/adminFilter";

export default function ProgramDetail({ setOnDetail }: IDetail) {
  const { programDetail } = useAdminProgramDetailStore();
  
  const onCloseButton = () => {
    setOnDetail(false);
  };

  return (
    <>
      <S.Overlay>
        <S.Detail>
          <S.DetailTitle>이용권 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>이름:</S.DetailName>
            <S.DetailText>{programDetail.productName}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>남은 횟수: </S.DetailName>
            <S.DetailText>{programDetail.remainedNumber}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailDateColumn>
              <S.DetailName>시작/</S.DetailName>
              <S.DetailName>종료 일자:</S.DetailName>
            </S.DetailDateColumn>
            <S.DetailDateColumn>
              <S.DetailText>{skipNull(programDetail.startAt)}/</S.DetailText>
              <S.DetailText>{skipNull(programDetail.endAt)}</S.DetailText>
            </S.DetailDateColumn>
          </S.DetailContent>

          <S.DetailContent>
            <S.DetailDateColumn>
              <S.DetailName>일시 정지/</S.DetailName>
              <S.DetailName>재시작 일자:</S.DetailName>
            </S.DetailDateColumn>
            <S.DetailDateColumn>
              <S.DetailText>{skipNull(programDetail.suspendAt)}/</S.DetailText>
              <S.DetailText>{skipNull(programDetail.resumeAt)}</S.DetailText>
            </S.DetailDateColumn>
            <S.DetailText></S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>프로그램 상태:</S.DetailName>
            <S.DetailText>{statusToKor(programDetail.status)}</S.DetailText>;
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>고객 이름:</S.DetailName>
            <S.DetailText>{programDetail.member.name.toString()}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            {programDetail.type === "PT" ? (
              <>
                <S.DetailName>트레이너 이름:</S.DetailName>
                <S.DetailText>{programDetail.employee.name}</S.DetailText>
              </>
            ) : null}
          </S.DetailContent>
          <S.ButtonContainer>
            <S.DetailButton
              onClick={() => {
                onCloseButton();
              }}
            >
              닫기
            </S.DetailButton>
          </S.ButtonContainer>
        </S.Detail>
      </S.Overlay>
    </>
  );
}
