/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {HeaderNavLink} from "../Header";
import {QUERIES} from "../../constants";

const MobileMenu = ({isOpen, onDismiss}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay>
            <Content aria-label="menu">
                <ButtonWrapper>
                    <UnstyledButton onClick={onDismiss}><VisuallyHidden>Dismiss
                        menu</VisuallyHidden><Icon id="close" size={22}/></UnstyledButton>
                </ButtonWrapper>
                <Wrapper>
                    <EmptySpace/>
                    <Nav>
                        <HeaderNavLink href="/sale">Sale</HeaderNavLink>
                        <HeaderNavLink href="/new">New&nbsp;Releases</HeaderNavLink>
                        <HeaderNavLink href="/men">Men</HeaderNavLink>
                        <HeaderNavLink href="/women">Women</HeaderNavLink>
                        <HeaderNavLink href="/kids">Kids</HeaderNavLink>
                        <HeaderNavLink href="/collections">Collections</HeaderNavLink>
                    </Nav>
                    <EmptySpace>
                        <Footer>
                            <FooterLink href="/terms">Terms and Conditions</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                        </Footer>
                    </EmptySpace>
                </Wrapper>
            </Content>
        </Overlay>
    );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vh, 3rem);
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-bottom: 32px;
  padding-top: 24px;
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: hsl(var(--gray-700-hue) / 0.8);
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-white);
  height: 100%;
  width: 300px;
`

const Wrapper = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`

export default MobileMenu;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 26px;
  right: 16px;
`

const EmptySpace = styled.div`
flex: 1
`;
