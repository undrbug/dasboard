import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import ProductDashboard from '../pages/productDashboard/ProductDashboard';
import UserDashboard from '../pages/userDashboard/UserDashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/usuarios",
        element: <UserDashboard />,
    },
    {
        path: "/productos",
        element: <ProductDashboard />,
    },
]);

export default router;