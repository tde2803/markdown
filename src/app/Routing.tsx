import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EditorPage } from 'pages/editor';
import { FunctionComponent } from 'react';

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <EditorPage />,
    },
]);

export const Routing: FunctionComponent = () => <RouterProvider router={browserRouter} />;
