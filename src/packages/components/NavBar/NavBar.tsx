import React, { FC } from 'react';

import { SearchIcon } from '../../icons';
import { PATH_NAMES } from '../../utils/path';
import { Wrapper, NavEl, SearchButton, SearchInput, SearchIconBlock } from './styled';

interface Props {
    children?: JSX.Element;
    getSearchQuery: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchClick: () => void;
}

export const NavBar: FC<Props> = (props) => {
    const onEnterClick = (e: any) => {
        if (e.key === 'Enter') {
            props.onSearchClick();
        }
    };
    return (
        <Wrapper>
            <NavEl to={PATH_NAMES.home}>Home</NavEl>
            <NavEl to={PATH_NAMES.genres}> Genres </NavEl>
            <NavEl to={PATH_NAMES.topRated}> Top Rated </NavEl>
            <NavEl to={PATH_NAMES.contacts}> Contact </NavEl>
            <SearchButton>
                <SearchInput
                    placeholder='Search...'
                    onChange={props.getSearchQuery}
                    onKeyDown={(e) => onEnterClick(e)}
                />
                <SearchIconBlock onClick={() => props.onSearchClick()}>
                    <SearchIcon />
                </SearchIconBlock>
            </SearchButton>
        </Wrapper>
    );
};
