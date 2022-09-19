import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';

import { searchPageActions } from '../../../pages';
import { SearchIcon } from '../../icons';
import { MenuIcon } from '../../icons/Meni-icon';
import { navInfo, NavType } from './const';
import { Wrapper, NavEl, SearchButton, SearchInput, SearchIconBlock, IconWrapper } from './styled';

interface Props {
    children?: JSX.Element;
    onSearchClick: () => void;
}

export const NavBar: FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const onEnterClick = (e: any) => {
        if (e.key === 'Enter') {
            props.onSearchClick();
            onMenuClick();
            setValue('');
        }
    };

    const setSearchQuery = () => {
        props.onSearchClick();
        onMenuClick();
        setValue('');
    };

    const setSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        dispatch(searchPageActions.setQuery(e.target.value.trim()));
    };

    return (
        <>
            <Wrapper isOpen={isOpen}>
                {navInfo?.map((item: NavType) => (
                    <NavEl key={item.title} to={item.link} onClick={onMenuClick}>
                        {item.title}
                    </NavEl>
                ))}
                <SearchButton>
                    <SearchInput
                        value={value}
                        placeholder='Search...'
                        onChange={setSearchValue}
                        onKeyDown={(e) => onEnterClick(e)}
                    />
                    <SearchIconBlock onClick={() => setSearchQuery()}>
                        <SearchIcon />
                    </SearchIconBlock>
                </SearchButton>
            </Wrapper>
            <IconWrapper onClick={onMenuClick}>
                <MenuIcon />
            </IconWrapper>
        </>
    );
};
