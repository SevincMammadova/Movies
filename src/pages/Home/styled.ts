import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { themeColors } from '../../packages/const';

interface Props {
    size?: string;
}

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const PosterContainer = styled.div`
    width: 100%;
    height: 580px;
    position: relative;
`;

export const WelcomeImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    opacity: 0.7;
`;

export const PosterTextBlock = styled.div`
    position: absolute;
    top: 50%;
    left: 90px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PosterText = styled.span<Props>`
    font-weight: 700;
    font-size: ${({ size }) => size || '45px'};
    color: ${themeColors.white};
`;

export const ListBlock = styled.div`
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    gap: 45px;
`;

export const BlockTitle = styled.div`
    color: #ffffff;
    font-weight: 700;
    font-size: 36px;
    line-height: 28px;
    text-transform: capitalize;
`;

export const PosterBlock = styled.div`
    display: flex;
    gap: 45px;
    flex-wrap: wrap;
`;

export const MoreButton = styled(Link)`
    text-decoration: none;
    color: ${themeColors.green};
    font-weight: 700;
    font-size: 24px;
    text-transform: capitalize;
    cursor: pointer;
    align-self: end;
    &:hover {
        color: ${themeColors.green2};
    }
`;
