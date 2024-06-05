import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import {Form} from "antd";

const { SHOW_PARENT } = TreeSelect;

export default function CustomTreeInput({name, label, placeholder, treeData}) {
    const [value, setValue] = useState();
    const onChange = (newValue) => {
        console.log('onChange ', newValue);
        setValue(newValue);
    };

    const tProps = {
        treeData,
        value,
        onChange,
        treeDefaultExpandAll: true,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: placeholder,
        showSearch: true,
        allowClear: true,
        treeNodeFilterProp: 'title',
        style: {
            width: '100%',
        },
    };
    return (
            <Form.Item
                name={name}
                label={label}
                className="!m-0"
            >
            <TreeSelect {...tProps} />
        </Form.Item>
    );
}
