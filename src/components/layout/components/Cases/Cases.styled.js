import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Presentation = styled.div`
  width: 50%;
`;

export const Title = styled.div`
  max-width: 20.1875rem;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.5rem;
  color: var(--color-section-title);
`;

export const Subtitle = styled.div`
  margin: 0.875rem 0 2.12575rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: var(--color-subtitle);
`;

export const Cases = styled.div`
  width: 50%;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  width: 383px;

  margin: 0;
  padding: 0;
  list-style-type: none;
  border-radius: 0.625rem;
  overflow: hidden;
  background: rgba(24, 31, 52, 0.6);
`;

export const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-top: 88.25%;
  }

  div {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Body = styled.div`
  padding: 1.25rem;
  width: 100%;
`;

export const CaseTitle = styled.div`
  margin-right: 4.7rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
  color: var(--color-neutral);
`;

export const Description = styled.div`
  margin-top: 0.875rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  width: calc(100% - 4.375rem);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: var(--color-description);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const MoreInfo = styled.div`
  margin-left: 2.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoreInfoButton = styled.button`
  padding: 0.25rem;
  width: 2.75rem;
  height: 2.75rem;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
