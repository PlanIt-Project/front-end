import { useEffect, useState } from "react";
import * as S from "../../styles/admin/AdminModal.styles";
import { useForm } from "react-hook-form";
import { IModal } from "../../types/admin/Admin.types";
import noImage from "../../assets/svg/icon_no-image.svg";

interface IBanner {
    name:string;
    banner:FileList | null;
    view: "Y" | "N";
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
  const { register, handleSubmit, watch } = useForm<IBanner>();
  const [bannerPreview, setBannerPreview] = useState<string>();
  const banner = watch("banner")
  const onClickClose = () => {
    setOnModal(false);
  };

  const onValid = (data: any) => {
    console.log(data);
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
            {...register("name")}
            placeholder="홍길동"
          />
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>배너 이미지</S.ContentName>
          <S.ContentLabel htmlFor="banner">
            {bannerPreview ? <S.ContentImage src={bannerPreview} alt="Image"/> : <S.NoImage src={noImage} alt="noImage" />}
          </S.ContentLabel>
          <S.ContentImageInput
            id="banner"
            type="file"
            accept="image/*"
            {...register("banner")}
          />
        </S.ModalContent>
        <S.ModalContent>
          <S.ContentName>노출 여부</S.ContentName>
          <S.ContentSelect {...register("view")}>
            <S.ContentOption>Y</S.ContentOption>
            <S.ContentOption>N</S.ContentOption>
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
