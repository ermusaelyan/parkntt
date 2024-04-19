import React from "react";
import * as S from "./Button.styled";

const Button = ({ children, type = "button" }) => {
  return (
    <S.Wrapper>
      <S.Button type={type}>{children}</S.Button>
    </S.Wrapper>
  );
};

export default Button;
