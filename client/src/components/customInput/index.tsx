import React from 'react';
import { Form, Input } from "antd";

type Props = {
    name: string;
    placeholder: string;
    type?: string;
    required?: boolean;
};

export const CustomInput: React.FC<Props> = ({
    name,
    placeholder,
    type = 'text',
    required = true,
}) => {
    return (
        <Form.Item
            name={ name }
            shouldUpdate={ true }
            rules={[{ required: required, message: 'Field mast be completed' }]}
        >
            <Input
                placeholder={ placeholder }
                type={ type }
                size='large'
            />
        </Form.Item>
    );
}