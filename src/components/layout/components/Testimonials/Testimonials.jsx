import React from "react";
import * as S from "./Testimonials.styled";
import { RateStarIcon } from "./../../../../assets/icons/iconComponents";
import Button from "../../../UI/Button/Button";
const Testimonials = () => {
  return (
    <S.Wrapper>
      <S.Title>Testimonials</S.Title>
      <S.Comments>
        <S.List>
          <S.Item>
            <S.Comment>
              Parkntt is truly fantastic! With the app, I can instantly notify
              fellow drivers about parking issues, avoiding conflicts and saving
              precious time. The app's simplicity and convenience have made the
              entire process extremely easy. Parkntt has genuinely
              revolutionized the urban parking experience for me.
            </S.Comment>
            <S.Review>
              <S.Rate>
                {Array.from(Array(5), (_, i) => (
                  <S.RateStar key={i}>
                    <RateStarIcon />
                  </S.RateStar>
                ))}
              </S.Rate>
              <S.Author>Peter, Belgium</S.Author>
            </S.Review>
          </S.Item>
        </S.List>
      </S.Comments>
      <S.Download>
        <Button>Download app</Button>
      </S.Download>
    </S.Wrapper>
  );
};

export default Testimonials;
