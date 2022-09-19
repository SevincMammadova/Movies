import styled from 'styled-components';

import { themeColors } from '../../const';

interface Props {
    isActive?: boolean;
    disabled?: boolean;
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`;

export const PageButton = styled.div<Props>`
    padding: 5px;
    border-radius: 3px;
    border: 0.5px solid ${themeColors.pink};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    color: ${themeColors.white};
    cursor: pointer;
    background-color: ${({ isActive }) => (isActive ? themeColors.pink : '')};
    &:hover {
        background-color: ${themeColors.pink};
    }
`;

export const IconWrapper = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    background: none;
    border: none;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
