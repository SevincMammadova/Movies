import React, { FC } from 'react';

import { ButtonWrapper } from './styled';

interface Props {
    btnText?: string;
    path: string;
}

export const Button: FC<Props> = (props: Props) => {
    const { btnText, path } = props;
    return <ButtonWrapper to={path}>{btnText || 'Watch Now'}</ButtonWrapper>;
};
