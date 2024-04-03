import React from "react";
import { Form, Button } from "antd";

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?:  "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?:  "default" | "circle" | "round" | undefined;
    icon?:  React.ReactNode;
    ghost?: boolean;
};

export const CustomButton: React.FC<Props> = ({
                                                  children,
                                                  htmlType= "button",
                                                  type,
                                                  danger,
                                                  loading,
                                                  shape,
                                                  icon,
                                                  onClick,
                                                  ghost,
}) => {
    return (
        <Form.Item>
            <Button
                htmlType={ htmlType }
                type={ type }
                danger={ danger }
                loading={ loading }
                shape={ shape }
                icon={ icon }
                onClick={ onClick }
                ghost={ ghost }
            >
                { children }
            </Button>
        </Form.Item>
    );
}