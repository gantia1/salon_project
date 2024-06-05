import React, {useContext, useEffect} from 'react';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import {DatePicker, Form} from 'antd';
import 'dayjs/locale/ka';

import enLocale from 'antd/es/date-picker/locale/en_US';
import kaLocale from 'antd/es/date-picker/locale/ka_GE';
import ruLocale from 'antd/es/date-picker/locale/ru_RU';
import {CustomerContext} from "@/components/contexts/CustomerContext";

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {weekStart: 1});
dayjs.updateLocale('ru', {weekStart: 1});
dayjs.updateLocale('ka', {weekStart: 1});

const getAntdLocale = (lang) => {
    switch (lang) {
        case 'en':
            return enLocale;
        case 'ru':
            return ruLocale;
        case 'ka':
            return kaLocale;
        default:
            return kaLocale;
    }
};

export default function CustomDatepicker({name, label, placeholder, disabledDate}) {
    const {language} = useContext(CustomerContext);

    useEffect(() => {
        dayjs.locale(language);
    }, [language]);

    return (
        <div>
            <Form.Item name={name} label={label} className="datepicker-input">
                <DatePicker
                    style={{width: '100%'}}
                    format="DD/MM/YYYY"
                    placeholder={placeholder}
                    locale={getAntdLocale(language)}
                    showToday={false}
                    disabledDate={disabledDate}
                />
            </Form.Item>
        </div>
    );
}
