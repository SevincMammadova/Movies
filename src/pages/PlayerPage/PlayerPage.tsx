/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import React, { FC, useEffect, useState } from 'react';

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
    OverviewWrapper,
    MetaDataText
} from './styled';
import { initThunk } from './thunks';
import { ProductionCompanyType, ProductionCountryType, VideosType } from './types';

export const PlayerPage: FC = () => {
    const { mediaId, category } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [playerId, setPlayerId] = useState('');
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
        production_companies,
        production_countries
    } = useSelector((state: RootState) => state.playerPage.mediaData);

    const playNow = (id: string) => {
        setPlayerId(id);
    };

    useEffect(() => {
        dispatch(initThunk({ mediaType: category, id: mediaId }));
    }, [dispatch]);

    const productionCompanyNames = production_companies
        ?.map((item: ProductionCompanyType) => item?.name)
        ?.join(', ');
    const productionCountryNames = production_countries
        ?.map((item: ProductionCountryType) => item?.name)
        ?.join(', ');

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
                    <MetaDataItem>
                        <MetaDataText color={themeColors.pink}> Title:</MetaDataText>
                        <MetaDataText> {title || name}</MetaDataText>
                    </MetaDataItem>
                    <MetaDataItem>
                        <MetaDataText color={themeColors.pink}> Original Title:</MetaDataText>
                        <MetaDataText> {original_title || original_name}</MetaDataText>
                    </MetaDataItem>
                    <MetaDataItem>
                        <MetaDataText color={themeColors.pink}> Tagline:</MetaDataText>
                        <MetaDataText> {tagline || '--'}</MetaDataText>
                    </MetaDataItem>
                    {runtime && (
                        <MetaDataItem>
                            <MetaDataText color={themeColors.pink}> Runtime:</MetaDataText>
                            <MetaDataText> {convertRuntime()}</MetaDataText>
                        </MetaDataItem>
                    )}
                    <MetaDataItem>
                        <MetaDataText color={themeColors.pink}> Production company:</MetaDataText>
                        <MetaDataText> {productionCompanyNames || '--'}</MetaDataText>
                    </MetaDataItem>
                    <MetaDataItem>
                        <MetaDataText color={themeColors.pink}> Production country:</MetaDataText>
                        <MetaDataText> {productionCountryNames || '--'}</MetaDataText>
                    </MetaDataItem>
                </MetaDataWrapper>
            </MetaInfoBlock>
            <OverviewWrapper>{overview}</OverviewWrapper>
            <PlayerBlock>
                {videos?.results?.map((item: VideosType) => (
                    <VideoWrapper key={item.id}>
                        <VideoTitle>{item?.name || item?.title}</VideoTitle>
                        <ReactPlayer
                            key={item.id}
                            controls
                            url={`https://www.youtube.com/watch?v=${item.key}`}
                            onPlay={() => playNow(item.id)}
                            playing={playerId === item.id}
                        />
                    </VideoWrapper>
                ))}
            </PlayerBlock>
        </Wrapper>
    );
};
