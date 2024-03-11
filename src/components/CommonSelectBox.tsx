import * as S from "../styles/CommonSelectBox.styles";
import { ICommonSelectBoxProps } from "../types/CommonSelectBox.types";
import DownArrow from "../assets/icon_down-arrow.png";
import UpArrow from "../assets/icon_up-arrow.png";

export default function CommonSelectBox({
  selectBoxRef,
  isSelectBoxOpen,
  setIsSelectBoxOpen,
  selectedOption,
  setSelectedOption,
  optionList,
  width,
  height,
}: ICommonSelectBoxProps) {
  const handleOpenSelectBox = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  };

  const handleSelectValue = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <S.SelectBox
      ref={selectBoxRef}
      $isSelectBoxOpen={isSelectBoxOpen}
      $width={width}
      $height={height}
      onClick={handleOpenSelectBox}
    >
      <p>{selectedOption}</p>
      <S.ArrowIcon>
        <img
          src={isSelectBoxOpen ? UpArrow : DownArrow}
          alt="selectBox 화살표"
        />
      </S.ArrowIcon>

      {isSelectBoxOpen && (
        <S.OptionContainer $isSelectBoxOpen={isSelectBoxOpen} $width={width}>
          {optionList.map((option) => (
            <S.Option
              key={option.value}
              $height={height}
              onClick={() => {
                handleSelectValue(option.value);
              }}
            >
              {option.label}
            </S.Option>
          ))}
        </S.OptionContainer>
      )}
    </S.SelectBox>
  );
}
