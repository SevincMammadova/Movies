import styled from 'styled-components';

import { themeColors } from '../../const';

export const Wrapper = styled.div`
    display: flex;
    gap: 12px;
`;
export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TextWrapper = styled.div``;
export const Text = styled.a`
    color: ${themeColors.white};
    text-decoration: none;
    &:hover {
        color: ${themeColors.pink};
    }
`;
