import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 11.25rem;
  padding: 5.375rem 0;
  width: 100%;
  background-color: var(--color-steps-bg);
`;

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
  color: var(--color-neutral);
`;

export const Comments = styled.div`
  margin: 3.125rem 0 5.8125rem;
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  width: 21.0625rem;
  height: 24.4375rem;
  padding: 1.5625rem 1.8rem 1.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.625rem;
  background-color: rgba(255, 255, 255, 0.15);

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Comment = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 26px;
  color: var(--color-poster-sub);
`;

export const Review = styled.div`
  width: 100%;
`;

export const Rate = styled.div`
  margin-bottom: 0.625rem;
  display: flex;
  align-items: center;
`;

export const RateStar = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:not(:last-child) {
    margin-right: 0.4375rem;
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-rate-bg);
  }
`;

export const Author = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  color: var(--color-neutral);
`;

export const Download = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
