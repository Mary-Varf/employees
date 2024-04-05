import React from 'react';
import styles from './index.module.css';
import {
    Layout,
    Space,
    Typography
} from "antd";
import {
    LoadingOutlined,
    LoginOutlined, LogoutOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import { CustomButton } from "../customButton";
import {Link, useNavigate} from "react-router-dom";
import { Paths } from "../../paths";
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";

export const Header: React.FC = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch= useDispatch();

    const logoutClick = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <Layout.Header className={ styles.header }>
            <Space>
                <TeamOutlined className={ styles.teamIcon }/>
                <Link to={ Paths.home }>
                    <CustomButton type='text' >Employees
                    </CustomButton>
                </Link>
            </Space>
            {
                user ? (
                    <CustomButton type='primary'
                                  icon={<LogoutOutlined />}
                                  onClick={logoutClick}
                    >Logout</CustomButton>
                ) : (
                    <Space>
                        <Link to={ Paths.register }>
                            <CustomButton type='primary' icon={ <UserOutlined /> }>Register</CustomButton>
                        </Link>
                        <Link to={ Paths.login }>
                            <CustomButton type='primary' icon={ <LoginOutlined /> }>Login</CustomButton>
                        </Link>
                    </Space>
                )
            }
        </Layout.Header>
    )
}