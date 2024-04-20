import React from "react";
import * as S from "./Questions.styled";
import Button from "../../../UI/Button/Button";
import Question from "./components/Question/Question";
const Questions = () => {
  return (
    <S.Wrapper>
      <S.Presentation>
        <S.Title>Frequently Asked Questions</S.Title>
        <S.Subtitle>
          Navigating Parkntt with Ease – Your Comprehensive FAQ Guide
        </S.Subtitle>
        <Button>Discover more</Button>
      </S.Presentation>
      <S.Questions>
        <S.List>
          {Array.from(Array(7), (_, i) => (
            <Question key={i} />
          ))}
        </S.List>
      </S.Questions>
    </S.Wrapper>
  );
};

export default Questions;
