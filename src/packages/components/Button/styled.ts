import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { themeColors } from '../../const';

export const ButtonWrapper = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 220px;
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
