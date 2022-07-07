import * as styles from "./styles";

type ButtomConfig = {
  buttonText: string;
  buttonBackground?: string;
  buttonBackgroundHover?: string;
  buttonColor?: string;
  buttonColorHover?: string;
  buttonFontSize: string;
};

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
