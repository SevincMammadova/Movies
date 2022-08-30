export type InitialStateType = {
    populars: [PopularsType];
    releases: [PopularsType];
};

export type PopularsType = {
    id: number;
    adult: boolean;
    title: string;
    name?: string;
    video: boolean;
    overview: string;
    genre_ids: Array<number>;
    vote_count: number;
    popularity: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    original_title: string;
    original_language: string;
};
