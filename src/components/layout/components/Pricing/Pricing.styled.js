import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2rem;
  color: var(--color-section-title);
  text-align: center;
`;

export const Subtitle = styled.div`
  margin: 0.75rem 0 8.8125rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: var(--color-subtitle);
  text-align: center;
`;

export const Prices = styled.div`
  width: 100%;
  height: 26.4375rem;
  background-color: var(--color-pricing-bg);
  border-radius: 0.625rem;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Item = styled.li`
  padding: 2.5rem 1.625rem 3.0625rem;
  width: calc(100% / 3 - 3.9rem);
  height: 26.4375rem;
  background-color: var(--color-pricing-bg);

  &:not(:last-child) {
    margin-right: 3.9rem;
  }

  ${(props) =>
    props.active &&
    css`
      position: absolute;
      max-width: 20.75rem;
      height: 32.9375rem;
      z-index: 1;
      top: 50%;
      transform: translateY(-54%);
      right: 4%;
      padding: 1.0625rem 1.625rem 5.625rem;
      background-color: var(--color-active);
      box-shadow: -1.25rem 1.5rem 2.75rem 0 rgba(44, 50, 69, 0.27);
      border-radius: 0.625rem;
      color: var(--color-white);

      ${DotsItem} {
        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }
      }

      ${Button} {
        color: var(--color-white);
        border-color: var(--color-white-5);
      }

      ${PriceCurrent}, ${PriceSale}, ${Name}, ${Description}, ${DotsText} {
        color: var(--color-white);
      }

      ${DotsIcon} svg {
        fill: var(--color-white);
      }
    `}
`;

export const PopularPlan = styled.div`
  width: max-content;
  margin: 0 0 4.0625rem auto;
  padding: 0.4375rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3125rem;
  background-color: var(--color-white);
`;

export const PopularPlanIcon = styled.div`
  margin-right: 0.375rem;
  width: 0.9375rem;
  height: 0.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    fill: var(--color-active);
  }
`;

export const PopularPlanText = styled.div`
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.0625rem;
  color: var(--color-active);
  text-transform: uppercase;
`;

export const Price = styled.div`
  margin-bottom: 1.5625rem;
  display: flex;
  align-items: flex-end;
`;

export const PriceCurrent = styled.div`
  margin-right: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.8rem;
  color: var(--color-title);

  span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.875rem;
  }
`;

export const PriceSale = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  text-decoration: line-through;
  color: var(--color-title);
`;

export const Name = styled.div`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2rem;
  color: var(--color-title);
`;

export const Description = styled.div`
  margin: 0.8125rem 0 1.5625rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: var(--color-title);
`;

export const Tariff = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--color-active);
  border: 2px solid var(--color-active);
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Dots = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const DotsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const DotsItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;

export const DotsIcon = styled.div`
  margin-right: 1rem;
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-title);
  }
`;

export const DotsText = styled.div`
  font-size: 1.1875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--color-title);
`;
