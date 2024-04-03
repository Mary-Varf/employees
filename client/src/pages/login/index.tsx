import React from "react";
import { Layout } from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/customInput";
import {CustomPasswordInput} from "../../components/customPasswordInput";
import {CustomButton} from "../../components/customButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Login: React.FC = () => {
    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title="Ligin" style={{ width: '30rem' }}>
                    <Form onFinish={() =>console.log('finish')}>
                        <CustomInput name='Name' placeholder='Name' />
                        <CustomInput name='Email' placeholder='Email' type='email'/>
                        <CustomPasswordInput name='Password' placeholder='password' />
                        <CustomButton type='primary' htmlType='submit'>Login</CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Don't have account? <Link to={ Paths.register }>Registration</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}