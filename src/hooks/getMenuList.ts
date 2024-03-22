interface MenuFactory {
  createMenuList: () => Array<{ label: string; path: string }>;
}

// UserMenuFactory 클래스
class UserMenuFactory implements MenuFactory {
  public createMenuList() {
    return [
      { label: "PlanIt?", path: "/about" },
      { label: "이용권", path: "/user/ticket" },
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
export const getMenuList = (login: any) => {
  let factory: MenuFactory;

  switch (login.user) {
    case "user":
      factory = new UserMenuFactory();
      break;
    case "trainer":
      factory = new TrainerMenuFactory();
      break;
    case "admin":
      factory = new AdminMenuFactory();
      break;
    default:
      throw new Error("유저 타입이 없습니다.");
  }

  return factory.createMenuList();
};
