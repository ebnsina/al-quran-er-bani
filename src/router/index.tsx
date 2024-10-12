import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../routes/error-page';
import Root from '../routes/Root';
import Watch from '../routes/Watch';
import Index from '../routes/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'watch/:watchId',
        element: <Watch />,
      },
    ],
  },
]);

export default router;
