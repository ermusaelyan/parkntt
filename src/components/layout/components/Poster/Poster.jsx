import React from "react";
import * as S from "./Poster.styled";
import { AndroidIcon, IosIcon } from "../../../../assets/icons/iconComponents";

const Poster = () => {
  return (
    <S.Wrapper>
      <S.Title>
        The App That Connects Drivers Don't Stress, Just Scan and Communicate
      </S.Title>
      <S.Subtitle>
        Your Stress-Free Solution for Instant Driver Communication
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
    </S.Wrapper>
  );
};

export default Poster;
