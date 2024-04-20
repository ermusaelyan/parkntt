import React from "react";
import * as S from "./Footer.styled";
import logo from "../../../../assets/img/footer-logo.png";
import {
  FbIcon,
  GooglePlusIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../../../../assets/icons/iconComponents";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Top>
          <S.Logo>
            <S.LogoLink>
              <S.LogoImg src={logo} />
            </S.LogoLink>
          </S.Logo>
          <S.Description>
            Connecting Drivers, Making Parking Hassle-Free.
          </S.Description>
          <S.Social>
            <S.SocialList>
              <S.SocialItem>
                <S.SocialLink>
                  <FbIcon />
                </S.SocialLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.SocialLink>
                  <GooglePlusIcon />
                </S.SocialLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.SocialLink>
                  <InstagramIcon />
                </S.SocialLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.SocialLink>
                  <YoutubeIcon />
                </S.SocialLink>
              </S.SocialItem>
            </S.SocialList>
          </S.Social>
        </S.Top>
        <S.Bottom>
          <S.Rights>Copyright ©2024 ParknTT. All rights reserved.</S.Rights>
          <S.Rights>
            <S.RightsLink>Privacy Policy</S.RightsLink>
          </S.Rights>
        </S.Bottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
