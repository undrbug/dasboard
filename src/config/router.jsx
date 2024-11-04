import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import ProductDashboard from '../pages/productDashboard/ProductDashboard';
import UserDashboard from '../pages/userDashboard/UserDashboard';
import ProductDetail from '../components/productDetail/ProductDetail';
import UserDetail from '../components/userDetail/UserDetail';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: "/usuarios",
                element: <UserDashboard />,
            },
            {
                path: "/productos",
                element: <ProductDashboard />,
            },
            {
                path: "/usuario/:id",
                element: <UserDetail />,
            },
            {
                path: "/producto/:id",
                element: <ProductDetail />,
            },
        ]
    }
]);

export default router;