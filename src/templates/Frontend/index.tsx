import * as styles from "./styles";
import Header from "../../organisms/Header";

import { Props } from "../../dto's/CreatePropsHeader";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
  const data: Props = {
    buttomConfig: {
      buttonText: "Teste1",
      buttonColor: "#20bf6b",
      buttonFontSize: "1.4rem",
    },
    menuConfig: {
      menuBackground: "#20bf6b",
      menuItemsDefined: [
        { title: "Victor", route: "/victor" },
        { title: "Guilherme", route: "/guilherme" },
        { title: "Rosalia", route: "/rosalia" },
        { title: "Ivan", route: "/ivan" },
      ],
      menuItemsConfig: {
        menuItemsColor: "#20bf6b",
        menuItemsColorHover: "#000",
        menuItemsFontSize: "1.4rem",
      },
    },
  };

  const data2: Props = {
    buttomConfig: {
      buttonText: "Teste2",
      buttonColor: "#eb3b5a",
      buttonFontSize: "1.4rem",
    },
    menuConfig: {
      menuBackground: "#eb3b5a",
      menuItemsDefined: [
        { title: "Victor", route: "/victor" },
        { title: "Guilherme", route: "/guilherme" },
        { title: "Rosalia", route: "/rosalia" },
        { title: "Ivan", route: "/ivan" },
        { title: "Janete", route: "/janete" },
      ],
      menuItemsConfig: {
        menuItemsColor: "#eb3b5a",
        menuItemsColorHover: "#000",
        menuItemsFontSize: "1.4rem",
      },
    },
  };

  return (
    <styles.Container>
      <Header props={data} />
      <Header props={data2} />
    </styles.Container>
  );
};

export default Frontend;
