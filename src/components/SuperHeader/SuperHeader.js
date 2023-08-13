import React from 'react';
import styled from 'styled-components/macro';

import {QUERIES} from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
    return (
        <>
            <DesktopWrapper>
                <MarketingMessage>
                    Free shipping on domestic orders over $75!
                </MarketingMessage>
                <SearchInput/>
                <HelpLink href="/help">Help</HelpLink>
                <UnstyledButton>
                    <Icon id="shopping-bag" strokeWidth={1}/>
                </UnstyledButton>
            </DesktopWrapper>
            <MobileContent/>
        </>
    );
};

const MobileContent = styled.div`
  display: none;
  height: ${4 / 16}rem;
  background-color: var(--color-gray-900);
  @media ${QUERIES.tabletAndDown} {
  display: revert;
  }
`

const DesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--color-gray-300);
  background-color: var(--color-gray-900);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;


const MarketingMessage = styled.span`
  color: var(--color-white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
