import React from "react";
import {Link, useParams} from "react-router-dom";
import {Button, Result, Row} from "antd";

const Statuses: Record<string, string> = {
    created: 'Employee created',
    updated: 'Employee updated',
    deleted: 'Employee deleted',
}
export const Status = () => {
    const { status } = useParams();

    return (
        <Row align='middle' justify='center' style={ {width: '100%'} }>
            <Result status={status ? 'success' : 404}
                    title={status ? Statuses[status] : "Can't find"}
                    extra={
                        <Button><Link to='/'>Main Page</Link></Button>
                    }
            />
        </Row>
    )
}