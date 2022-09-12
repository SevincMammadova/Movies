import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { searchPageActions } from '../../../pages';
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

    const getSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        dispatch(searchPageActions.setQuery(value?.trim()));
    };

    const getSearchResults = () => {
        dispatch(getSearchResultsThunk({ page, query })).then(() => {
            navigate(PATH_NAMES.search);
        });
    };
    return (
        <Wrapper>
            <Header>
                <Logo />
                <NavBar getSearchQuery={getSearchQuery} onSearchClick={getSearchResults} />
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
