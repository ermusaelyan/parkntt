import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.div`
  margin-bottom: 0.875rem;
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 2rem;
  color: var(--color-section-title);

  span {
    font-weight: 700;
  }
`;

export const Subtitle = styled.div`
  margin: 0 0 2rem;
  max-width: 27.0625rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 30px;
  color: var(--color-subtitle);
`;

export const Slider = styled.div`
  width: 614px;
  height: 400px;
  border-radius: 0.625rem;
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: linear-gradient(
      293.83deg,
      rgba(0, 69, 207, 0) 41.23%,
      rgba(0, 69, 207, 0.46) 100%
    ),
    var(--color-active);
  background-blend-mode: color-dodge;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Advice = styled.div`
  margin: 2rem 0 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5625rem;
  color: var(--color-title);
`;

export const Presetation = styled.div``;

export const Info = styled.div`
  margin-left: -5.875rem;
  padding: 5.0625rem 0 7.1875rem;
  width: 57.4%;
  height: 691px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background-color: var(--color-steps-bg);
  box-shadow: -1.5625rem 1.5rem 5.25rem 0 rgba(24, 31, 52, 0.39);
`;

export const List = styled.ul`
  max-width: 19.375rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Number = styled.div`
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 2.125rem;
  color: var(--color-active);
`;

export const Name = styled.div`
  margin: 0.875rem 0 0.4375rem;
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    fill: var(--color-neutral);
  }
`;

export const StepTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: var(--color-neutral);
`;

export const StepDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.56rem;
  color: var(--color-description);
`;
