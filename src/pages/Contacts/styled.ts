import styled from 'styled-components';

import { themeColors } from '../../packages/const';

interface IProps {
    size?: string;
    color?: string;
}

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 80px 80px 80px;
    gap: 24px;
`;

export const Text = styled.div<IProps>`
    font-weight: 700;
    font-size: ${({ size }) => size || '34px'};
    color: ${({ color }) => color || themeColors.white};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;
export const FieldContainer = styled.div`
    display: flex;
    gap: 28px;
`;

export const Field = styled.input`
    width: 370px;
    border: none;
    outline: none;
    padding: 13px 28px;
    border-radius: 5px;
    background-color: ${themeColors.valentino};
    font-weight: 400;
    font-size: 15px;
    ::placeholder {
        color: ${themeColors.pink};
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: ${themeColors.pink};
    }

    ::-ms-input-placeholder {
        color: ${themeColors.pink};
    }
    color: ${themeColors.white};
`;

export const TextArea = styled(Field)`
    width: 770px;
    height: 200px;
    resize: none;
`;

export const SubmitButton = styled.input`
    color: ${themeColors.white};
    font-weight: 400;
    font-size: 18px;
    border: none;
    outline: none;
    width: 200px;
    background: ${themeColors.pink};
    border-radius: 5px;
    padding: 4px 31px;
    cursor: pointer;
    align-self: end;
`;
