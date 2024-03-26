import { useForm } from "react-hook-form";
import * as S from "../../styles/admin/AdminModal.styles";
import { withExceptionCapturing } from "../../hooks/withExceptionCapturing";

export default function TrainerModal() {
  const { handleSubmit} = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <S.Overlay>
      <S.Modal onSubmit={withExceptionCapturing(handleSubmit(onValid))}>
        <S.ContentName>출퇴근시간 설정</S.ContentName>
      </S.Modal>
    </S.Overlay>
  );
}
