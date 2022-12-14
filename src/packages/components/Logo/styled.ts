import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { themeColors } from '../../const';

export interface LProps {
    fontSize?: string;
}

export const Wrapper = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

export const LogoTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const LogoText = styled.span<LProps>`
    color: ${({ color }) => color || themeColors.white};
    font-size: ${(props) => props.fontSize || '24px'};
    weight: 600;
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
`;
