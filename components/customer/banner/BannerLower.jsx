import React from 'react';
import PrimaryButton from "@/components/button/PrimaryButton";
import {useTranslation} from "next-i18next";

function BannerLower() {
    const {t} = useTranslation();
    return (
        <div className="flex text-white justify-center min-h-[500px] bg-banner bg-no-repeat bg-cover m-auto">
            <div className="flex flex-col items-center justify-center w-[650px] gap-y-7">
                <h3 className="text-4xl font-customBold text-center">ხარ სალონის მფლობელი?</h3>
                <h4 className="text-xl text-center">
                    დაარეგისტრირე შენი სალონი გლოუჰაბის პლატფორმაზე და გაუადვილე შენს სტუმრებს ჯავშნის პროცესი, ხოლო
                    სპეციალისტებს ჯავშნების მენეჯმენტი! მიიღე დამატებითი ბენეფიტები და გახდი ფართო საზოგადოების ნაწილი.
                </h4>
                <PrimaryButton className="w-[200px] text-primary-black" type="button" onClick={() => console.log('test')} children={t('register')}/>
            </div>
        </div>
    );
}

export default BannerLower;
