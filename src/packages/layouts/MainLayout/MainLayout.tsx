import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { InfoBlock, Logo, NavBar } from '../../components';
import { footerInfo } from './consts';
import { Wrapper, Header, Main, Footer } from './styled';
import { FooterInfoType } from './types';

interface Props {
    children?: JSX.Element;
}

export const MainLayout: FC<Props> = () => {
    return (
        <Wrapper>
            <Header>
                <Logo />
                <NavBar />
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                {footerInfo?.map((item: FooterInfoType) => (
                    <InfoBlock
                        key={item.id}
                        icon={item.icon}
                        text={item.text}
                        textRef={item.textRef}
                    />
                ))}
            </Footer>
        </Wrapper>
    );
};
