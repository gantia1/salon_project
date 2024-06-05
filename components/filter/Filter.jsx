import React from 'react';
import {Form} from "antd";
import CustomInput from "@/components/customInputs/CustomInput";
import CustomTreeInput from "@/components/customInputs/CustomTreeInput";
import CustomSelect from "@/components/customInputs/CustomSelect";
import CustomDatepicker from "@/components/customInputs/CustomDatepicker";
import PrimaryButton from "@/components/button/PrimaryButton";
import SearchIcon from "@/public/assets/images/svg/search.svg";
import dayjs from "dayjs";

const treeData = [
    {
        title: 'თმა(ქალი)',
        value: 'თმა(ქალი)',
        children: [
            {
                title: 'შეჭრა',
                value: 'შეჭრა',
            },
            {
                title: 'დავარცხნა',
                value: 'დავარცხნა',
            },
            {
                title: 'დაგრძელება',
                value: 'დაგრძელება',
            },
            {
                title: 'ქიმიური დახვევა',
                value: 'ქიმიური დახვევა',
            },
        ],
    },
    {
        title: 'ფრჩხილები',
        value: 'ფრჩხილები',
        children: [
            {
                title: 'მოწესრიგება',
                value: 'მოწესრიგება',
            },
            {
                title: 'შილაკის მოხსნა',
                value: 'შილაკის მოხსნა',
            },
        ],
    },
];

const cities = [
    {value: 'თბილისი', label: 'თბილისი'},
    {value: 'ქუთაისი', label: 'ქუთაისი'},
    {value: 'ბათუმი', label: 'ბათუმი'},
];



function Filter() {
    const [form] = Form.useForm();

    const disabledDate = (current) => {
        const today = dayjs().startOf('day');
        const twoWeeksFromToday = dayjs().add(2, 'week').endOf('day');
        return current && (current < today || current > twoWeeksFromToday);
    };

    return (
         <Form form={form} className="grid grid-cols-auto-170 gap-6">
            <CustomInput className="filter-input" name="salonName" placeholder="სალონის სახელი"/>
            <CustomTreeInput treeData={treeData} placeholder="პროცედურა" name="procedures" className="col-auto-grow"/>
            <CustomSelect items={cities} name="cities" placeholder="ქალაქი"/>
            <CustomDatepicker disabledDate={disabledDate} placeholder="თავისუფალი დღე" name="date"/>
            <CustomSelect name="review" placeholder="შეფასება"/>
            <PrimaryButton className="flex gap-x-2.5 items-center justify-center min-w-[170px] h-[42px]" type="submit"><SearchIcon/> ძებნა</PrimaryButton>
        </Form>
    );
}

export default Filter;
