import {
    homePageReducer,
    homePagaSliceName,
    genresPageName,
    genresPageReducer,
    genrePageName,
    genrePageReducer,
    playerPageName,
    playerPageReducer,
    topPageName,
    topPageReducer,
    searchPageName,
    searchPageReducer
} from '../pages';

export const rootReducer = {
    [homePagaSliceName]: homePageReducer,
    [genresPageName]: genresPageReducer,
    [genrePageName]: genrePageReducer,
    [playerPageName]: playerPageReducer,
    [topPageName]: topPageReducer,
    [searchPageName]: searchPageReducer
};
