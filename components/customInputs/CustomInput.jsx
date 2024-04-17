import React from 'react';
import {Form, Input} from "antd";
import {useTranslation} from "next-i18next";

function CustomInput({name, label, prefix, errorMessage}) {
    const {t} = useTranslation();

    const isPassword = name === 'password';
    const rules = [
        {
            required: true,
            message: `${t('pleaseInput')} ${label}`,
        },
        ...(name === 'email' ? [{type: 'email', message: t('isEmail')}] : []),
    ];

    return (
        <Form.Item
            name={name}
            label={label}
            rules={rules}
            validateStatus={errorMessage && 'error'}
            help={errorMessage}
        >
            {isPassword ? (
                <Input.Password className="rounded-[2px] p-3" placeholder={label} prefix={prefix}/>
            ) : (
                <Input className="rounded-[2px] p-3" placeholder={label} prefix={prefix}/>
            )}
        </Form.Item>
    );
}

export default CustomInput;
