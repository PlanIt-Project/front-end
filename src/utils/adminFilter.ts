export const programStatusToKor = (status: string): string => {
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

export const requestStatusToKor = (status: string): string => {
  let kor = "";
  switch (status) {
    case "ACCEPTED":
      kor = "승인됨";
      break;
    case "PENDING":
      kor = "승인 대기 중";
      break;
    case "DECLINED":
      kor = "취소됨";
      break;
    case "REFUND":
      kor = "환불";
      break;
    default:
      kor = "알 수 없음";
      break;
  }
  return kor;
};

export const skipNull = (content: string, type: string): string => {
  if (content === null || content === "")
    return type === "name" ? "없음" : "미정";
  else return content;
};

export const typeToKor = (type: "PT" | "MEMBERSHIP"): string => {
  if (type === "MEMBERSHIP") return "맴버쉽";
  else return "PT";
};

export const sellingTypeToKor = (sellingType: string): string => {
  if (sellingType === "SELLING") return "판매중";
  else return "판매중지";
};

export const parsePeriod = (period: string): string => {
  const regex = /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?/;
  const matches = period.match(regex);

  if (!matches) {
    return "Invalid period format";
  }

  const [years, months, days] = matches
    .slice(1)
    .map((value) => parseInt(value || "0", 10));
  const result = [];
  if (years) {
    result.push(`${years}년`);
  }

  if (months) {
    result.push(`${months}개월`);
  }

  if (days) {
    result.push(`${days}일`);
  }

  return result.join(" ");
};

export const weekToKor = (
  week: "Mon" | "Tue" | "wed" | "thu" | "fri" | "sat" | "sun",
): string => {
  let kor = "";
  switch (week) {
    case "Mon":
      kor = "월";
      break;
    case "Tue":
      kor = "화";
      break;
    case "wed":
      kor = "수";
      break;
    case "thu":
      kor = "목";
      break;
    case "fri":
      kor = "금";
      break;
    case "sat":
      kor = "토";
      break;
    case "sun":
      kor = "일";
      break;
    default:
      kor = "알 수 없음";
      break;
  }
  return kor;
};
