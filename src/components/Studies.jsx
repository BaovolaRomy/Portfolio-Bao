import React from "react";
import StudyItems from './StudyItems';

const data = [
    {
        year: 2023,
        school: "O'CLOCK",
        title : 'Fullstack JS Web Developer Bootcamp',
        duration: '798 hours',
        details: 'We had 3 months of foundation training during which we learned the basics of web development : HTML, CSS, NodeJS,PostegreSQL, MongoDB, APIREST, Strapi, Git; 1 month of specialization back-end and 1 month of final project development. ',
    },

    {
        year: 2015,
        school: 'CNED',
        title : 'Medical and Medico-Social Secretarial Studies',
        duration: '1 year',
        details: '',
    },

    {
        year: 2012,
        school: 'Université Toulouse I Capitole',
        title : 'Economics and Computing',
        duration: '2 years',
        details: ' ',
    },

    {
        year: 2011,
        school: 'IUT La Rochelle',
        title : 'Computing',
        duration: '1 year',
        details: ' ',
    },

    {
        year: 2010,
        school: 'Malagasy High School',
        title : 'Bachelor of Science - Maths option',
        duration: '1 year',
        details: ' ',
    }
]

const Studies = () => {
    return(
    <div id="studis" className="max-w-[1040px] m-auto md:pl-20 p-4 py16">
        <h1 className="text-6xl m-2 font-bold text-center text-pink-900">Studies</h1>
        {data.map((item, index) => (
            <StudyItems 
                key={index} 
                year={item.year} 
                school={item.school}
                title={item.title}
                duration={item.duration}
                details={item.details}
            />
        ))}
    </div>
    )
}

export default Studies;