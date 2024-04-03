import React from "react";
import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
    name: string;
    placeholder: string;
    dependencies?: NamePath[];
};

export const CustomPasswordInput: React.FC<Props> = ({
    name,
    placeholder,
    dependencies,
                                    }) => {
    return (
        <Form.Item
            name={ name }
            dependencies={ dependencies }
            hasFeedback={ true }
            rules={[
                {required: true, message: 'Required field'},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value) {
                            return Promise.resolve();
                        }
                        if (name == 'confirmPassword' && (!value || getFieldValue('password') === value)){
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        }
                        if (value && value < 3) {
                            return Promise.reject(new Error('Enter at least 3 symbols'));
                        }
                    }
                })
            ]}
        >
            <Input.Password
                placeholder={ placeholder }
                size={ 'large' }
            />
        </Form.Item>
    );
}