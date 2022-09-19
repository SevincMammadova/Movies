import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { getSearchResultsThunk } from '../../../pages/SearchResults/thunks';
import { AppDispatch, RootState } from '../../../store/store';
import { InfoBlock, Logo, NavBar } from '../../components';
import { PATH_NAMES } from '../../utils/path';
import { footerInfo } from './consts';
import { Wrapper, Header, Main, Footer } from './styled';
import { FooterInfoType } from './types';

interface Props {
    children?: JSX.Element;
}

export const MainLayout: FC<Props> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const query = useSelector((state: RootState) => state.searchResults.query);
    const page = useSelector((state: RootState) => state.searchResults.searchResult.page);
    const navigate = useNavigate();

    const getSearchResults = () => {
        dispatch(getSearchResultsThunk({ page, query })).then(() => {
            navigate({ pathname: PATH_NAMES.search, search: `?query=${query}&page=${page}` });
        });
    };
    return (
        <Wrapper>
            <Header>
                <Logo />
                <NavBar onSearchClick={getSearchResults} />
            </Header>
            <Main>
                <Outlet />
            </Main>
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
