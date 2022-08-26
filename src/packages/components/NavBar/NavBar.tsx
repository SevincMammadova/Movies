import React, { FC } from 'react';

import { SearchIcon } from '../../icons';
import { PATH_NAMES } from '../../utils/path';
import { Wrapper, NavEl, SearchButton, SearchInput, SearchIconBlock } from './styled';

interface Props {
    children?: JSX.Element;
}

export const NavBar: FC<Props> = () => {
    return (
        <Wrapper>
            <NavEl to={PATH_NAMES.home}>Home</NavEl>
            <NavEl to={PATH_NAMES.genres}> Genres </NavEl>
            <NavEl to={PATH_NAMES.top250}> Top-250 </NavEl>
            <NavEl to={PATH_NAMES.contacts}> Contact </NavEl>
            <SearchButton>
                <SearchInput placeholder='Search...' />
                <SearchIconBlock>
                    <SearchIcon />
                </SearchIconBlock>
            </SearchButton>
        </Wrapper>
    );
};
