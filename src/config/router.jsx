import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/usuarios",
        element: <div>usuarios!</div>,
    },
    {
        path: "/productos",
        element: <div>productos!</div>,
    },
]);

export default router;