import styled from 'styled-components';

import { themeColors } from '../../const';

export const Wrapper = styled.div``;

export const Header = styled.header`
    position: sticky;
    z-index: 999;
    top: 0;
    background-color: ${themeColors.chineseBlack};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    padding: 25px;
`;
export const Main = styled.main``;
export const Footer = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 120px;
    background-color: ${themeColors.valentino};
    padding: 70px;
`;
