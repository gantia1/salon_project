import React from 'react';
import { Form, Input } from "antd";
import Lock from "@/public/assets/images/svg/lock.svg";
import { useTranslation } from "next-i18next";

function PasswordConfirm() {
    const { t } = useTranslation();

    const passwordValidator = (_, value) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        if (!value) {
            return Promise.reject(new Error(`${t('pleaseInput')} ${t('password')}`));
        }
        if (value.length < minLength) {
            return Promise.reject(new Error(`${t('passwordLengthError')}`));
        }
        if (!hasUppercase || !hasLowercase || !hasSymbols) {
            return Promise.reject(new Error(t('passwordComplexityError')));
        }
        return Promise.resolve();
    };

    return (
        <>
            <Form.Item
                name="password"
                label={t('password')}
                rules={[
                    {
                        validator: passwordValidator
                    },
                ]}
                hasFeedback
            >
                <Input.Password className="rounded-[2px] p-3" placeholder={t('password')} prefix={<Lock />} />
            </Form.Item>
            <Form.Item
                name="confirm_password"
                label={t('repeatPassword')}
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: `${t('pleaseInput')} ${t('password')}`,
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error(t('passDontMatch')));
                        },
                    }),
                ]}
            >
                <Input.Password className="rounded-[2px] p-3" placeholder={t('repeatPassword')} prefix={<Lock />} />
            </Form.Item>
        </>
    );
}

export default PasswordConfirm;
