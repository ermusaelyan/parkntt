import styled from "styled-components";

export const Wrapper = styled.footer`
  padding: 4.25rem 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-steps-bg);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1216px;
`;

export const Top = styled.div`
  padding-bottom: 3.4375rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-white-15);
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

export const Description = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
  color: var(--color-description);
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: none;
  align-items: center;
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 0.625rem;
  }
`;

export const SocialLink = styled.a`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.625rem;
  height: 3.625rem;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    fill: var(--color-neutral);
  }
`;

export const Bottom = styled.div`
  padding-top: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Rights = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: var(--color-description);
`;
export const RightsLink = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;
