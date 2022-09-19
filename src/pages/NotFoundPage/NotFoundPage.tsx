import React from 'react';

import notFound from '../../assets/images/notFound.svg';
import { Wrapper, ImgWrapper } from './styled';

export const NotFoundPage: React.FC = () => (
    <Wrapper>
        <ImgWrapper src={notFound} />
    </Wrapper>
);
