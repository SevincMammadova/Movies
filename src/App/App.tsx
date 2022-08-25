import React, { FC } from 'react';

import { Poster } from '../packages/components';
import { MainLayout } from '../packages/layouts';

export const App: FC = () => {
    return (
        <MainLayout>
            <>
                <Poster
                    btnText='Watch Now'
                    posterName='офигет какое длинное название фильма надеюсь сработает'
                    runtime='2h 30min'
                />

                <Poster btnText='Triller' />
            </>
        </MainLayout>
    );
};
