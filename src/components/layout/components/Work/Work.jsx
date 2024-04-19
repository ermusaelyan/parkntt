import React from "react";
import * as S from "./Work.styled";
import Button from "../../../UI/Button/Button";
import { ScanIcon } from "./../../../../assets/icons/iconComponents";

const Work = () => {
  return (
    <S.Wrapper>
      <S.Title>
        How it <span>work</span>
      </S.Title>
      <S.Container>
        <S.Presetation>
          <S.Subtitle>
            Parkntt enhances parking experiences by facilitating instant
            communication among drivers without the need for contact information
            exchange.
          </S.Subtitle>
          <S.Slider />
          <S.Advice>Don't Stress About Parking</S.Advice>
          <Button>Start journey</Button>
        </S.Presetation>
        <S.Info>
          <S.List>
            {Array.from(Array(3), (_, i) => (
              <S.Item>
                <S.Number>01</S.Number>
                <S.Name>
                  <S.Icon>
                    <ScanIcon />
                  </S.Icon>
                  <S.StepTitle>Stick QR code On Your Car</S.StepTitle>
                </S.Name>
                <S.StepDescription>
                  We will deliver a printed QR code that you should stick on
                  your car
                </S.StepDescription>
              </S.Item>
            ))}
          </S.List>
        </S.Info>
      </S.Container>
    </S.Wrapper>
  );
};

export default Work;
