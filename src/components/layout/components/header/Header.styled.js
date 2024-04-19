import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoLink = styled.a`
  padding: 0.25rem;
  width: 6.3125rem;
  height: 1.9375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Panel = styled.div`
  padding: 0.875rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6.25rem;
  background-color: var(--color-black-4);
`;

export const PanelList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PanelItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 1.125rem;
  }
`;

export const PanelLink = styled.a`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  cursor: pointer;
`;

export const Download = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DownloadLink = styled.a`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-white);
`;
