export const statusToKor = (status: string): string => {
    let kor = "";
    switch (status) {
      case "NOT_STARTED":
        kor = "등록 전";
        break;
      case "IN_PROGRESS":
        kor = "진행 중";
        break;
      case "SUSPEND":
        kor = "일시 정지";
        break;
      case "REFUND":
        kor = "환불";
        break;
      case "EXPIRED":
        kor = "만료";
        break;
      default:
        kor = "알 수 없음";
        break;
    }
    return kor;
  };

  export const skipNull = (date: string): string => {
    if (date === null) return "미정";
    else return date;
  };