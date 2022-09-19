import styled from 'styled-components';

import { themeColors } from '../../const';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    background-color: ${themeColors.chineseBlack};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    width: 100%;
    padding: 25px;
`;
export const Main = styled.main`
    margin: 120px 0;
`;
export const Footer = styled.footer`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 2fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 120px;
    background-color: ${themeColors.valentino};
    padding: 70px;

    @media only screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 2fr);
    }
`;
