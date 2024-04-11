import * as S from "../../styles/admin/AdminModal.styles";
import { FieldErrors, useForm } from "react-hook-form";
import { IModal } from "../../types/admin/Admin.types";
import { useAdminTrainerSpecificScheduleStore } from "../../stores/adminTrainerStore";
import { useEffect, useState } from "react";
import { modifySchedule } from "../../hooks/queries/admin/modifySchedule";
import { IModifyScheduleParams } from "../../types/admin/Admin.trainer.types";

function withExceptionCapturing<S, T extends any[]>(
  fn: (...rest: T) => Promise<S>,
) {
  return (...args: T) => {
    fn(...args).catch((error) => {
      console.log("Unexpected error", error);
    });
  };
}

interface IScheduleForm {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export default function TrainerModify({ setOnModal }: IModal) {
  const [params, setParams] = useState<IModifyScheduleParams>({
    startAt: "",
    endAt: "",
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IScheduleForm>();
  const { specificSchedule } = useAdminTrainerSpecificScheduleStore();

  const { mutate } = modifySchedule(
    specificSchedule.schedule_id,
    params,
    setOnModal,
  );

  const onClickClose = () => {
    setOnModal(false);
  };

  const startError = (errors: FieldErrors<IScheduleForm>) => {
    if (errors.startHour) {
      return <S.ErrorMsg>{errors.startHour.message}</S.ErrorMsg>;
    } else if (errors.startMinute) {
      return <S.ErrorMsg>{errors.startMinute.message}</S.ErrorMsg>;
    }
  };

  const endError = (errors: FieldErrors<IScheduleForm>) => {
    if (errors.endHour) {
      return <S.ErrorMsg>{errors.endHour.message}</S.ErrorMsg>;
    } else if (errors.endMinute) {
      return <S.ErrorMsg>{errors.endMinute.message}</S.ErrorMsg>;
    }
  };

  const onValid = (data: IScheduleForm) => {
    const startAt = `${String(data.startHour).padStart(2, "0")}:${String(data.startMinute).padStart(2, "0")}`;
    const endAt = `${String(data.endHour).padStart(2, "0")}:${String(data.endMinute).padStart(2, "0")}`;
    setParams({ startAt, endAt });
    mutate();
  };

  useEffect(() => {
    const startTime = [
      Number(specificSchedule.startAt.slice(0, 2)),
      Number(specificSchedule.startAt.slice(3, 5)),
    ];
    const endTime = [
      Number(specificSchedule.endAt.slice(0, 2)),
      Number(specificSchedule.endAt.slice(3, 5)),
    ];
    setValue("startHour", startTime[0]);
    setValue("startMinute", startTime[1]);
    setValue("endHour", endTime[0]);
    setValue("endMinute", endTime[1]);
  }, [specificSchedule]);

  return (
    <S.Overlay>
      <S.Modal
        $width={600}
        onSubmit={withExceptionCapturing(handleSubmit(onValid))}
      >
        <S.ModalTitle>출퇴근시간 수정</S.ModalTitle>
        <S.ModalContent>
          <S.ContentName>출근</S.ContentName>
          <S.ContentInput
            $width={80}
            type="number"
            {...register("startHour", {
              required: "몇시에 출근하는지 입력해주세요",
              min: {
                value: 6,
                message: "6이상 24이하의 시간을 입력해주세요",
              },
              max: {
                value: 24,
                message: "6이상 24 이하의 시간을 입력해주세요",
              },
            })}
          />
          <S.InputText>:</S.InputText>
          <S.ContentInput
            $width={80}
            type="number"
            {...register("startMinute", {
              required: "몇분에 출근하는지 입력해주세요",
              min: {
                value: 0,
                message: "0이상 59 이하의 분을 입력해주세요",
              },
              max: {
                value: 59,
                message: "0이상 59 이하의 분을 입력해주세요",
              },
            })}
          />
        </S.ModalContent>
        {startError(errors)}
        <S.ModalContent>
          <S.ContentName>퇴근</S.ContentName>
          <S.ContentInput
            $width={80}
            type="number"
            {...register("endHour", {
              required: "몇시에 퇴근하는지 입력해주세요",
              min: {
                value: 6,
                message: "6이상 24이하의 시간을 입력해주세요",
              },
              max: {
                value: 24,
                message: "6이상 24 이하의 시간을 입력해주세요",
              },
            })}
          />
          <S.InputText>:</S.InputText>
          <S.ContentInput
            $width={80}
            type="number"
            {...register("endMinute", {
              required: "몇분에 퇴근하는지 입력해주세요",
              min: {
                value: 0,
                message: "0이상 59이하의 분을 입력해주세요",
              },
              max: {
                value: 59,
                message: "0이상 59 이하의 분을 입력해주세요",
              },
            })}
          />
        </S.ModalContent>
        {endError(errors)}
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
