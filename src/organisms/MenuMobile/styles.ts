import styled, { css } from "styled-components";

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
  isVisible: boolean;
  props: MenuConfig;
};

export const Container = styled.div<Props>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.props.menuBackground};
  display: none;
  opacity: 0.95;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    margin: auto;
    gap: 3rem;

    > a {
      display: flex;
      font-size: 1.5rem;
      font-family: "Poppins", sans-serif;
      color: #fff;
      align-items: center;
      justify-content: center;
      height: 4rem;
      width: 100%;

      &:hover {
        background-color: #f8fdff;
        border-radius: 6px;
        color: #17a4d0;
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      display: flex;
    `};
`;
