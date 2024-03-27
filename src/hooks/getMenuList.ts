import { IMemberData } from "../types/Login.types";

interface MenuFactory {
  createMenuList: () => Array<{ label: string; path: string }>;
}

class BasicMenuFactory implements MenuFactory {
  public createMenuList() {
    return [{ label: "PlanIt?", path: "/about" }];
  }
}

// UserMenuFactory 클래스
class UserMenuFactory implements MenuFactory {
  public createMenuList() {
    return [
      { label: "PlanIt?", path: "/about" },
      { label: "이용권", path: "/user/ticket/available" },
      { label: "스케줄", path: "/user/schedule" },
    ];
  }
}

// TrainerMenuFactory 클래스
class TrainerMenuFactory implements MenuFactory {
  public createMenuList() {
    return [
      { label: "PlanIt?", path: "/about" },
      { label: "스케줄", path: "/trainer/schedule" },
    ];
  }
}

// AdminMenuFactory 클래스
class AdminMenuFactory implements MenuFactory {
  public createMenuList() {
    return [
      { label: "계정 관리", path: "/admin/account" },
      { label: "트레이너 관리", path: "/admin/trainer" },
      { label: "배너 관리", path: "/admin/banner" },
      { label: "상품 관리", path: "/admin/product/1" },
      { label: "이용권 관리", path: "/admin/program" },
      { label: "승인 요청 관리", path: "/admin/adminRequest" },
    ];
  }
}

// getMenuList 함수
export const getMenuList = (user: IMemberData | null) => {
  let factory: MenuFactory;

  switch (user?.role) {
    case "MEMBER":
      factory = new UserMenuFactory();
      break;
    case "TRAINER":
      factory = new TrainerMenuFactory();
      break;
    case "ADMIN":
      factory = new AdminMenuFactory();
      break;
    default:
      factory = new BasicMenuFactory();
      break;
  }

  return factory.createMenuList();
};
