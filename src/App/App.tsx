import React, { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '../packages';
import { PATH_NAMES } from '../packages/utils/path';
import {
    Contacts,
    Genres,
    HomePage,
    TopPage,
    GenrePage,
    PlayerPage,
    MoreMedia,
    SearchResults,
    NotFoundPage
} from '../pages';

export const App: FC = () => {
    return (
        <Routes>
            <Route path={PATH_NAMES.home} element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path={PATH_NAMES.playerPage} element={<PlayerPage />} />
                <Route
                    path={`${PATH_NAMES.genre}/${PATH_NAMES.playerPage}`}
                    element={<PlayerPage />}
                />
                <Route
                    path={`${PATH_NAMES.topRated}/${PATH_NAMES.playerPage}`}
                    element={<PlayerPage />}
                />
                <Route
                    path={`${PATH_NAMES.search}/${PATH_NAMES.playerPage}`}
                    element={<PlayerPage />}
                />
                <Route
                    path={`${PATH_NAMES.more}/${PATH_NAMES.playerPage}`}
                    element={<PlayerPage />}
                />
                <Route path={PATH_NAMES.genres} element={<Genres />} />
                <Route path={PATH_NAMES.topRated} element={<TopPage />} />
                <Route path={PATH_NAMES.contacts} element={<Contacts />} />
                <Route path={PATH_NAMES.genre} element={<GenrePage />} />
                <Route path={PATH_NAMES.more} element={<MoreMedia />} />
                <Route path={PATH_NAMES.search} element={<SearchResults />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};
