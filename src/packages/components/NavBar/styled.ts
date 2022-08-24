import styled from 'styled-components';

import { themeColors } from '../../const';

interface NProps {
    isActive?: boolean;
}

export const Wrapper = styled.nav`
    display: flex;
    gap: 30px;
`;

export const NavEl = styled.div<NProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ isActive }) => (isActive ? themeColors.pink : themeColors.white)};
    font-size: 20px;
    &:hover {
        color: ${themeColors.pink};
        cursor: pointer;
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
