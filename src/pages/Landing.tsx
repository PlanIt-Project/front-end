import { useEffect, useRef, useState } from "react";
import CommonSelectBox from "../components/CommonSelectBox";
import { CommonInput } from "../styles/globalStyles";
import clickOutside from "../utils/clickOutside";

export default function Landing() {
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("test1");

  const selectBoxRef = useRef(null);

  const optionList = [
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" },
  ];

  useEffect(() => {
    clickOutside(isSelectBoxOpen, setIsSelectBoxOpen, selectBoxRef);
  }, [isSelectBoxOpen]);

  return (
    <div style={{ padding: "20px" }}>
      랜딩페이지
      <CommonSelectBox
        selectBoxRef={selectBoxRef}
        isSelectBoxOpen={isSelectBoxOpen}
        setIsSelectBoxOpen={setIsSelectBoxOpen}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        optionList={optionList}
      />
      <CommonInput />
    </div>
  );
}
