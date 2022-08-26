import React, { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '../packages';
import { PATH_NAMES } from '../packages/utils/path';
import { Contacts, Genres, HomePage, TopPage } from '../pages';

export const App: FC = () => {
    return (
        <Routes>
            <Route path={PATH_NAMES.home} element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path={PATH_NAMES.genres} element={<Genres />} />
                <Route path={PATH_NAMES.top250} element={<TopPage />} />
                <Route path={PATH_NAMES.contacts} element={<Contacts />} />
            </Route>
        </Routes>
    );
};
