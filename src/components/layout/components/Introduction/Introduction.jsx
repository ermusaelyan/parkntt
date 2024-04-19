import React from "react";
import * as S from "./Introduction.styled";
import Header from "../header/Header";
import { AndroidIcon } from "./../../../../assets/icons/iconComponents";
import { IosIcon } from "./../../../../assets/icons/iconComponents";
import introductionImage from "./../../../../assets/img/introduction.png";
import Button from "../../../UI/Button/Button";

const Introduction = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Presentation>
        <S.Info>
          <S.Title>
            Connecting Drivers, Building a Communication Culture
          </S.Title>
          <S.Subtitle>
            Stay informed if you've problems with parking, or notify other
            drivers about parking issues caused by their car without sharing any
            contact.
          </S.Subtitle>
          <S.Downloads>
            <S.Download>
              <S.DownloadLink>
                <S.DownloadIcon>
                  <IosIcon />
                </S.DownloadIcon>
                <S.DownloadName>
                  <S.DownloadSubtitle>Download on the</S.DownloadSubtitle>
                  <S.DownloadTitle>App Store</S.DownloadTitle>
                </S.DownloadName>
              </S.DownloadLink>
            </S.Download>
            <S.Download>
              <S.DownloadLink>
                <S.DownloadIcon>
                  <AndroidIcon />
                </S.DownloadIcon>
                <S.DownloadName>
                  <S.DownloadSubtitle>GET IT ON</S.DownloadSubtitle>
                  <S.DownloadTitle>Google Play</S.DownloadTitle>
                </S.DownloadName>
              </S.DownloadLink>
            </S.Download>
          </S.Downloads>
          <S.Journey>
            <Button>Start Journey</Button>
          </S.Journey>
        </S.Info>
        <S.PresentationPic>
          <S.PresentationImg src={introductionImage} />
        </S.PresentationPic>
      </S.Presentation>
    </S.Wrapper>
  );
};

export default Introduction;
