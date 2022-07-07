import styled from "styled-components";

type Props = {
  color: string;
};

export const MenuList = styled.ul`
  margin-left: auto;

  @media (max-width: 643px) {
    display: none;
  }
`;

export const ItemList = styled.li<Props>`
  display: inline-block;
  margin-right: 2.5rem;
  font-weight: 500;

  > a {
    color: #1e255e;
    transition: color 0.25s ease;
    font-size: 1.4rem;

    &:hover {
      color: ${(props) => props.color};
    }
  }
`;
