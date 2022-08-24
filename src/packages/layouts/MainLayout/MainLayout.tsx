import React, { FC } from 'react';

import { InfoBlock, Logo, NavBar } from '../../components';
import { footerInfo } from './consts';
import { Wrapper, Header, Main, Footer } from './styled';
import { FooterInfoType } from './types';

interface Props {
    children: JSX.Element;
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            <Header>
                <Logo />
                <NavBar />
            </Header>
            <Main>{children}</Main>
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
