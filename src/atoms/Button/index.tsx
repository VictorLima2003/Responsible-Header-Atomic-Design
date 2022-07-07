import * as styles from "./styles";

import { ButtomConfig } from "../../dto's/CreatePropsHeader";

type Props = {
  props: ButtomConfig;
};

const Button = (props: Props) => {
  return (
    <styles.Container props={props.props}>
      {props.props.buttonText}
    </styles.Container>
  );
};

export default Button;
