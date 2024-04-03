import React from "react";
import { Layout as AntdLayout } from 'antd';
import { Header } from "../header";
import styles from "./index.module.css";

type Props = {
    children: React.ReactNode,
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header />
            <AntdLayout.Content style={{ height: '100%' }}>
                { children }
            </AntdLayout.Content>
        </div>
    )
}