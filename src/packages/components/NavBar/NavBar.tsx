import React, { FC } from 'react';

import { SearchIcon } from '../../icons';
import { Wrapper, NavEl, SearchButton, SearchInput, SearchIconBlock } from './styled';

interface Props {
    children?: JSX.Element;
}

export const NavBar: FC<Props> = () => {
    console.log('hello bich');

    return (
        <Wrapper>
            <NavEl isActive> Home </NavEl>
            <NavEl> Genres </NavEl>
            <NavEl> top-250 </NavEl>
            <NavEl> Contact </NavEl>
            <SearchButton>
                <SearchInput placeholder='Search...' />
                <SearchIconBlock>
                    <SearchIcon />
                </SearchIconBlock>
            </SearchButton>
        </Wrapper>
    );
};
