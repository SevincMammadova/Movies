import {
    homePageReducer,
    homePagaSliceName,
    genresPageName,
    genresPageReducer,
    genrePageName,
    genrePageReducer
} from '../pages';

export const rootReducer = {
    [homePagaSliceName]: homePageReducer,
    [genresPageName]: genresPageReducer,
    [genrePageName]: genrePageReducer
};
