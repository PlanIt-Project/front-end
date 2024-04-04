import { useEffect, useState } from "react";
import * as S from "../../styles/admin/AdminModal.styles";
import { FieldErrors, useForm } from "react-hook-form";
import { IModal } from "../../types/admin/Admin.types";
import {
  IAdminProductMakeForm,
  IMakeProductParams,
} from "../../types/admin/Admin.product.types";
import { makeProduct } from "../../hooks/queries/admin/makeProduct";

function withExceptionCapturing<S, T extends any[]>(
  fn: (...rest: T) => Promise<S>,
) {
  return (...args: T) => {
    fn(...args).catch((error) => {
      console.log("Unexpected error", error);
    });
  };
}

export default function ProductMakeModal({ setOnModal }: IModal) {

  // TODO 'P0Y4M0D' 월을 입력시에 년으로 치환되고 달을 입력 시에 월로 치환 년으로 입력 시에 아무것도 표시되지 않음
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IAdminProductMakeForm>();
  const [params, setParams] = useState<IMakeProductParams>({
    name: "",
    period: "",
    number: "",
    price: 0,
    type: "PT",
  });

  const { mutate,data } = makeProduct(params, setOnModal);

  const onClickClose = () => {
    setOnModal(false);
  };

  const onValid = (form: IAdminProductMakeForm) => {
    const period = `P${Number(form.year)}Y${Number(form.month)}M${Number(form.day)}D`;
    setParams({
      name: form.name,
      period,
      number: form.number.toString(),
      price: form.number,
      type: form.type,
    });
    mutate();
    console.log(data)
  };

  const periodError = (errors: FieldErrors<IAdminProductMakeForm>) => {
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
    setValue("number", 0);
    setValue("price", 0);
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
            {...register("name", { required: "상품 이름을 입력 해주세요" })}
            placeholder="홍길동"
          />
        </S.ModalContent>
        {errors.name && <S.ErrorMsg>{errors.name.message}</S.ErrorMsg>}
        <S.ModalContent>
          <S.ContentName>종류</S.ContentName>
          <S.ContentSelect {...register("type")}>
            <S.ContentOption value="PT">PT</S.ContentOption>
            <S.ContentOption value="MEMBERSHIP">맴버쉽</S.ContentOption>
          </S.ContentSelect>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>기간</S.ContentName>
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
          <S.ContentName>횟수</S.ContentName>
          <S.InputContainer>
            <S.ContentInput
              $width={150}
              type="number"
              {...register("number", {
                required: "횟수가 없다면 0을 입력 해주세요",
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0,
                },
              })}
            />
            <S.InputText>회</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        {errors.number && <S.ErrorMsg>{errors.number.message}</S.ErrorMsg>}
        <S.ModalContent>
          <S.ContentName>가격</S.ContentName>
          <S.InputContainer>
            <S.ContentInput
              $width={250}
              type="number"
              {...register("price", {
                required: "가격을 입력해주세요",
                min: {
                  message: "0 이하의 숫자는 입력할 수 없습니다",
                  value: 0,
                },
              })}
            />
            <S.InputText>원</S.InputText>
          </S.InputContainer>
        </S.ModalContent>
        {errors.price && <S.ErrorMsg>{errors.price.message}</S.ErrorMsg>}
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
