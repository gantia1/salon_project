import React from 'react';
import {Form, Select} from "antd";

const {Option} = Select;

function CustomSelect({name, label, placeholder, items}) {
    return (
        <Form.Item
            name={name}
            label={label}
            className="custom-select"
        >
            <Select
                placeholder={placeholder}
                allowClear
                showSearch
            >
                {items?.map(item => (
                    <Option key={item.value} value={item.value}>
                        {item.label}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
}

export default CustomSelect;
