import * as S from "../../styles/modal/TicketRegisterModal.styles";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import CommonSelectBox from "../CommonSelectBox";
import { getTicketList } from "../../hooks/queries/ticket/getTicketList";
import { ITicketContent } from "../../types/ticket/TicketList.types";
import { getTrainerList } from "../../hooks/queries/ticket/getTrainerList";
import { ITrainerContent } from "../../types/ticket/TrainerList.types";
import dayjs from "dayjs";
import { registerProgram } from "../../hooks/queries/ticket/registerProgram";

interface ITicketRegisterModalProps {
  setIsRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsToastOpen: Dispatch<SetStateAction<boolean>>;
}

export default function TicketRegisterModal({
  setIsRegisterModalOpen,
  setIsToastOpen,
}: ITicketRegisterModalProps) {
  const [isProductSelectBoxOpen, setIsProductSelectBoxOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [productList, setProductList] = useState<ITicketContent[]>([]);
  const [isTrainerSelectBoxOpen, setIsTrainerSelectBoxOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<number>(0);
  const [trainerList, setTrainerList] = useState<ITrainerContent[]>([]);
  const [isDateFocus, setIsDateFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format("YYYY-MM-DD"),
  );

  const productSelectBoxRef = useRef<HTMLDivElement>(null);
  const trainerSelectBoxRef = useRef<HTMLDivElement>(null);

  const { data: ticketData } = getTicketList();
  const { data: trainerData } = getTrainerList();

  const { mutate: registerProgramMutate } = registerProgram(
    selectedProduct,
    selectedTrainer,
    selectedDate,
    setIsRegisterModalOpen,
    setIsToastOpen,
  );

  useEffect(() => {
    if (ticketData) {
      setProductList(ticketData.content);
      setSelectedProduct(ticketData.content[0].id);
    }
  }, [ticketData]);

  useEffect(() => {
    if (trainerData) {
      const trainerListWithRandom: ITrainerContent[] = [];
      const randomOption: ITrainerContent = {
        id: -1,
        email: "",
        name: "랜덤",
        phone_number: "",
        birth: "",
        address: "",
        role: "TRAINER",
        career: "",
        trainerMessage: null,
      };

      trainerListWithRandom.push(...trainerData.content);
      trainerListWithRandom.push(randomOption);

      setTrainerList(trainerListWithRandom);
      setSelectedTrainer(trainerData.content[0].id);
    }
  }, [trainerData]);

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

  const handleRegister = () => {
    registerProgramMutate();
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
        <S.RegisterButton onClick={handleRegister}>등록하기</S.RegisterButton>
      </S.Container>
    </S.Background>
  );
}
