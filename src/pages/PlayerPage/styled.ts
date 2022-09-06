import styled from 'styled-components';

import { themeColors } from '../../packages/const';

interface Props {
    color?: string;
}

export const Wrapper = styled.div`
    display: flex;
    padding: 0 80px;
    flex-direction: column;
    gap: 40px;
`;
export const MetaInfoBlock = styled.div`
    display: flex;
    gap: 30px;
`;

export const PosterWrapper = styled.div`
    width: 220px;
    height: 305px;
    border-radius: 5px;
    background: transparent;
`;

export const PosterImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MetaDataWrapper = styled.div`
    display: flex;
    min-width: 600px;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`;

export const MetaDataItem = styled.div<Props>`
    display: inline-flex;
    gap: 100px;
    justify-content: space-between;
`;

export const MetaDataText = styled.div<Props>`
    color: ${({ color }) => color || themeColors.white};
`;

export const OverviewWrapper = styled.div`
    color: ${themeColors.white};
    font-size: 18px;
    padding: 10px 0;
`;

export const PlayerBlock = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`;

export const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 5px;
    background-color: ${themeColors.darkGreen};
    padding: 10px;
`;

export const VideoTitle = styled.div`
    color: ${themeColors.white};
    font-size: 18px;
    font-weight: 700;
`;
