import Frontend from "../templates/Frontend";
import ButtonContact from "../atoms/ButtonContact";
import { Props } from "../dto's/CreatePropsHeader";
import HeroHeaderImage from "../assets/hero-header-image.png";

import * as styles from "./styles";

function Main() {
  return (
    <Frontend>
      <styles.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immersive user
            experience
          </h6>

          <ButtonContact />
        </div>
        <styles.ColumnImage>
          <img src={HeroHeaderImage} alt="Uma mulher fazendo pesquisa" />
        </styles.ColumnImage>
      </styles.Container>
    </Frontend>
  );
}

export default Main;
