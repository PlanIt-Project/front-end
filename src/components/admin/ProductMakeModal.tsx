import { useEffect } from "react";
import * as S from "../../styles/admin/AdminModal.styles";
import { useForm } from "react-hook-form";
import { IModal } from "../../types/admin/Admin.types";

function withExceptionCapturing<S, T extends any[]>(fn: (...rest: T) => Promise<S>) {
  return (...args: T) => {
    fn(...args).catch((error) => {
      console.log('Unexpected error', error);
    });
  };
}

export default function ProductMakeModal({ setOnModal }: IModal) {
  // TODO react-hook-form 사용
  const { register,handleSubmit , setValue } = useForm();

  const onClickClose = () => {
    setOnModal(false);
  };

  const onValid = (data:any) => {
    console.log(data);
  };

  useEffect(() => {
    setValue("year", 0);
    setValue("month", 0);
    setValue("day", 0);
  }, []);

  return (
    <S.Overlay>
      <S.Modal onSubmit={withExceptionCapturing(handleSubmit(onValid))}>
        <S.ModalTitle>상품 등록</S.ModalTitle>
        <S.ModalContent>
          <S.ContentName>이름</S.ContentName>
          <S.ContentInput
            $width={270}
            type="text"
            {...register("name")}
            placeholder="홍길동"
          />
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>종류</S.ContentName>
          <S.ContentSelect>
            <S.ContentOption>패키지</S.ContentOption>
            <S.ContentOption>시설 이용</S.ContentOption>
          </S.ContentSelect>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>기간</S.ContentName>
          <S.InputContainer>
            <S.ContentInput
              $width={40}
              placeholder="0"
              type="number"
              {...register("year", {
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0
                },
              })}
            />
            <S.InputText>년</S.InputText>
            <S.ContentInput
              $width={40}
              placeholder="0"
              type="number"
              {...register("month", {
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0
                },
              })}
            />
            <S.InputText>월</S.InputText>
            <S.ContentInput
              $width={40}
              placeholder="0"
              type="number"
              {...register("day", {
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0
                },
              })}
            />
            <S.InputText>일</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>횟수</S.ContentName>
          <S.InputContainer>
            <S.ContentInput
              $width={150}
              placeholder="24"
              type="number"
              {...register("number")}
            />
            <S.InputText>회</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>가격</S.ContentName>
          <S.InputContainer>
            <S.ContentInput
              $width={250}
              placeholder="100000"
              type="number"
              {...register("price")}
            />
            <S.InputText>원</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        <S.ButtonContainer>
          <S.ModalButton>등록</S.ModalButton>
          <S.CloseButton
            onClick={() => {
              onClickClose();
            }}
          >
            취소
          </S.CloseButton>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
}
