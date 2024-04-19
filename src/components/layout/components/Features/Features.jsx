import React from "react";
import * as S from "./Features.styled";
import { NotificationIcon } from "./../../../../assets/icons/iconComponents";
import featuresImg from "./../../../../assets/img/features.png";

const Features = () => {
  return (
    <S.Wrapper>
      <S.Poster>
        <div>
          <S.PosterImg src={featuresImg} />
        </div>
      </S.Poster>
      <S.Experience>
        <S.Name>
          Fill the <span>best experience</span> with <span>our features</span>
        </S.Name>
        <S.List>
          {Array.from(Array(6), (_, i) => (
            <S.Item key={i}>
              <S.Icon>
                <NotificationIcon />
              </S.Icon>
              <S.Info>
                <S.Title>Send and receive notifications</S.Title>
                <S.Subtitle>
                  Notify and be notified with ease. Choose how you want to be
                  notified, whether...
                </S.Subtitle>
              </S.Info>
            </S.Item>
          ))}
        </S.List>
        <S.UsersCount>
          More then
          <br />
          <span>100k</span>
          <br />
          happy users
        </S.UsersCount>
      </S.Experience>
    </S.Wrapper>
  );
};

export default Features;
