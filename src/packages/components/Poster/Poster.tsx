import React, { FC } from 'react';

import { Wrapper, PosterWrapper, ButtonWrapper, PosterName, RunTime, PosterImage } from './styled';

interface Props {
    btnText?: string;
    posterImage?: string;
    posterName?: string | undefined;
    onClick?: () => void;
    runtime?: string;
}

export const Poster: FC<Props> = (props: Props) => {
    const { btnText, posterName, runtime, posterImage } = props;
    return (
        <Wrapper>
            <PosterWrapper>
                <PosterImage src={posterImage} />
                {runtime && <RunTime>{runtime} </RunTime>}
            </PosterWrapper>
            {posterName && <PosterName title={posterName}>{posterName}</PosterName>}
            <ButtonWrapper>{btnText || 'Watch Now'}</ButtonWrapper>
        </Wrapper>
    );
};
