import styled from "styled-components";
import banner from "./../../../../assets/img/poster.png";

export const Wrapper = styled.section`
  margin: 123px 0 138px;
  padding: 74px 0 84px;
  width: 100%;
  border-radius: 0.625rem;
  background-image: url(${banner});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  max-width: 47.2%;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.5rem;
  text-align: center;
  color: var(--color-neutral);
`;

export const Subtitle = styled.div`
  max-width: 47.2%;
  margin: 1.375rem 0 2.25rem;
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1.875rem;
  text-align: center;
  color: var(--color-poster-sub);
`;

export const Downloads = styled.div`
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
