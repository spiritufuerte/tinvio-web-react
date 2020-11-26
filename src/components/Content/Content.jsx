import React from 'react';
import MainSection from "./MainSection/MainSection";
import OrdersInfoSection from "./OrdersInfoSection/OrdersInfoSection";
import CommunicationSection from "./CommunicationSection/CommunicationSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import SimplesSection from "./SimplesSection/SimplesSection";
import FormSection from "./FormSection/FormSection";


const Content = () => {
    return (
        <main>
            <MainSection/>
            <OrdersInfoSection/>
            <CommunicationSection/>
            <ExperienceSection/>
            <SimplesSection/>
           <FormSection />
        </main>
    )
}

export default Content;
