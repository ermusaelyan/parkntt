import React from "react";
import * as S from "./Header.styled";
import logo from "./../../../../assets/img/logo.png";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <S.LogoLink>
          <S.LogoImg src={logo} />
        </S.LogoLink>
      </S.Logo>
      <S.Panel>
        <S.PanelList>
          <S.PanelItem>
            <S.PanelLink>Features</S.PanelLink>
          </S.PanelItem>
          <S.PanelItem>
            <S.PanelLink>FAQ</S.PanelLink>
          </S.PanelItem>
          <S.PanelItem>
            <S.PanelLink>Pricing</S.PanelLink>
          </S.PanelItem>
          <S.PanelItem>
            <S.PanelLink>Help</S.PanelLink>
          </S.PanelItem>
        </S.PanelList>
      </S.Panel>
      <S.Download>
        <S.DownloadLink>Download app</S.DownloadLink>
      </S.Download>
    </S.Wrapper>
  );
};

export default Header;
