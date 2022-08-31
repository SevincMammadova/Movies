import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { ChevronLeftIcon } from '../../packages/icons';
import { AppDispatch } from '../../store/store';
import { Wrapper, GoBackButton, PosterBlock } from './styled';
import { initThunk } from './thunks';

export const GenrePage: FC = () => {
    const navigate = useNavigate();
    const { mediaType, id } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initThunk({ mediaType, id }));
    }, [dispatch]);

    const goBack = () => navigate(-1);
    return (
        <Wrapper>
            <GoBackButton onClick={() => goBack()}>
                <ChevronLeftIcon />
                Go Back
            </GoBackButton>
            <PosterBlock>
                <Outlet />
            </PosterBlock>
        </Wrapper>
    );
};
