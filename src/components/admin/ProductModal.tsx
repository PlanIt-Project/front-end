import { useEffect, useRef, useState } from "react";
import * as S from "../../styles/admin/Product.styles";
import CommonSelectBox from "../../components/CommonSelectBox";
import { IProductModal } from "../../types/admin/Product.types";

const type = [
  { label: "패키지", value: "패키지" },
  { label: "이용권", value: "이용권" },
];

export default function ProductModal({ setOnModal, isModify }: IProductModal) {
  // TODO zustand로 수정, 등록시에 isModify 관리, react-hook-form 사용
  const [boxOpen, setBoxOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("패키지");
  const TypeSelectRef = useRef<HTMLDivElement>(null);

  const onClickClose = () => {
    setOnModal(false);
  };

  useEffect(() => {
    if (isModify) {
      console.log("modify");
    }
  }, []);
  return (
    <S.Overlay>
      <S.Modal>
        <S.ModalContent>
          <S.ContentName>이름</S.ContentName>
          <S.ContentInput $width={270} placeholder="홍길동" />
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
            <S.ContentInput $width={40} placeholder="0" />
            <S.InputText>년</S.InputText>
            <S.ContentInput $width={40} placeholder="0" />
            <S.InputText>월</S.InputText>
            <S.ContentInput $width={40} placeholder="0" />
            <S.InputText>일</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>횟수</S.ContentName>
          <S.InputContainer>
            <S.ContentInput $width={150} placeholder="24" />
            <S.InputText>회</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>가격</S.ContentName>
          <S.InputContainer>
            <S.ContentInput $width={250} placeholder="100000" />
            <S.InputText>원</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        <S.ButtonContainer>
          <S.ModalButton>{isModify ? "수정" : "등록"}</S.ModalButton>
          <S.ModalButton
            onClick={() => {
              onClickClose();
            }}
          >
            취소
          </S.ModalButton>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
}
