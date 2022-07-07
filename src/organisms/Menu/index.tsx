import * as styles from "./styles";

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
  menuBackground?: string;
  menuItemsConfig: MenuItemsConfig;
  buttonColorHover?: string;
};

type Props = {
  props: MenuConfig;
};

function Menu(props: Props) {
  return (
    <styles.MenuList>
      {props.props.menuItemsDefined.map((item) => (
        <styles.ItemList color={props.props.menuItemsConfig.menuItemsColor}>
          <a href={item.route}>{item.title}</a>
        </styles.ItemList>
      ))}
    </styles.MenuList>
  );
}

export default Menu;
