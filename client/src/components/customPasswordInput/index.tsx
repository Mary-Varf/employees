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
}: Props) => {
    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: "Required",
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value ) {
                            return Promise.resolve();
                        }

                        if (name === 'confirmPassword') {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("Passwords should be identical")
                            );
                        } else {
                            if (value.length < 3) {
                                return Promise.reject(
                                    new Error("Not less than 3 symbols")
                                );
                            }

                            return Promise.resolve();
                        }
                    },
                }),
            ]}
        >
            <Input.Password placeholder={placeholder} size="large" />
        </Form.Item>
    );
};