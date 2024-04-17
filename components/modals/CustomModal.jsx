import React from 'react';
import {Modal} from "antd";
import GoogleSVG from "@/public/assets/images/svg/google.svg";
import FacebookSVG from "@/public/assets/images/svg/facebookB.svg";
import {useRouter} from "next/router";

export default function CustomModal({
                                        showModal,
                                        setShowModal,
                                        setShowSecondModal,
                                        children,
                                        title,
                                        btnText,
                                        accountText
                                    }) {

    const router = useRouter();

    const handleShowSecondModal = () => {
        setShowModal(false);
        setShowSecondModal(true);
    };

    const handleLogin = async (provider) => {
        await router.push(`http://localhost:8000/api/v1/auth/${provider}/redirect`);
    };

    return (
        <Modal
            title={false}
            destroyOnClose
            open={showModal}
            onCancel={() => setShowModal(false)}
            footer={false}
        >
            <div className="flex flex-col justify-center items-center w-full gap-y-5">
                <h3 className="font-customBold font-bold text-3xl">{title}</h3>

                <div className="flex w-full gap-x-2.5">
                    <button
                        className="flex gap-x-2.5 bg-white border border-[#E7EBEE] rounded-[2px] items-center py-2.5 w-full justify-center"
                        type="button" onClick={() => handleLogin('google')}>
                        <GoogleSVG/>Log in with Google
                    </button>
                    <button
                        className="flex gap-x-2.5 bg-white border border-[#E7EBEE] rounded-[2px] items-center py-2.5 w-full justify-center"
                        type="button" onClick={() => handleLogin('facebook')}
                    >
                        <FacebookSVG/>Log in with Facebook
                    </button>
                </div>
                <p className="with-line"><span>Or</span></p>

                {children}
            </div>
            <div className="flex justify-center items-center gap-x-1 text-base mt-4">
                <p className="text-end">{accountText}</p>
                <button className="text-primary-purple font-customBold border-0 bg-transparent p-0 underline"
                        type="button" onClick={handleShowSecondModal}>
                    {btnText}
                </button>
            </div>
        </Modal>
    );
}
