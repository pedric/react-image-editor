import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 16px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.5px;
  padding-bottom: 3px;

  &.active {
    border-bottom: 1px solid #000;
    padding-bottom: 2px;
  }
`;
