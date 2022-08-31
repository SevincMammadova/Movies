import React, { FC } from 'react';

import { IconWrapper, Wrapper, Text } from './styled';

interface Props {
    icon: JSX.Element;
    text: string;
    textRef: string;
}

export const InfoBlock: FC<Props> = ({ icon, text, textRef }) => {
    return (
        <Wrapper>
            <IconWrapper>{icon}</IconWrapper>
            <Text href={textRef}>{text}</Text>
        </Wrapper>
    );
};
