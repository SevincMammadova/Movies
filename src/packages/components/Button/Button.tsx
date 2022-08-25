import React, { FC } from 'react';

import { Wrapper } from './styled';

interface Props {
    text: string;
    onClick?: () => void;
}

export const Button: FC<Props> = ({ text }) => {
    return <Wrapper>{text}</Wrapper>;
};
