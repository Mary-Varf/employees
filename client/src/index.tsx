import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Paths } from "./paths";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ConfigProvider, theme } from "antd";
import { Auth } from "./features/auth/auth";
import { Employees } from "./pages/employees";
import { AddEmployee } from "./pages/addEmployee";
import {Status} from "./pages/status";

const router = createBrowserRouter([
    {
        path: Paths.home,
        element: <Employees />,
    },
    {
        path: Paths.login,
        element: <Login />,
    },
    {
        path: Paths.register,
        element: <Register />,
    },
    {
        path: Paths.employeeAdd,
        element: <AddEmployee />,
    },
    {
        path: `${Paths.status}/:status`,
        element: <Status />,
    },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ConfigProvider theme={{
            algorithm: theme.darkAlgorithm
        }}>
            <Auth>
                <RouterProvider router={ router } />
            </Auth>
        </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
