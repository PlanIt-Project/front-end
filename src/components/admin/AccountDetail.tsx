import { useAdminAccountDetailStore } from "../../stores/adminAccountStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";
import {
  genderToKor,
  phoneNumberFormat,
  roleToKor,
} from "../../utils/adminFilter";

export default function AccountDetail({ setOnDetail }: IDetail) {
  const { accountDetail } = useAdminAccountDetailStore();

  const onCloseButton = () => {
    setOnDetail(false);
  };

  return (
    <>
      <S.Overlay>
        <S.Detail>
          <S.DetailTitle>상품 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>이름:</S.DetailName>
            <S.DetailText>{accountDetail.name}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>이메일:</S.DetailName>
            <S.DetailText>{accountDetail.email}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>생년월일:</S.DetailName>
            <S.DetailText>{accountDetail.birth}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>주소:</S.DetailName>
            <S.DetailText>{accountDetail.address}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>핸드폰 번호:</S.DetailName>
            <S.DetailText>
              {phoneNumberFormat(accountDetail.phone_number)}
            </S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>성별:</S.DetailName>
            <S.DetailText>{genderToKor(accountDetail.gender)}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>권한:</S.DetailName>
            <S.DetailText>{roleToKor(accountDetail.role)}</S.DetailText>
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
