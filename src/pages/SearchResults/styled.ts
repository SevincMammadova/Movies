import styled from 'styled-components';

import { themeColors } from '../../packages/const';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 80px;
`;

export const QueryResult = styled.div`
    font-weight: 700;
    font-size: 15px;
    color: ${themeColors.green};
`;

export const ContentBlock = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

export const NotFound = styled.div`
    min-height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
