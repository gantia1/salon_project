import React, {useContext, useState} from 'react';
import {Form} from "antd";
import {ModalsContext} from '@/components/contexts/ModalsContexts';
import User from "@/public/assets/images/svg/user.svg";
import Lock from "@/public/assets/images/svg/lock.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import CustomModal from "@/components/modals/CustomModal";
import {useTranslation} from "next-i18next";
import api from "@/utils/api";
import {CustomerContext} from "@/components/contexts/CustomerContext";
import CustomInput from "@/components/customInputs/CustomInput";

function AuthorizationModal() {
    const [errors, setErrors] = useState();
    const {showAuthorizationModal, setShowAuthorizationModal, setShowRegisterModal} = useContext(ModalsContext);
    const {getUser, setAccessToken} = useContext(CustomerContext);
    const {t} = useTranslation();
    const [form] = Form.useForm();

    const inputFields = [
        {name: "email", label: t('email'), prefix: <User/>},
        {name: "password", label: t('password'), prefix: <Lock/>},
    ];

    const onFinish = async (values) => {
        try {
            const {status, data} = await api.post('/login', values);
            if (status === 200) {
                localStorage.setItem('accessToken', data.token);
                await Promise.all([setAccessToken(data.token), getUser()]);
                setShowAuthorizationModal(false);
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'An error occurred';
            setErrors(errorMessage);
        }
    };


    return (
        <CustomModal showModal={showAuthorizationModal} setShowModal={setShowAuthorizationModal}
                     setShowSecondModal={setShowRegisterModal} title={t('login')} btnText={t('register')}
                     accountText={t('dontHaveAcc')}>
            <Form
                form={form}
                onFinish={onFinish}
                className="w-full"
                layout="vertical"
                preserve={false}
            >
                {inputFields.map((field, index) => (
                    <CustomInput
                        key={index}
                        name={field.name}
                        label={t(field.label)}
                        prefix={field.prefix}
                        errorMessage={errors}
                    />
                ))}

                <div className="flex justify-end text-primary-gray mb-5 hover:text-secondary-gray">
                    <a href="/" rel="noopener noreferrer">
                        {t('forgotPassword')}
                    </a>
                </div>
                <Form.Item className="bg-white">
                    <PrimaryButton type="submit" className="w-full">
                        {t('login')}
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </CustomModal>
    );
}

export default AuthorizationModal;
