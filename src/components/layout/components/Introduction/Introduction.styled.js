import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Presentation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  margin: 9.4375rem auto 0;
  width: 50%;
  max-width: 494px;
`;

export const PresentationPic = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    padding-top: 90.11%;
  }

  div {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PresentationImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3.125rem;
  color: var(--color-title);
`;

export const Subtitle = styled.div`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: var(--color-subtitle);
`;

export const Downloads = styled.div`
  margin: 1.25rem 0 2.75rem;
  display: flex;
  align-items: center;
`;

export const Download = styled.div`
  width: 8.4375rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-neutral);
  border: 1px solid var(--color-neutral-border);
  border-radius: 0.75rem;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const DownloadLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DownloadIcon = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

export const DownloadName = styled.span`
  margin-left: 0.5rem;
`;

export const DownloadSubtitle = styled.span`
  display: block;
  font-size: 0.5rem;
  font-weight: 500;
  color: var(--color-black);
`;

export const DownloadTitle = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-black);
`;

export const Journey = styled.div``;

export const JourneyButton = styled.button`
  padding: 1.1875rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
  background-color: var(--color-active);
  cursor: pointer;
`;
