import styled from 'styled-components';

import { themeColors } from '../../packages/const';

interface Props {
    isActive: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 80px;
`;

export const TumblerWrapper = styled.div`
    display: flex;
    width: fit-content;
    border: 1px solid ${themeColors.purple};
    border-radius: 5px;
`;

export const TumblerButton = styled.div<Props>`
    color: ${({ isActive }) => (isActive ? themeColors.white : themeColors.pink)};
    background-color: ${({ isActive }) => (isActive ? themeColors.pink : '')};
    height: 50px;
    display: flex;
    padding: 10px;
    cursor: pointer;
    justify-content: center;
    &:hover {
        color: ${themeColors.white};
        background-color: ${themeColors.valentino};
    }
`;

export const GenresBlock = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;
