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
    PlayerWrapper,
    PosterImage,
    PosterWrapper,
    OverviewWrapper
} from './styled';
import { initThunk } from './thunks';

export const PlayerPage: FC = () => {
    const { id, mediaType } = useParams();
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

    useEffect(() => {
        dispatch(initThunk({ mediaType, id }));
    }, [dispatch]);

    const videoData: any = videos.results.slice(0, 1);

    const key = videoData[0]?.key;

    console.log(key);

    const productionCompanyNames = production_companies?.map((item: any) => item?.name)?.join(',');

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
                        <MetaDataItem>{tagline}</MetaDataItem>
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
            <PlayerWrapper>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${key}`}
                    controls
                    width={'70%'}
                    height={'500px'}
                    style={{ width: '100%', height: '100%' }}
                />
            </PlayerWrapper>
        </Wrapper>
    );
};
