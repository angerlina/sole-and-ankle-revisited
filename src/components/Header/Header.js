import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;ReleasesReleases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">WomenWomen</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
          <MobileNav>
              <Icon id="shopping-bag" size={24} />
              <Icon id="search" size={24} />
                  <UnstyledButton onClick={() => setShowMobileMenu(true)}><Icon id="menu" size={24} /></UnstyledButton>
          </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(0.75rem,
  4vw,
  4rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.div`
    display: none;
  color: var(--color-gray-900);
  align-self: center;
  gap: 4vw;
  align-items: center;
  margin: 0px 0px 0px 10vw;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`

const Side = styled.div`
  flex: 1;
`;

export const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;


export default Header;
