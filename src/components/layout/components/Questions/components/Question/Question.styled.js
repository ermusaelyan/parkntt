import styled from "styled-components";

export const Wrapper = styled.li`
  width: 100%;
  padding: 1.375rem 1.75rem;
  list-style-type: none;
  border-radius: 0.625rem;
  background-color: ${(props) =>
    props.isOpen ? "transparent" : "var(--color-pricing-bg)"};

  &:not(:last-child) {
    margin-bottom: 1.125rem;
  }
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.75rem;
  color: var(--color-title);
`;

export const OpenAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenAnswerButton = styled.button`
  padding: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-subtitle);
  }
`;

export const Body = styled.div`
  margin-top: 0.8125rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: var(--color-answer);
`;
