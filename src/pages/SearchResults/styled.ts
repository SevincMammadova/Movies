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

export const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 10px;
    color: ${themeColors.white};
    font-size: 15px;
    outline: none;
    background-color: ${themeColors.pink};
`;

export const SearchButton = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    background-color: ${themeColors.pink};
    gap: 6px;
    padding: 6px 12px 6px 9px;
`;

export const SearchInput = styled.input`
    max-width: 600px;
    ::placeholder {
        color: ${themeColors.white};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${themeColors.white};
    }

    ::-ms-input-placeholder {
        color: ${themeColors.white};
    }
    color: ${themeColors.white};
    font-size: 16px;
    background: none;
    outline: none;
    border: none;
`;

export const SearchIconBlock = styled.div`
    display: flex;
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
        transform: scale(1.5);
    }
`;
