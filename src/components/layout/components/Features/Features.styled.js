import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 4rem 0 15rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Poster = styled.div`
  width: 34.21%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-top: 73.8%;
  }

  div {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

export const Experience = styled.div`
  padding: 5.0625rem 2.75rem 7.125rem 2.375rem;
  width: 65.79%;
  box-shadow: 3px 1.9375rem 5.25rem 0 rgba(24, 31, 52, 0.12);
  border-radius: 0.625rem;
  position: relative;
`;

export const Name = styled.div`
  margin-bottom: 3.6875rem;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2rem;
  color: var(--color-section-title);

  span {
    font-weight: 700;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  width: 50%;
  display: flex;
  align-items: start;

  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 3.4375rem;
  }
`;

export const Icon = styled.div`
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-active);
  }
`;

export const Info = styled.div`
  margin-left: 1.125rem;
`;

export const Title = styled.div`
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--color-section-title);
`;

export const Subtitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: var(--color-subtitle);
`;

export const UsersCount = styled.div`
  position: absolute;
  bottom: 0;
  right: 28.5%;
  transform: translateY(50%);
  width: max-content;
  padding: 2.06rem;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.57rem;
  text-align: center;
  color: var(--color-white);
  background-color: var(--color-active);
  border-radius: 0.625rem;

  span {
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
    text-transform: uppercase;
  }
`;
