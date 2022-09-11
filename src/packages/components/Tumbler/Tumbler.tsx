import React, { FC, useState } from 'react';

import { TumblerButton, Wrapper } from './styled';

interface Props {
    data: string[];
    callback: (data: string) => void;
}

export const Tumbler: FC<Props> = ({ data, callback }) => {
    const [selectValue, setSelectValue] = useState(data[0]);

    const onClickTumbler = (value: string) => {
        setSelectValue(value);
        callback(value);
    };
    return (
        <Wrapper>
            {data?.map((item: string) => (
                <TumblerButton
                    key={item}
                    isActive={item === selectValue}
                    onClick={() => onClickTumbler(item)}
                >
                    {item}
                </TumblerButton>
            ))}
        </Wrapper>
    );
};
