import * as styles from "./styles";

import { MenuConfig } from "../../dto's/CreatePropsHeader";

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
