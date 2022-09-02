/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import React, { FC, useEffect } from 'react';

import ReactPlayer from 'react-player/lazy';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { themeColors } from '../../packages/const';
import { IMG_API } from '../../packages/utils/apiKey';
import { AppDispatch, RootState } from '../../store/store';
import {
    Wrapper,
    MetaDataItem,
    MetaDataWrapper,
    MetaInfoBlock,
    PlayerBlock,
    VideoTitle,
    VideoWrapper,
    PosterImage,
    PosterWrapper,
    OverviewWrapper
} from './styled';
import { initThunk } from './thunks';

export const PlayerPage: FC = () => {
    const { mediaId, category } = useParams();

    const dispatch = useDispatch<AppDispatch>();

    const {
        poster_path,
        overview,
        runtime,
        title,
        name,
        original_name,
        original_title,
        tagline,
        videos,
        production_companies
    } = useSelector((state: RootState) => state.playerPage.mediaData);

    console.log('player page', useParams());

    useEffect(() => {
        dispatch(initThunk({ mediaType: category, id: mediaId }));
    }, [dispatch]);

    const productionCompanyNames = production_companies?.map((item: any) => item?.name)?.join(', ');

    const convertRuntime = (): string => {
        const h = Math.floor(runtime / 3600);
        const m = Math.floor((runtime % 3600) / 60);
        const s = Math.floor((runtime % 3600) % 60);
        let result = '';

        if (h) {
            result += h + 'h ';
        }
        if (m) {
            result += m + 'm ';
        }
        if (s) {
            result += s + 'sec';
        }

        return result;
    };

    return (
        <Wrapper>
            <MetaInfoBlock>
                <PosterWrapper>
                    <PosterImage src={IMG_API + poster_path || ''} />
                </PosterWrapper>
                <MetaDataWrapper>
                    <div>
                        <MetaDataItem color={themeColors.pink}>Title:</MetaDataItem>
                        <MetaDataItem>{title || name}</MetaDataItem>
                    </div>
                    <div>
                        <MetaDataItem color={themeColors.pink}>Tagline:</MetaDataItem>
                        <MetaDataItem>{tagline || '-'}</MetaDataItem>
                    </div>
                    <div>
                        <MetaDataItem color={themeColors.pink}>Original Title:</MetaDataItem>
                        <MetaDataItem>{original_title || original_name}</MetaDataItem>
                    </div>
                    {runtime && (
                        <div>
                            <MetaDataItem color={themeColors.pink}>Runtime:</MetaDataItem>
                            <MetaDataItem>{convertRuntime()}</MetaDataItem>
                        </div>
                    )}

                    <div>
                        <MetaDataItem color={themeColors.pink}>Production:</MetaDataItem>
                        <MetaDataItem>{productionCompanyNames}</MetaDataItem>
                    </div>
                </MetaDataWrapper>
            </MetaInfoBlock>
            <OverviewWrapper>{overview}</OverviewWrapper>
            <PlayerBlock>
                {videos?.results?.map((item: any) => (
                    <VideoWrapper key={item.id}>
                        <VideoTitle>{item?.name || item?.title}</VideoTitle>
                        <ReactPlayer
                            key={item.id}
                            controls
                            url={`https://www.youtube.com/watch?v=${item.key}`}
                        />
                    </VideoWrapper>
                ))}
            </PlayerBlock>
        </Wrapper>
    );
};
