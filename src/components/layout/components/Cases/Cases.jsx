import React from "react";
import * as S from "./Cases.styled";
import { MoreInfoIcon } from "./../../../../assets/icons/iconComponents";
import caseImg from "./../../../../assets/img/case1.png";
import Button from "../../../UI/Button/Button";

const Cases = () => {
  return (
    <S.Wrapper>
      <S.Presentation>
        <S.Title>
          Unleashing the Potential of ParknTT in Diverse Scenarios
        </S.Title>
        <S.Subtitle>Use Cases</S.Subtitle>
        <Button>Discover more</Button>
      </S.Presentation>
      <S.Cases>
        <S.List>
          <S.Item>
            <S.Head>
              <div>
                <S.Img src={caseImg} />
              </div>
            </S.Head>
            <S.Body>
              <S.CaseTitle>Instant Notification Saves the Day!</S.CaseTitle>
              <S.Description>
                <S.Info>
                  Imagine returning to your car to find the lights on, windows
                  left open, or even flat tires. Fear not! With Parkntt, someone
                  can simply scan your QR code and instantly notify you about
                  any of these issues. This quick notification not only prevents
                  battery drainage or weather-related concerns but also allows
                  for prompt action during the situation.
                </S.Info>
                <S.MoreInfo>
                  <S.MoreInfoButton type={"button"}>
                    <MoreInfoIcon />
                  </S.MoreInfoButton>
                </S.MoreInfo>
              </S.Description>
            </S.Body>
          </S.Item>
        </S.List>
      </S.Cases>
    </S.Wrapper>
  );
};

export default Cases;
