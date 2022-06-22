import { Explore, Following, Home } from '../pages/';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/explore', component: Explore },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
