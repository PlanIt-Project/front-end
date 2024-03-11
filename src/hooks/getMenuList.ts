// TODO login, menuList type 지정 필요

export class MenuFactory {
  baseMenu = [{ label: "PlanIt?", path: "/about" }];

  public createMenuList(login: any) {
    let menu: any = [];

    if (login.user === "user") {
      menu = [
        {
          label: "이용권",
          path: "/user/ticket",
        },
        {
          label: "스케줄",
          path: "/user/schedule",
        },
      ];
    }

    if (login.user === "trainer") {
      menu = [
        {
          label: "스케줄",
          path: "/trainer/schedule",
        },
      ];
    }

    if (login.user === "admin") {
      menu = [
        {
          label: "신규 계정 관리",
          path: "/admin/account",
        },
        {
          label: "트레이너 관리",
          path: "/admin/trainer",
        },
        {
          label: "배너 관리",
          path: "/admin/banner",
        },
      ];
    }

    return [...this.baseMenu, ...menu];
  }
}

export const getMenuList = (login: any) => {
  const factory = new MenuFactory();
  return factory.createMenuList(login);
};
