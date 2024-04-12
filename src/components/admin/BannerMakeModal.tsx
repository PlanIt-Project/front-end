import { useEffect, useState } from "react";
import * as S from "../../styles/admin/AdminModal.styles";
import { useForm } from "react-hook-form";
import { IModal } from "../../types/admin/Admin.types";
import noImage from "../../assets/svg/icon_no-image.svg";
import { makeBanner } from "../../hooks/queries/admin/makeBanner";

interface IAdminBannerForm {
  name: string;
  banner: FileList | null;
  startYear: number;
  startMonth: number;
  startDay: number;
  endYear: number;
  endMonth: number;
  endDay: number;
}

function withExceptionCapturing<S, T extends any[]>(
  fn: (...rest: T) => Promise<S>,
) {
  return (...args: T) => {
    fn(...args).catch((error) => {
      console.log("Unexpected error", error);
    });
  };
}

export default function BannerMakeModal({ setOnModal }: IModal) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAdminBannerForm>();
  const [bannerPreview, setBannerPreview] = useState<string>();
  const [form, setForm] = useState<FormData>(new FormData());
  const MonthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const DayData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const banner = watch("banner");

  const { mutate } = makeBanner(form, setOnModal);

  const onClickClose = () => {
    setOnModal(false);
  };

  const onValid = (data: IAdminBannerForm) => {
    if (data.banner) {
      const startAt = `${data.startYear}-${String(data.startMonth).padStart(2, "0")}-${String(data.startDay).padStart(2, "0")}`;
      const endAt = `${data.endYear}-${String(data.endMonth).padStart(2, "0")}-${String(data.endDay).padStart(2, "0")}`;
      const newForm = new FormData();
      newForm.append("title", data.name);
      newForm.append("startAt", startAt);
      newForm.append("endAt", endAt);
      newForm.append("image", data.banner[0]);
      setForm(newForm);
      mutate();
    }
  };

  

  useEffect(() => {
    if (banner && banner.length > 0) {
      const file = banner[0];
      setBannerPreview(URL.createObjectURL(file));
    }
  }, [banner]);

  return (
    <S.Overlay>
      <S.Modal
        $width={730}
        onSubmit={withExceptionCapturing(handleSubmit(onValid))}
      >
        <S.ModalTitle>배너 등록</S.ModalTitle>
        <S.ModalContent>
          <S.ContentName>이름</S.ContentName>
          <S.ContentInput
            $width={270}
            type="text"
            {...register("name", { required: "배너 이름을 입력 해주세요" })}
            placeholder="홍길동"
          />
        </S.ModalContent>
        {errors.name && <S.ErrorMsg>{errors.name.message}</S.ErrorMsg>}
        <S.ModalContent>
          <S.ContentName>배너 이미지</S.ContentName>
          <S.ContentLabel htmlFor="banner">
            {bannerPreview ? (
              <S.ContentImage src={bannerPreview} alt="Image" />
            ) : (
              <S.NoImage src={noImage} alt="noImage" />
            )}
          </S.ContentLabel>
          <S.ContentImageInput
            id="banner"
            type="file"
            accept="image/*"
            {...register("banner", { required: "배너 사진을 입력해주세요" })}
          />
        </S.ModalContent>
        {errors.banner && <S.ErrorMsg>{errors.banner.message}</S.ErrorMsg>}
        <S.ModalContent>
          <S.ContentName>노출 시작일</S.ContentName>
          <S.ContentSelect $width={100} {...register("startYear")}>
            <S.ContentOption value="2024">2024</S.ContentOption>
            <S.ContentOption value="2025">2025</S.ContentOption>
          </S.ContentSelect>
          <S.InputText>-</S.InputText>
          <S.ContentSelect $width={70} {...register("startMonth")}>
            {MonthData.map((month) => (
              <S.ContentOption key={month} value={month}>
                {month}
              </S.ContentOption>
            ))}
          </S.ContentSelect>
          <S.InputText>-</S.InputText>
          <S.ContentSelect $width={70} {...register("startDay")}>
            {DayData.map((day) => (
              <S.ContentOption key={day} value={day}>
                {day}
              </S.ContentOption>
            ))}
          </S.ContentSelect>
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>노출 종료일</S.ContentName>
          <S.ContentSelect $width={100} {...register("endYear")}>
            <S.ContentOption value="2024">2024</S.ContentOption>
            <S.ContentOption value="2025">2025</S.ContentOption>
          </S.ContentSelect>
          <S.InputText>-</S.InputText>
          <S.ContentSelect $width={70} {...register("endMonth")}>
            {MonthData.map((month) => (
              <S.ContentOption key={month} value={month}>
                {month}
              </S.ContentOption>
            ))}
          </S.ContentSelect>
          <S.InputText>-</S.InputText>
          <S.ContentSelect $width={70} {...register("endDay")}>
            {DayData.map((day) => (
              <S.ContentOption key={day} value={day}>
                {day}
              </S.ContentOption>
            ))}
          </S.ContentSelect>
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
