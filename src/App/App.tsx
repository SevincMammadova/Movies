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
    TvShoes,
    Movies,
    PlayerPage
} from '../pages';

export const App: FC = () => {
    return (
        <Routes>
            <Route path={PATH_NAMES.home} element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path={PATH_NAMES.genres} element={<Genres />} />
                <Route path={PATH_NAMES.top250} element={<TopPage />} />
                <Route path={PATH_NAMES.contacts} element={<Contacts />} />
                <Route path={PATH_NAMES.genres} element={<Genres />} />
                <Route path={PATH_NAMES.genre} element={<GenrePage />}>
                    <Route path={PATH_NAMES.moviesGenre} element={<Movies />} />
                    <Route path={PATH_NAMES.TvGenre} element={<TvShoes />} />
                </Route>
                <Route path={PATH_NAMES.playerPage} element={<PlayerPage />} />
            </Route>
        </Routes>
    );
};
