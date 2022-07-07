import * as styles from "./styles";
import Logo from "../../molecules/Logo";
import Menu from "../Menu";
import Button from "../../atoms/Button";
import MenuContentStyled from "../../molecules/MenuContentStyled";
import { useEffect, useState } from "react";
import { Props } from "../../dto's/CreatePropsHeader";
import MenuMobile from "../MenuMobile";

type HeaderProps = {
  props: Props;
};

function Header(props: HeaderProps) {
  const [menuIsVisible, setMenuisvisible] = useState(false);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <styles.Box>
      <Logo />
      <Menu props={props.props.menuConfig} />
      <Button props={props.props.buttomConfig} />
      <MenuContentStyled setMenuIsVisible={setMenuisvisible} />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuisvisible}
        props={props.props.menuConfig}
      />
    </styles.Box>
  );
}

export default Header;
