import React, {useContext, useState} from 'react';
import {Checkbox, Form} from "antd";
import User from "@/public/assets/images/svg/user.svg";
import Phone from "@/public/assets/images/svg/phone.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import CustomModal from "@/components/modals/CustomModal";
import {ModalsContext} from "@/components/contexts/ModalsContexts";
import {useTranslation} from "next-i18next";
import CustomInput from "@/components/customInputs/CustomInput";
import PasswordConfirm from "@/components/customInputs/PasswordConfirm";
import api from "@/utils/api";

function RegisterModal() {
    const {showRegisterModal, setShowRegisterModal, setShowAuthorizationModal} = useContext(ModalsContext);
    const [errors, setErrors] = useState();
    const {t} = useTranslation();
    const [form] = Form.useForm();

    const inputFields = [
        {name: "email", label: t('email'), prefix: <User/>},
        {name: "phone_number", label: t('contactNumber'), prefix: <Phone className='phone-svg'/>},
        {name: "name", label: t('name'), prefix: <User/>},
        {name: "surname", label: t('lastname'), prefix: <User/>},
    ];

    const onFinish = async (values) => {
        try {
            await api.post('/register', values);
        } catch (err) {
            setErrors(err.response?.data?.errors);
        }
    };


    return (
        <CustomModal showModal={showRegisterModal} setShowModal={setShowRegisterModal}
                     setShowSecondModal={setShowAuthorizationModal} title={t('register')} btnText={t('login')}
                     accountText={t('haveAnAcc')}>
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
                        placeholder={t(field.label)}
                        prefix={field.prefix}
                        errorMessage={errors?.[field.name]}
                    />
                ))}
                <PasswordConfirm/>
                <Form.Item
                    name="agreed"
                    initialValue={false}
                    valuePropName="checked"
                    className="flex justify-center text-primary-gray"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        {t('agree')} <a className="underline text-primary-purple hover:text-primary-purple" href="/"
                                        target="_blank">
                        {t('termsConditions')}
                    </a>
                    </Checkbox>
                </Form.Item>
                <Form.Item className="bg-white">
                    <PrimaryButton type="submit" className="w-full">
                        {t('register')}
                    </PrimaryButton>
                </Form.Item>
            </Form>
        </CustomModal>
    );
}

export default RegisterModal;
