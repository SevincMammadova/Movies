import React, { FC } from 'react';

import { themeColors } from '../../const';
import { LogoIcon } from '../../icons';
import { PATH_NAMES } from '../../utils/path';
import { LogoText, LogoTextBlock, Wrapper } from './styled';

interface Props {
    children?: JSX.Element;
}

export const Logo: FC<Props> = () => {
    return (
        <Wrapper to={PATH_NAMES.home}>
            <LogoIcon />
            <LogoTextBlock>
                <div>
                    <LogoText color={themeColors.pink}>Movie</LogoText>
                    <LogoText>Night</LogoText>
                </div>
                <LogoText fontSize='8px'>
                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                </LogoText>
            </LogoTextBlock>
        </Wrapper>
    );
};
