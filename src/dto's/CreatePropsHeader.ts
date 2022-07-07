type ButtomConfig = {
  buttonText: string;
  buttonBackground?: string;
  buttonBackgroundHover?: string;
  buttonColor?: string;
  buttonColorHover?: string;
  buttonFontSize: string;
};

type MenuRoutes = {
  title: string;
  route: string;
};

type MenuItemsConfig = {
  menuItemsColor: string;
  menuItemsColorHover: string | null;
  menuItemsFontSize: string;
};

type MenuConfig = {
  menuItemsDefined: MenuRoutes[];
  menuBackground: string;
  menuItemsConfig: MenuItemsConfig;
  buttonColorHover?: string;
};

export type Props = {
  buttomConfig: ButtomConfig;
  menuConfig: MenuConfig;
};
