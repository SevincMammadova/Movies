import styled from 'styled-components';

import { themeColors } from '../../const';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const PosterWrapper = styled.div`
    width: 220px;
    height: 305px;
    border-radius: 5px;
    background: transparent;
    position: relative;
`;

export const PosterImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 45px;
    color: ${themeColors.pink};
    border: 2px solid ${themeColors.purple};
    padding: 0 40px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

export const PosterName = styled.div`
    color: ${themeColors.white};
    font-size: 18px;
    font-weight: 600;
    width: 220px;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const RunTime = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: ${themeColors.white};
    z-index: 3;
    background-color: ${themeColors.gray};
`;
