import React from "react";
import WorkItems from './WorkItems';

const data = [
    {
        year: 2023,
        title: 'Javascript Developer - EVAS PROJECT',
        duration: '1 month',
        details: 'Development of the EVAS website, implementing green impact projects to support the fight against climate change, using the Agile methodology. Participation in the design and reflection phases of the MVP (specification document, conceptual data model, logical data model, physical data model, wireframes...). Back-end: Creation, documentation, and deployment of the API. Front-end: Responsive Web Design, Integration, Development of certain features with React. ',
    },
    {
        year: 2020,
        title: 'PRAY&ACTFORMADAGASCAR PROJECT',
        duration: '1 year',
        details: 'Fundraising to help COVID patients in precarious situations in Madagascar, collaboration with a local association.',
    },
    {
        year: 2016,
        title: 'Laboratory assistant',
        duration: '6 1/5 years',
        details: 'Active participation in the organization during the health emergency related to COVID. Physical and telephone reception of patients.Management of the weekly schedule of the team. Managing the cash box and monthly invoices for nurses. Reception of external blood and bacteriological samples.',
    },
    {
        year: 2013,
        title: 'Catering Manager and Accommodation at a Malagasy National Event.',
        duration: '5 months',
        details: '',
    }
]

const Work = () => {
    return(
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-6xl m-2 font-bold text-center text-pink-900">Work</h1>
        {data.map((item, index) => (
            <WorkItems 
                key={index} 
                year={item.year} 
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        ))}
    </div>
    )
}

export default Work;