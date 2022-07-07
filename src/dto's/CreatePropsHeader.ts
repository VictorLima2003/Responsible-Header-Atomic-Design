export type ButtomConfig = {
  buttonText: string;
  buttonBackground?: string;
  buttonBackgroundHover?: string;
  buttonColor?: string;
  buttonColorHover?: string;
  buttonFontSize: string;
};

export type MenuRoutes = {
  title: string;
  route: string;
};

export type MenuItemsConfig = {
  menuItemsColor: string;
  menuItemsColorHover: string | null;
  menuItemsFontSize: string;
};

export type MenuConfig = {
  menuItemsDefined: MenuRoutes[];
  menuBackground: string;
  menuItemsConfig: MenuItemsConfig;
  buttonColorHover?: string;
};

export type Props = {
  buttomConfig: ButtomConfig;
  menuConfig: MenuConfig;
};
