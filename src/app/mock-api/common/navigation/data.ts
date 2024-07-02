/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'feather:grid',
        link: '/dashboard',
    },
    {
        id: 'restaurant',
        title: 'Restaurants',
        type: 'basic',
        icon: 'mat_solid:food_bank',
        link: '/restaurant-list',
    },
    // {
    //     id: 'create-restaurant',
    //     title: 'Create Restaurant',
    //     type: 'basic',
    //     icon: 'mat_solid:food_bank',
    //     link: '/create-restaurant',
    // },
    {
        id: 'logOut',
        title: 'Logout',
        type: 'basic',
        icon: 'feather:log-out',
        link: '/sign-out',
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
