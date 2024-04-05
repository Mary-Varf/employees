import React, {useEffect, useState} from "react";
import { Layout } from "../../components/layout";
import { Row } from "antd";
import { EmployeeForm } from "../../components/employeeForm";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useAddEmployeeMutation} from "../../app/services/employees";
import {Employee} from "@prisma/client";
import {Paths} from "../../paths";
import {ErrorWithMessage} from "../../types";

export const AddEmployee = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [addEmployee] = useAddEmployeeMutation();

    useEffect(() => {
        if (!user) navigate('/login');
    }, [navigate, user])
    const handleAddEmployee = async(data: Employee) => {
        try {
            await addEmployee(data).unwrap();
            navigate(`${Paths.status}/created`);
        }
        catch(error) {
            const newError = error as ErrorWithMessage;
            setError(newError.data.message ? `${newError.data.message}` : 'Unknown error');
        }
    }

    return (
        <Layout>
            <Row align="middle"
                 justify="center"
            >
                <EmployeeForm
                    onFinish={handleAddEmployee}
                    btnText='Add'
                    title='Add employee'
                    error={ error }
                />
            </Row>
        </Layout>
    )
}