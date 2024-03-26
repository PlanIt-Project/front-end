import { useForm } from "react-hook-form";
import * as S from "../../styles/admin/AdminModal.styles";
import { withExceptionCapturing } from "../../hooks/withExceptionCapturing";
import { IModal } from "../../types/admin/Admin.types";

export default function TrainerModal({ setOnModal }: IModal) {
  const { register, handleSubmit } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  const onClickClose = () => {
    setOnModal(false);
  };
  return (
    <S.Overlay>
      <S.Modal onSubmit={withExceptionCapturing(handleSubmit(onValid))}>
        <S.ModalTitle>출퇴근시간 설정</S.ModalTitle>
        <S.ModalGrid>
          <S.ContentName>요일</S.ContentName>
          <S.ContentName>출근시간</S.ContentName>
          <S.ContentName>퇴근시간</S.ContentName>
          <S.ContentName>월</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("mondayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("mondayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
          <S.ContentName>화</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("tuesdayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("tuesdayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
          <S.ContentName>수</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("wednesdayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("wednesdayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
          <S.ContentName>목</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("thursdayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("thursdayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
          <S.ContentName>금</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("fridayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("fridayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
          <S.ContentName>토</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("saturdayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("saturdayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
          <S.ContentName>일</S.ContentName>
          <S.ContentInput
            $width={60}
            placeholder="9"
            type="number"
            {...register("sundayGo", {
              min: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 9,
              },
              max: {
                message: "9이상 18 이하의 시간을 입력 해주세요",
                value: 18,
              },
            })}
          />
          <S.ContentInput
            $width={60}
            placeholder="18"
            type="number"
            {...register("sundayLeave", {
              min: {
                message: "0 이하의 숫자는 입력할 수 없습니다",
                value: 0,
              },
            })}
          />
        </S.ModalGrid>
        <S.ButtonContainer>
          <S.ModalButton>설정</S.ModalButton>
          <S.CloseButton
            onClick={onClickClose}
          >
            취소
          </S.CloseButton>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
}
