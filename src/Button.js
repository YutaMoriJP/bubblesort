import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 10px 20px;
  min-width: 200px;
  background-color: #099268;
  border: 0;
  border-radius: 5px;
  color: #f1f3f5;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: #20c997;
  }
  &:active {
    background-color: #087f5b;
  }
  ${props =>
    props.disabled &&
    css`
      background: #c3fae8;
      color: #495057;
      cursor: not-allowed;
      &:hover {
        background: #c3fae8;
      }
    `}
`;

const Button = ({ type = "button", children, ...rest }) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
