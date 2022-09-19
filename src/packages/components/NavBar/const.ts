import { PATH_NAMES } from '../../utils/path';

export const navInfo = [
    {
        title: 'Home',
        link: PATH_NAMES.home
    },
    {
        title: 'Genres',
        link: PATH_NAMES.genres
    },
    {
        title: 'Top Rated',
        link: PATH_NAMES.topRated
    },
    {
        title: 'Contacts',
        link: PATH_NAMES.contacts
    }
];

export type NavType = {
    title: string;
    link: string;
};
