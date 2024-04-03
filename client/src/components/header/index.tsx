import React from 'react';
import styles from './index.module.css';
import {
    Layout,
    Space,
    Typography
} from "antd";
import {LoadingOutlined, LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import { CustomButton } from "../customButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Header: React.FC = () => {
    return (
        <Layout.Header className={ styles.header }>
            <Space>
                <TeamOutlined className={ styles.teamIcon }/>
                <Link to={ Paths.home }>
                    <CustomButton type='text' ghost={ true }>Employees
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={ Paths.register }>
                    <CustomButton type='primary' icon={ <UserOutlined /> }>Register</CustomButton>
                </Link>
                <Link to={ Paths.login }>
                    <CustomButton type='primary' icon={ <LoginOutlined /> }>Login</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}