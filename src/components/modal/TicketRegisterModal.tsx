import * as S from "../../styles/modal/TicketRegisterModal.styles";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import CommonSelectBox from "../CommonSelectBox";

interface ITicketRegisterModalProps {
  setIsRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TicketRegisterModal({
  setIsRegisterModalOpen,
}: ITicketRegisterModalProps) {
  const [isProductSelectBoxOpen, setIsProductSelectBoxOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productList] = useState([{ value: "1", label: "테스트" }]);
  const [isTrainerSelectBoxOpen, setIsTrainerSelectBoxOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [trainerList] = useState([{ value: "1", label: "테스트" }]);
  const [isDateFocus, setIsDateFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const productSelectBoxRef = useRef<HTMLDivElement>(null);
  const trainerSelectBoxRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleFocusInput = () => {
    setIsDateFocus(true);
  };

  const handleBlurInput = () => {
    setIsDateFocus(false);
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <S.Background>
      <S.Container>
        <S.TopContainer>
          <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
        </S.TopContainer>
        <S.LabelSelectContainer>
          <S.Label>상품</S.Label>
          <CommonSelectBox
            selectBoxRef={productSelectBoxRef}
            isSelectBoxOpen={isProductSelectBoxOpen}
            setIsSelectBoxOpen={setIsProductSelectBoxOpen}
            selectedOption={selectedProduct}
            setSelectedOption={setSelectedProduct}
            optionList={productList}
            width={270}
          />
        </S.LabelSelectContainer>
        <S.LabelSelectContainer>
          <S.Label>트레이너</S.Label>
          <CommonSelectBox
            selectBoxRef={trainerSelectBoxRef}
            isSelectBoxOpen={isTrainerSelectBoxOpen}
            setIsSelectBoxOpen={setIsTrainerSelectBoxOpen}
            selectedOption={selectedTrainer}
            setSelectedOption={setSelectedTrainer}
            optionList={trainerList}
            width={270}
          />
        </S.LabelSelectContainer>
        <S.LabelSelectContainer>
          <S.Label>시작일자</S.Label>
          <S.DateInput
            type="date"
            value={selectedDate}
            onChange={handleDate}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
            $isDateFocus={isDateFocus}
          />
        </S.LabelSelectContainer>
        <S.RegisterButton>등록하기</S.RegisterButton>
      </S.Container>
    </S.Background>
  );
}
