import React from "react";
import {Layout} from "../../components/layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/customInput";
import { CustomPasswordInput } from "../../components/customPasswordInput";
import { CustomButton } from "../../components/customButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

export const Register = () => {
    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title="Registration" style={{ width: '30rem' }}>
                    <Form onFinish={() =>console.log('finish')}>
                        <CustomInput name='name' placeholder='Name' />
                        <CustomInput name='email' placeholder='Email' type='email'/>
                        <CustomPasswordInput name='password' placeholder='Password' />
                        <CustomPasswordInput name='confirmPassword' placeholder='Repeat password' />
                        <CustomButton type='primary' htmlType='submit'>Register</CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Do you have account? <Link to={ Paths.login }>Registration</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}