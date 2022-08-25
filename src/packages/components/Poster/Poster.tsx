import React, { FC } from 'react';

import { Wrapper, PosterWrapper, ButtonWrapper, PosterName, RunTime } from './styled';

interface Props {
    btnText?: string;
    posterImage?: string;
    posterName?: string;
    onClick?: () => void;
    runtime?: string;
}

export const Poster: FC<Props> = ({ btnText, posterName, runtime }) => {
    return (
        <Wrapper>
            <PosterWrapper>{runtime && <RunTime>{runtime} </RunTime>}</PosterWrapper>
            {posterName && <PosterName title={posterName}>{posterName}</PosterName>}
            <ButtonWrapper>{btnText || 'something'}</ButtonWrapper>
        </Wrapper>
    );
};
