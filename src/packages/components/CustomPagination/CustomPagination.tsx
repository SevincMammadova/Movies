import React, { FC } from 'react';

import { NextIcon, PrewIcon, ThreeDots } from '../../icons';
import { usePagination } from '../../utils/usePagination';
import { Wrapper, PageButton, IconWrapper } from './styled';

interface Props {
    totalPages: number;
    currentPage: number;
    onPageChange: (value: number | string) => void;
}

export const CustomPagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
    const paginationRange: any = usePagination({
        totalPages: totalPages >= 500 ? 500 : totalPages,
        currentPage,
        siblingPagesCount: 3
    });

    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNextPage = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevPage = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange?.length - 1];

    return (
        <Wrapper>
            <IconWrapper onClick={() => onPrevPage()} disabled={currentPage === 1}>
                <PrewIcon />
            </IconWrapper>
            {paginationRange?.map((item: number | string) =>
                item === 'DOTS' ? (
                    <ThreeDots key={item} />
                ) : (
                    <PageButton
                        key={item}
                        isActive={item === currentPage}
                        onClick={() => onPageChange(item)}
                    >
                        {item}
                    </PageButton>
                )
            )}
            <IconWrapper onClick={() => onNextPage()} disabled={currentPage === lastPage}>
                <NextIcon />
            </IconWrapper>
        </Wrapper>
    );
};
