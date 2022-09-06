import {
    homePageReducer,
    homePagaSliceName,
    genresPageName,
    genresPageReducer,
    genrePageName,
    genrePageReducer,
    playerPageName,
    playerPageReducer
} from '../pages';

export const rootReducer = {
    [homePagaSliceName]: homePageReducer,
    [genresPageName]: genresPageReducer,
    [genrePageName]: genrePageReducer,
    [playerPageName]: playerPageReducer
};
