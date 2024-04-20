import React from "react";
import * as S from "./Layout.styled";
import Introduction from "./components/Introduction/Introduction";
import Features from "./components/Features/Features";
import Work from "./components/Work/Work";
import Cases from "./components/Cases/Cases";
import Poster from "./components/Poster/Poster";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <S.Wrapper>
      <Introduction />
      <S.Container>
        <Features />
        <Work />
        <Cases />
        <Poster />
        <Pricing />
      </S.Container>
      <Testimonials />
      <S.Container>
        <Questions />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
