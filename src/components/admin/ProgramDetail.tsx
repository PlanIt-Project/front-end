import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";

export default function ProgramDetail({ setOnDetail, id }: IDetail) {
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
            <S.DetailText>개인레슨 3개월{id}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>남은 횟수: </S.DetailName>
            <S.DetailText>0</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
          <S.DetailDateColumn>
              <S.DetailName>시작/</S.DetailName>
              <S.DetailName>종료 일자:</S.DetailName>
            </S.DetailDateColumn>
            <S.DetailDateColumn>
              <S.DetailText>2024-03-20/</S.DetailText>
              <S.DetailText>2024-06-24</S.DetailText>
            </S.DetailDateColumn>
          </S.DetailContent>

          <S.DetailContent>
            <S.DetailDateColumn>
              <S.DetailName>일시 정지/</S.DetailName>
              <S.DetailName>재시작 일자:</S.DetailName>
            </S.DetailDateColumn>
            <S.DetailDateColumn>
              <S.DetailText>2024-05-20/</S.DetailText>
              <S.DetailText>미정</S.DetailText>
            </S.DetailDateColumn>
            <S.DetailText></S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>프로그램 상태:</S.DetailName>
            <S.DetailText>일시 정지</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>고객 이름:</S.DetailName>
            <S.DetailText>홍길동</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>트레이너 이름:</S.DetailName>
            <S.DetailText>길동홍</S.DetailText>
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
