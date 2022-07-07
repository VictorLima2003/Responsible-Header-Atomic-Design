import { FunctionComponent } from "react";
import Menu from "../../assets/menu-mobile.png";

import { MenuButton } from "./styles";

type Props = {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContentStyled: FunctionComponent<Props> = ({ setMenuIsVisible }) => {
  return (
    <MenuButton onClick={() => setMenuIsVisible(true)}>
      <img src={Menu} alt="Menu mobile" width={35} />
    </MenuButton>
  );
};

export default MenuContentStyled;
