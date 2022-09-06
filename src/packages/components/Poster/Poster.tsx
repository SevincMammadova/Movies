import React, { FC } from 'react';

import { Button } from '../index';
import { Wrapper, PosterWrapper, PosterName, RunTime, PosterImage } from './styled';

interface Props {
    btnText?: string;
    posterImage?: string;
    posterName?: string | undefined;
    onClick?: () => void;
    runtime?: string;
    path: string;
}

export const Poster: FC<Props> = (props: Props) => {
    const { btnText, posterName, runtime, posterImage, path } = props;
    return (
        <Wrapper>
            <PosterWrapper>
                <PosterImage src={posterImage} />
                {runtime && <RunTime>{runtime} </RunTime>}
            </PosterWrapper>
            {posterName && <PosterName title={posterName}>{posterName}</PosterName>}
            <Button btnText={btnText} path={path} />
        </Wrapper>
    );
};
