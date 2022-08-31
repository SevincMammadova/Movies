import styled from 'styled-components';

import { themeColors } from '../../packages/const';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 80px;
`;

export const GoBackButton = styled.div`
    display: inline-flex;
    width: fit-content;
    padding: 10px;
    border: 1px solid ${themeColors.pink};
    color: ${themeColors.white};
    font-size: 20px;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

export const PosterBlock = styled.div`
    display: flex;
    gap: 45px;
    flex-wrap: wrap;
`;
