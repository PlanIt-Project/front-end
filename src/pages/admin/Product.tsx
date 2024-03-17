import { useRef, useState } from "react";
import ProductBox from "../../components/admin/ProductBox";
import * as S from "../../styles/admin/Product.styles";
import CommonSelectBox from "../../components/CommonSelectBox";

const type = [
  { label: "1", value: "패키지" },
  { label: "2", value: "이용권" },
];

export default function Product() {
  const [onModal, setOnModal] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("패키지");
  const TypeSelectRef = useRef<HTMLDivElement>(null);
  const onClickMakeButton = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>상품관리</S.Title>
          <S.MakeButton
            onClick={() => {
              onClickMakeButton();
            }}
          >
            상품추가
          </S.MakeButton>
          <ProductBox />
        </S.AdminContent>
      </S.AdminContainer>
      {onModal && (
        <S.Overlay>
          <S.Modal>
            <S.ModalContent>
              <S.ContentName>이름</S.ContentName>
              <S.ContentInput width={270} placeholder="홍길동" />
            </S.ModalContent>
            <S.ModalContent>
              <S.ContentName>종류</S.ContentName>
              <CommonSelectBox
                selectBoxRef={TypeSelectRef}
                isSelectBoxOpen={boxOpen}
                setIsSelectBoxOpen={setBoxOpen}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                optionList={type}
                width={270}
                height={20}
              />
            </S.ModalContent>
            <S.ModalContent>
              <S.ContentName>기간</S.ContentName>
              <S.InputContainer>
                <S.ContentInput width={40} />
                <S.InputText>년</S.InputText>
                <S.ContentInput width={40} />
                <S.InputText>월</S.InputText>
                <S.ContentInput width={40} />
                <S.InputText>일</S.InputText>
              </S.InputContainer>
            </S.ModalContent>
            <S.ModalContent>
              <S.ContentName>횟수</S.ContentName>
              <S.InputContainer>
                <S.ContentInput width={250} />
                <S.InputText>회</S.InputText>
              </S.InputContainer>
            </S.ModalContent>
            <S.ModalContent>
              <S.ContentName>가격</S.ContentName>
              <S.InputContainer>
                <S.ContentInput width={250} />
                <S.InputText>원</S.InputText>
              </S.InputContainer>
            </S.ModalContent>
            <S.ModalButton>등록하기</S.ModalButton>
          </S.Modal>
        </S.Overlay>
      )}
    </>
  );
}
