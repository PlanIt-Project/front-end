import * as S from "../styles/CommonSelectBox.styles";
import { ICommonSelectBoxProps } from "../types/CommonSelectBox.types";
import DownArrow from "../assets/icon_down-arrow.png";
import UpArrow from "../assets/icon_up-arrow.png";
import { useEffect, useState } from "react";

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
  const [selectedOptionName, setSelectedOptionName] = useState("");

  useEffect(() => {
    setSelectedOptionName(
      optionList.find((option) => option.id === selectedOption)?.name || "",
    );
  }, [selectedOption, optionList]);

  const handleOpenSelectBox = () => {
    setIsSelectBoxOpen(!isSelectBoxOpen);
  };

  const handleSelectValue = (value: number) => {
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
      <p>{selectedOptionName}</p>
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
              key={option.id}
              $height={height}
              onClick={() => {
                handleSelectValue(option.id);
              }}
            >
              {option.name}
            </S.Option>
          ))}
        </S.OptionContainer>
      )}
    </S.SelectBox>
  );
}
