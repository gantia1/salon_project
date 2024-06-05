import React from 'react';
import {useTranslation} from "next-i18next";
import ProceduresCard from "@/components/customer/procedures/ProceduresCard";
import CustomLinkWithArrow from "@/components/customer/customLink/CustomLink";
import Container from "@/components/container/Container";
import {Heading} from "@/components/heading/Heading";

export default function Procedures({title, bg}) {
    return (
        <Container className="pt-[30px] pb-10" bg={bg}>
            <Heading>{title}</Heading>
            <CustomLinkWithArrow href="/">
                ყველას ნახვა
            </CustomLinkWithArrow>
            <div className="procedures-card flex gap-5 lg:flex-wrap overflow-x-auto pb-5">
                {[...Array(12)].map((_, index) => (
                    <ProceduresCard text="თმა (ქალი)" key={index}/>
                ))}
            </div>
        </Container>
    );
}
