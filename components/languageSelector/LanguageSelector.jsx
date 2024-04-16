import React, {useState, useEffect, useRef} from 'react';
import ArrowSVG from "@/public/assets/images/svg/arrow.svg";
import {useTranslation} from "next-i18next";
import GeSVG from '@/public/assets/images/svg/ge.svg';
import EnSVG from '@/public/assets/images/svg/en.svg';

function LanguageSelector() {
    const {i18n} = useTranslation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setSelectedLanguage(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            setDropdownOpen(false);
        };

        window.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const lngButton = 'flex items-center gap-x-4 text-start w-full p-2.5 cursor-pointer rounded-[5px] transition duration-300 ease-out hover:bg-[#FAF8FF]';

    return (
        <div className="relative" ref={dropdownRef}>
            <button className="flex gap-x-2.5 items-center" type="button" onClick={toggleDropdown}>
                {selectedLanguage === 'ka' ? <GeSVG/> : <EnSVG/>}
                <ArrowSVG className={`ease-out duration-300 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {isDropdownOpen && (
                <div
                    className="absolute z-10 bg-white top-11 right-0 overflow-hidden w-[170px] shadow-custom rounded-[10px]">
                    <div className="pt-2.5 px-2.5">
                        <button className={lngButton} onClick={() => changeLanguage('ka')} type="button">
                            <GeSVG/> ქართული
                        </button>
                    </div>
                    <div className="pb-2.5 px-2.5">
                        <button className={lngButton} onClick={() => changeLanguage('en')} type="button">
                            <EnSVG/> English
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;
