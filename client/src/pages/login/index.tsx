import React, { useState } from "react";
import { Layout } from "../../components/layout";
import {Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/customInput";
import { CustomPasswordInput } from "../../components/customPasswordInput";
import { CustomButton } from "../../components/customButton";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useLoginMutation, UserData } from "../../app/services/auth";
import { isErrorWithMsg } from "../../utils/isErrorWithMsg";
import { ErrorWithMessage } from "../../types";
import { ErrorMessage } from "../../components/errorMessage";

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loginUser, loginUserResult] = useLoginMutation();

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate('/');
        } catch (error) {
            const newErr: ErrorWithMessage = error as ErrorWithMessage;
            if (newErr?.data?.message) {
                setError(`${newErr?.data?.message}`);
            }
            else {
                setError('Something went wrong');
            }
        }
    }

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <Card title="Ligin" style={{ width: '30rem' }}>
                    <Form onFinish={ login }>
                        <CustomInput name='email' placeholder='Email' type='email'/>
                        <CustomPasswordInput name='password' placeholder='password' />
                        <CustomButton type='primary' htmlType='submit'>Login</CustomButton>
                    </Form>
                    <Space direction='vertical' size='large'>
                        <Typography.Text>
                            Don't have account? <Link to={ Paths.register }>Registration</Link>
                        </Typography.Text>
                        <ErrorMessage message={ error }/>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}