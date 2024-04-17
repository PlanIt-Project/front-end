import { useForm } from "react-hook-form";
import {
  useMyPageInfomationStore,
  useMyPageToggleStore,
} from "../../stores/myPageStore";
import * as S from "../../styles/myPage/myPage.styles";
import { withExceptionCapturing } from "../../hooks/withExceptionCapturing";
import { useEffect, useState } from "react";
import { IModifyInfomationParams } from "../../types/myPage/MyPage.types";
import { modifyInfomation } from "../../hooks/queries/myPage/modifyInfomation";

interface IMyPageForm {
  name: string;
  year: number;
  month: number;
  day: number;
  number: string;
  address: string;
}

export default function ModifyForm() {
  const [params, setParams] = useState<IModifyInfomationParams>({
    name: "",
    phoneNumber: "",
    birth: "",
    address: "",
  });

  const { setToggle } = useMyPageToggleStore();
  const { infomation } = useMyPageInfomationStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IMyPageForm>();

  const MonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const DayData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const { mutate } = modifyInfomation(params);

  const onValid = (data: IMyPageForm) => {
    const birth = `${data.year}-${String(data.month).padStart(2, "0")}-${String(data.day).padStart(2, "0")}`;
    setParams({
      name: data.name,
      birth,
      address: data.address,
      phoneNumber: data.number,
    });
    mutate();
  };

  const onClickButton = () => {
    setToggle(true);
  };

  useEffect(() => {
    const birth = infomation.birth.split("-");
    setValue("name", infomation.name);
    setValue("year", Number(birth[0]));
    setValue("month", Number(birth[1]));
    setValue("day", Number(birth[2]));
    setValue("number", infomation.phone_number);
    setValue("address", infomation.address);
  }, []);
  return (
    <S.ModifyFormContainer
      onSubmit={withExceptionCapturing(handleSubmit(onValid))}
    >
      <S.Content>
        <S.Name>이름</S.Name>
        <S.Input
          $width={250}
          type="text"
          {...register("name", { required: "이름을 입력해주세요" })}
        />
      </S.Content>
      {errors.name && <S.ErrorMsg>{errors.name.message}</S.ErrorMsg>}
      <S.Content>
        <S.Name>생년월일</S.Name>
        <S.InputContainer>
          <S.Input
            $width={80}
            type="number"
            {...register("year", { required: "출생년도를 입력해주세요" })}
          />
          <S.InputText>년</S.InputText>
          <S.Select $width={60} {...register("month")}>
            {MonthData.map((month) => (
              <S.Option key={month} value={month}>
                {month}
              </S.Option>
            ))}
          </S.Select>
          <S.InputText>월</S.InputText>
          <S.Select $width={60} {...register("day")}>
            {DayData.map((day) => (
              <S.Option key={day} value={day}>
                {day}
              </S.Option>
            ))}
          </S.Select>
          <S.InputText>일</S.InputText>
        </S.InputContainer>
      </S.Content>
      {errors.year && <S.ErrorMsg>{errors.year.message}</S.ErrorMsg>}
      <S.Content>
        <S.Name>핸드폰 번호</S.Name>
        <S.Input
          $width={250}
          type="text"
          {...register("number", {
            pattern: {
              value: /^[0-9]*$/,
              message: "- 없이 입력해주세요",
            },
          })}
        />
      </S.Content>
      {errors.number && <S.ErrorMsg>{errors.number.message}</S.ErrorMsg>}
      <S.Content>
        <S.Name>주소</S.Name>
        <S.Input
          $width={250}
          type="text"
          {...register("address", { required: "주소를 입력해주세요" })}
        />
      </S.Content>
      {errors.address && <S.ErrorMsg>{errors.address.message}</S.ErrorMsg>}
      <S.ButtonContainer>
        <S.Button>수정하기</S.Button>
        <S.CloseButton onClick={onClickButton}>취소하기</S.CloseButton>
      </S.ButtonContainer>
    </S.ModifyFormContainer>
  );
}
