export type MediaType = {
    poster_path: string;
    title: string;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: [];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    production_companies: ProductionCompanyType[];
    production_countries: ProductionCountryType[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
    name?: string;
    original_name?: string;
    video: boolean;
    videos: { results: VideosType[] };
    vote_average: number;
    vote_count: number;
};

export type VideosType = {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    title: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
};

export type ProductionCompanyType = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
};

export type ProductionCountryType = {
    iso_3166_1: string;
    name: string;
};
