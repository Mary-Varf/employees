import React from "react";
import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import {CustomInput} from "../customInput";
import {CustomButton} from "../customButton";
import {ErrorMessage} from "../errorMessage";

type Props<T> = {
    onFinish: (values: T) => void,
    btnText: string,
    title: string,
    error?: string,
    employee?: T,
}

export const EmployeeForm = ({
    onFinish,
    title,
    btnText,
    error,
    employee,
}: Props<Employee>) => {
    return (
        <Card title={title}
              style={ {width: '30rem'} }
        >
            <Form name='employeeForm'
                  onFinish={onFinish}
                  initialValues={employee}
            >
                <CustomInput type='text' name='firstName' placeholder='First Name' />
                <CustomInput type='text' name='lastName' placeholder='Last Name' />
                <CustomInput type='number' name='age' placeholder='Age' />
                <CustomInput type='text' name='address' placeholder='Address' />
                <Space>
                    <ErrorMessage message={error}/>
                    <CustomButton type='primary' htmlType='submit'>{ btnText }</CustomButton>
                </Space>
            </Form>
        </Card>
    )
}