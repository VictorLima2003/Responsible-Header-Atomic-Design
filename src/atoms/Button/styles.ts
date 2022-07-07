import styled from "styled-components";

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

export const Container = styled.button<Props>`
  width: 13rem;
  height: 4.2rem;
  border: 1px solid ${(props) => props.props.buttonColor};
  color: ${(props) => props.props.buttonColor};
  font-size: ${(props) => props.props.buttonFontSize};
  margin-left: 2.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 17px -8px transparent;
  transition: all 0.25s ease-out;

  &:hover {
    color: #fff;
    background-color: ${(props) => props.props.buttonColor};
    box-shadow: 0px 0px 17px -5px ${(props) => props.props.buttonColor};
  }

  @media (max-width: 643px) {
    display: none;
  }
`;
