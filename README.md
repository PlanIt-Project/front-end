## 📌 헬스장 회원 관리 서비스 :  PlanIT

#### 프로젝트 기간 : 2024년 3월 ~ 2024년 4월

### [🌎 웹사이트 바로가기](https://plan-it-jkkkp.netlify.app/)

<br />

## 📌 서비스 소개

헬스장 내의 회원 및 트레이너들이 원만하게 PT와  맴버쉽을 사용할 수 있도록 해주는 프로젝트 입니다.

이 프로젝트를 통해 헬스장 회원은 프로그램 구매와 트레이너 예약을 할 수 있고,

트레이너는 자신의 스케줄과 예약 내역을 확인 할 수 있습니다.

<br>

## 📌 시스템 아키텍쳐

<img width="500" src="/src/assets/아키텍처.png" />

## 📌 기술 스택

| **Language** |

JavaScript, TypeScript

| **Frontend** |

React, StyledComponents, Zustand, React-query

| **Communication** |

Figma, Github, Discord

| **Release** |

Frontend : Netlify
<br/>


## 📌 서비스 기능 명세

### 회원 권한
1. 사용자는 회원가입을 통해 회원이 될 수 있다.
2. 사용자는 자신이 등록한 PT권과 맴버쉽 목록을 확인 할 수 있다.
3. 사용자는 자신이 오프라인에서 구매한 PT권과 맴버쉽을 등록할 수 있다.
4. 사용자는 PT를 등록 했다면 날짜에 따른 자신의 스케줄을 확인 할 수 있다.
5. 사용자는 PT를 등록 했다면 트레이너가 가능한 시간에 PT 예약을 잡을 수 있다.

### 트레이너 권한
1. 사용자는 회원가입을 통해 트레이너가 될 수 있다.
2. 사용자는 자신에게 예약된 PT 스케줄을 확인 할 수 있다.
3. 사용자는 날짜별로 자신이 가능한 스케줄을 설정하여 PT 예약을 받을 수 있다.

### 어드민 권한
1. 사용자는 등록된 회원과 트레이너의 목록을 볼 수 있다.
2. 사용자는 회원의 권한을 트레이너로 변경할 수 있다.
3. 사용자는 트레이너의 출퇴근 시간을 설정할 수 있다.
4. 사용자는 메인 페이지의 베너 목록을 확인 할 수 있다.
5. 사용자는 등록된 배너를 수정하거나 새로운 배너를 추가 할 수 있다.
6. 사용자는 현재 판매중인 상품 목록을 확인 할 수 있다.
7. 사용자는 새로운 상품을 추가 하거나 삭제 할 수 있다.
8. 사용자는 등록된 이용권 목록을 확인 할 수 있다.
9. 사용자는 이용권의 상태를 변경 할 수 있다.
10. 사용자는 회원이 등록한 이용권을 승인하여 회원이 사용할 수 있게 할 수 있다.

## 📌 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어를 수행

```bash
git clone <레포지토리 주소>
```

2. 클론한 디렉토리에서 frontend, backend디렉토리로 들어가 아래 명령어를 통해 각각각 필요한 module 설치

```bash
npm install
```

<!-- 3. backend에서 필요한 `.env` 설정

```bash
PORT=<포트번호>
MONGODB_URI=<몽고db url>
ACCESS_SECRET_KEY=<key>
REFRESH_SECRET_KEY=<key>
S3_ACCESS_KEY=<key>
S3_SECRET_ACCESS_KEY=<key>
S3_REGION=<key>
S3_BUCKET_NAME=<key>
``` -->

4. frontend에서 필요한 `.env` 설정

```bash
REACT_APP_API_URL=<백엔드url>
```

4. express 앱과 react앱을 실행

```bash
npm run start
```

<br>

## 📌 프론트엔드 팀 구성원

<table width="500">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>이름</th>
        <td width="200" align="center">전혜린</td>
        <td width="200" align="center">김민준</td>
    </tr>
    <tr>
        <th>역할</th>
        <td width="250" align="center">
            로그인, 회원가입&탈퇴, <br>회원 이용권 확인, 등록 
            <br>회원 스케줄 확인, 예약
            <br>트레이너 스케줄 확인, 예약
        </td>
        <td width="250" align="center">
            마이페이지 확인, 수정
            <br> 어드민 계정 관리
            <br> 어드민 트레이너 관리
            <br> 어드민 배너 관리
            <br> 어드민 상품 관리
            <br> 어드민 이용권 관리
            <br> 어드민 승인 요청 관리
        </td>
    </tr>
    <tr>
    </tbody>
</table>

<br>