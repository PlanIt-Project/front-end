import { useAdminTrainerDetailStore } from "../../stores/adminTrainerStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";
import { parsePeriod } from "../../utils/adminFilter";

export default function TrainerDetail({ setOnDetail }: IDetail) {
  const { trainerDetail } = useAdminTrainerDetailStore();

  const phoneNumberFormat = (phone: string): string => {
    const format = `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`;
    return format;
  };

  const onCloseButton = () => {
    setOnDetail(false);
  };
  return (
    <S.Overlay>
      <S.Detail>
        <S.DetailTitle>트레이너 상세</S.DetailTitle>
        <S.DetailContent>
          <S.DetailName>이름:</S.DetailName>
          <S.DetailText>{trainerDetail.name}</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>이메일: </S.DetailName>
          <S.DetailText>{trainerDetail.email}</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>생년월일:</S.DetailName>
          <S.DetailText>{trainerDetail.birth}</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>전화번호:</S.DetailName>
          <S.DetailText>
            {phoneNumberFormat(trainerDetail.phone_number)}
          </S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>경력</S.DetailName>
          <S.DetailText>{parsePeriod(`P${trainerDetail.career}`)}</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>판매 상태:</S.DetailName>
          <S.DetailText>판매중</S.DetailText>
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
  );
}
