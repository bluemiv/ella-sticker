import React from 'react';
import { TPropsWithChildren } from '../types';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTE_PATH } from '../constants';
import { BaseLayout } from '../layout';
import { HomePage, MonthStickerPage, UserDashboardPage } from '../pages';
import SidebarLayout from '../layout/SidebarLayout';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <BaseLayout />,
    children: [
      {
        path: ROUTE_PATH.ROOT,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATH.USER_DASHBOARD,
        element: <SidebarLayout />,
        children: [
          {
            path: ROUTE_PATH.USER_DASHBOARD,
            element: <UserDashboardPage />,
          },
          {
            path: ROUTE_PATH.MONTH_STICKER,
            element: <MonthStickerPage />,
          },
        ],
      },
    ],
  },
]);

const Provider = ({ children }: TPropsWithChildren) => {
  return (
    <>
      <RouterProvider router={router} />
      {children}
    </>
  );
};

export default Provider;
