import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { themeColors } from '../../const';

interface NProps {
    isActive?: boolean;
    isOpen?: boolean;
}

export const Wrapper = styled.nav<NProps>`
    display: flex;
    gap: 30px;
    align-items: center;
    position: relative;

    @media screen and (max-width: 950px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 67px;
        right: 27px;
        background-color: ${themeColors.purple};
        z-index: 1000;
        padding: 10px;
        border-radius: 5px;
    }
`;

export const NavEl = styled(NavLink)<NProps>`
    display: inline-flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: ${themeColors.white};
    font-size: 20px;
    &:hover {
        color: ${themeColors.pink};
        cursor: pointer;
    }
    &.active {
        color: ${themeColors.pink};
    }
    @media screen and (max-width: 950px) {
        justify-content: flex-start;
    }
`;

export const SearchButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 207px;
    height: 40px;
    border-radius: 5px;
    background-color: ${themeColors.pink};
    gap: 6px;
    padding: 6px 12px 6px 9px;
`;

export const SearchInput = styled.input`
    max-width: 160px;
    ::placeholder {
        color: ${themeColors.white};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${themeColors.white};
    }

    ::-ms-input-placeholder {
        color: ${themeColors.white};
    }
    color: ${themeColors.white};
    font-size: 16px;
    background: none;
    outline: none;
    border: none;
`;

export const SearchIconBlock = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        transform: scale(1.5);
    }
`;

export const IconWrapper = styled.div`
    display: none;
    vertical-align: middle;
    @media screen and (max-width: 950px) {
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
    }
`;
