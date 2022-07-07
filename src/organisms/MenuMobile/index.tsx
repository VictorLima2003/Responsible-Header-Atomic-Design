import React, { FunctionComponent } from "react";
import { IoClose } from "react-icons/io5";
import { Container } from "./styles";

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

type Props = {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  props: MenuConfig;
};

const MenuMobile: FunctionComponent<Props> = ({
  menuIsVisible,
  setMenuIsVisible,
  props,
}) => {
  return (
    <Container isVisible={menuIsVisible} props={props}>
      <IoClose size={35} onClick={() => setMenuIsVisible(false)} />
      <nav>
        {props.menuItemsDefined.map((item) => (
          <a href={item.route}>{item.title}</a>
        ))}
      </nav>
    </Container>
  );
};

export default MenuMobile;
