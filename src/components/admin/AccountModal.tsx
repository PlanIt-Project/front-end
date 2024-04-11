import { FieldErrors, useForm } from "react-hook-form";
import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";
import { useEffect, useState } from "react";
import { transformToTrainer } from "../../hooks/queries/admin/transformToTrainer";

function withExceptionCapturing<S, T extends any[]>(
  fn: (...rest: T) => Promise<S>,
) {
  return (...args: T) => {
    fn(...args).catch((error) => {
      console.log("Unexpected error", error);
    });
  };
}

interface IAccountForm {
  year: number;
  month: number;
  day: number;
  trainerMessage: string;
}

export default function AccountModal({ setOnModal, id }: IModal) {
  const [params, setParams] = useState({
    career: "",
    trainerMessage: "",
  });
  const { register, handleSubmit, setValue, formState: { errors }, } = useForm<IAccountForm>();

  const { mutate } = transformToTrainer(
    Number(id),
    params.career,
    params.trainerMessage,
    setOnModal,
  );

  const onValid = (data: IAccountForm) => {
    const career = `P${data.year}Y${data.month}M${data.day}D`;
    setParams({ career, trainerMessage: data.trainerMessage });
    mutate();
  };

  const onClickClose = () => {
    setOnModal(false);
  };

  const periodError = (errors: FieldErrors<IAccountForm>) => {
    if (errors.year) {
      return <S.ErrorMsg>{errors.year.message}</S.ErrorMsg>;
    } else if (errors.month) {
      return <S.ErrorMsg>{errors.month.message}</S.ErrorMsg>;
    } else if (errors.day) {
      return <S.ErrorMsg>{errors.day.message}</S.ErrorMsg>;
    }
  };

  useEffect(() => {
    setValue("year", 0);
    setValue("month", 0);
    setValue("day", 0);
  }, []);


  return (
    <S.Overlay>
      <S.Modal onSubmit={withExceptionCapturing(handleSubmit(onValid))}>
        <S.ContentName>계정 권한 설정</S.ContentName>
        <S.ModalContent>
          <S.ContentName>경력</S.ContentName>
          <S.InputContainer>
            <S.ContentInput
              $width={40}
              type="number"
              {...register("year", {
                required: "기간이 없다면 0을 입력 해주세요",
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0,
                },
              })}
            />
            <S.InputText>년</S.InputText>
            <S.ContentInput
              $width={40}
              type="number"
              {...register("month", {
                required: "기간이 없다면 0을 입력 해주세요",
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0,
                },
              })}
            />
            <S.InputText>월</S.InputText>
            <S.ContentInput
              $width={40}
              type="number"
              {...register("day", {
                required: "기간이 없다면 0을 입력 해주세요",
                min: {
                  message: "0 미만의 숫자는 입력할 수 없습니다",
                  value: 0,
                },
              })}
            />
            <S.InputText>일</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        {periodError(errors)}
        <S.ModalContent>
          <S.ContentName>메세지</S.ContentName>
          <S.ContentTextArea {...register("trainerMessage")} />
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
