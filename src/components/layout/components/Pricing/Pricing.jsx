import React from "react";
import * as S from "./Pricing.styled";
import { DotIcon, StarIcon } from "./../../../../assets/icons/iconComponents";

const Pricing = () => {
  return (
    <S.Wrapper>
      <S.Title>Choose Pricing</S.Title>
      <S.Subtitle>Flexible Pricing Plan</S.Subtitle>
      <S.Prices>
        <S.List>
          <S.Item>
            <S.Price>
              <S.PriceCurrent>
                $3<span>.99</span>
              </S.PriceCurrent>
              <S.PriceSale>$6.99</S.PriceSale>
            </S.Price>
            <S.Name>Essential</S.Name>
            <S.Description>Basic features, budget-friendly.</S.Description>
            <S.Tariff>
              <S.Button>Select Plan</S.Button>
            </S.Tariff>
            <S.Dots>
              <S.DotsList>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>+3 QR</S.DotsText>
                </S.DotsItem>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>8 phone number</S.DotsText>
                </S.DotsItem>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>Support</S.DotsText>
                </S.DotsItem>
              </S.DotsList>
            </S.Dots>
          </S.Item>
          <S.Item>
            <S.Price>
              <S.PriceCurrent>
                $3<span>.99</span>
              </S.PriceCurrent>
              <S.PriceSale>$6.99</S.PriceSale>
            </S.Price>
            <S.Name>Essential</S.Name>
            <S.Description>Basic features, budget-friendly.</S.Description>
            <S.Tariff>
              <S.Button>Select Plan</S.Button>
            </S.Tariff>
            <S.Dots>
              <S.DotsList>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>+3 QR</S.DotsText>
                </S.DotsItem>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>8 phone number</S.DotsText>
                </S.DotsItem>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>Support</S.DotsText>
                </S.DotsItem>
              </S.DotsList>
            </S.Dots>
          </S.Item>
          <S.Item active>
            <S.PopularPlan>
              <S.PopularPlanIcon>
                <StarIcon />
              </S.PopularPlanIcon>
              <S.PopularPlanText>Most Popular</S.PopularPlanText>
            </S.PopularPlan>
            <S.Price>
              <S.PriceCurrent>
                $3<span>.99</span>
              </S.PriceCurrent>
              <S.PriceSale>$6.99</S.PriceSale>
            </S.Price>
            <S.Name>Essential</S.Name>
            <S.Description>Basic features, budget-friendly.</S.Description>
            <S.Tariff>
              <S.Button>Select Plan</S.Button>
            </S.Tariff>
            <S.Dots>
              <S.DotsList>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>+3 QR</S.DotsText>
                </S.DotsItem>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>8 phone number</S.DotsText>
                </S.DotsItem>
                <S.DotsItem>
                  <S.DotsIcon>
                    <DotIcon />
                  </S.DotsIcon>
                  <S.DotsText>Support</S.DotsText>
                </S.DotsItem>
              </S.DotsList>
            </S.Dots>
          </S.Item>
        </S.List>
      </S.Prices>
    </S.Wrapper>
  );
};

export default Pricing;
