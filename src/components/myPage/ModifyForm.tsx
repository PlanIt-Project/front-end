import { useForm } from "react-hook-form";
import { useMyPageToggleStore } from "../../stores/myPageStore";
import * as S from "../../styles/myPage/myPage.styles";
import { withExceptionCapturing } from "../../hooks/withExceptionCapturing";

interface IMyPageForm {
  name: string;
  year: number;
  month: number;
  day: number;
  number: string;
  address: string;
}

export default function ModifyForm() {
  const { setToggle } = useMyPageToggleStore();

  const { register, handleSubmit } = useForm<IMyPageForm>();

  const MonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const DayData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const onValid = (data: IMyPageForm) => {
    console.log(data);
  };

  const onClickButton = () => {
    setToggle(true);
  };
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
      <S.Content>
        <S.Name>핸드폰 번호</S.Name>
        <S.Input $width={250} type="text" {...register("number")} />
      </S.Content>
      <S.Content>
        <S.Name>주소</S.Name>
        <S.Input $width={250} type="text" {...register("address")} />
      </S.Content>
      <S.ButtonContainer>
        <S.Button>수정하기</S.Button>
        <S.CloseButton onClick={onClickButton}>취소하기</S.CloseButton>
      </S.ButtonContainer>
    </S.ModifyFormContainer>
  );
}
