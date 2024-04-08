export const PRODUCT_NAMES = [
  {
    id: 1,
    value: "id",
  },
  {
    id: 2,
    value: "이름",
  },
  {
    id: 3,
    value: "종류",
  },
  {
    id: 4,
    value: "기간/횟수",
  },
  {
    id: 5,
    value: "가격",
  },
  {
    id: 6,
    value: "판매 여부",
  },
  {
    id: 7,
    value: "상품 삭제",
  },
];

export const PRODUCT_CONTENTS = [
  {
    id: 1,
    name: "그룹레슨 3개월",
    type: "패키지",
    period: "3개월",
    number: 24,
    price: 440000,
    saleOrNot: "판매중",
  },
  {
    id: 2,
    name: "개인레슨 6개월",
    type: "패키지",
    period: "6개월",
    number: 48,
    price: 1320000,
    saleOrNot: "판매중",
  },
  {
    id: 3,
    name: "헬스 이용권 3개월",
    type: "시설이용",
    period: "3개월",
    number: 0,
    price: 170000,
    saleOrNot: "판매중지",
  },
  {
    id: 4,
    name: "헬스 이용권 3개월",
    type: "시설이용",
    period: "3개월",
    number: 0,
    price: 170000,
    saleOrNot: "판매중지",
  },
  {
    id: 5,
    name: "헬스 이용권 3개월",
    type: "시설이용",
    period: "3개월",
    number: 0,
    price: 170000,
    saleOrNot: "판매중지",
  },
  {
    id: 6,
    name: "헬스 이용권 3개월",
    type: "시설이용",
    period: "3개월",
    number: 0,
    price: 170000,
    saleOrNot: "판매중지",
  },
  {
    id: 7,
    name: "헬스 이용권 3개월",
    type: "시설이용",
    period: "3개월",
    number: 0,
    price: 170000,
    saleOrNot: "판매중지",
  },
  {
    id: 8,
    name: "헬스 이용권 3개월",
    type: "시설이용",
    period: "3개월",
    number: 0,
    price: 170000,
    saleOrNot: "판매중지",
  },
  
];

export const ACCOUNT_NAMES = [
  {
    id: 1,
    value: "id",
  },
  {
    id: 2,
    value: "이름",
  },
  {
    id: 3,
    value: "이메일",
  },
  {
    id: 4,
    value: "출생년도",
  },
  {
    id: 5,
    value: "휴대폰 번호",
  },
  {
    id: 6,
    value: "성별",
  },
  {
    id: 7,
    value: "권한",
  },
  {
    id: 8,
    value: "계정권한",
  },
];

export const ACCOUNT_CONTENTS = [
  {
    id: 1,
    name: "홍길동",
    emailId: "abc@abc.com",
    birthday: "2000.01.01",
    phoneNumber: "010-1111-1111",
    gender: "남",
    permission: "유저",
  },
  {
    id: 2,
    name: "길동홍",
    emailId: "abc@abc.com",
    birthday: "2000.01.01",
    phoneNumber: "010-1111-1111",
    gender: "여",
    permission: "트레이너",
  },
]

export const TRAINER_NAMES = [
  {
    id: 1,
    value: "id",
  },
  {
    id: 2,
    value: "이름",
  },
  {
    id: 3,
    value: "이메일",
  },
  {
    id: 4,
    value: "출생년도",
  },
  {
    id: 5,
    value: "휴대폰 번호",
  },
  {
    id: 6,
    value: "경력",
  },
  {
    id: 7,
    value: "출퇴근시간 설정",
  },
];

export const TRAINER_CONTENTS = [
  {
    id: 1,
    name: "홍길동",
    emailId: "abc@abc.com",
    birthday: "2000.01.01",
    phoneNumber: "010-1111-1111",
    gender: "남",
  },
  {
    id: 2,
    name: "길동홍",
    emailId: "abc@abc.com",
    birthday: "2000.01.01",
    phoneNumber: "010-1111-1111",
    gender: "여",
  },
]

export const PROGRAM_NAMES = [
  {
    id: 1,
    value: "id",
  },
  {
    id: 2,
    value: "이름",
  },
  {
    id: 3,
    value: "남은 횟수",
  },
  {
    id: 4,
    value: "시작/종료 일자",
  },
  {
    id: 5,
    value: "정지/재시작 일자",
  },
  {
    id: 6,
    value: "이용권 상태",
  },
  {
    id: 7,
    value: "상태 설정",
  },
];

export const PROGRAM_CONTENTS = [
  {
    id: 1,
    name: "그룹레슨 3개월",
    remainNumber:10,
    startAt : "2024-03-20",
    endAt : "2024-06-24",
    suspendAt : "2024-05-01",
    resumeAt : "",
    status : "일시 정지",
  },
  
  
];

export const REQUEST_NAMES = [
  {
    id: 1,
    value: "id",
  },
  {
    id: 2,
    value: "등록 일자",
  },
  {
    id: 3,
    value: "상품명",
  },
  {
    id: 4,
    value: "회원",
  },
  {
    id: 5,
    value: "트레이너",
  },
  {
    id: 6,
    value: "결제 금액",
  },
  {
    id: 7,
    value: "상태",
  },
  {
    id: 8,
    value: "등록 설정",
  },
];

export const REQUEST_CONTENTS = [
  {
    id: 1,
    registrationAt:"2012-01-01",
    status:"승인 대기 중",
    totalPrice:140000,
    productName:"개인레슨 3개월",
    member:"홍길동",
    trainer:"길동홍"
  },
  {
    id: 2,
    registrationAt:"2012-01-01",
    status:"취소됨",
    totalPrice:280000,
    productName:"개인레슨 6개월",
    member:"홍길동",
    trainer:"길동홍"
  },
];

export const BANNER_NAMES = [
  {
    id: 1,
    value: "id",
  },
  {
    id: 2,
    value: "배너 제목",
  },
  {
    id: 3,
    value: "등록일자",
  },
  {
    id: 4,
    value: "노출 여부",
  },
  {
    id: 5,
    value: "배너 수정",
  },
];

export const BANNER_CONTENTS = [
  {
    id: 1,
    name:"오픈 이벤트",
    date:"2023-02-01",
    view:"Y"
  },
];