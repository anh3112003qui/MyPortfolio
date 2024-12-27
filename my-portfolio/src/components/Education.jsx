import React from 'react';

const education = [
    {
        degree: "Bachelor of Science (BSc)",
        institution: "Bangabashi Morning College",
        year: "2018 - 2021",
        description: "Graduated with a strong foundation in critical thinking and problem-solving.",
        icon: "🎓",
    },
    {
        degree: "Higher Secondary (11th-12th)",
        institution: "Adarsh Madhyamik Vidhyalaya",
        year: "2016 - 2018",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
        icon: "🎓",
    },
    {
        degree: "Secondary (10th)",
        institution: "A.R.N.C Vidhyalya",
        year: "2016",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
        icon: "🎓",
    },
];

const Education = () => {
    return (
        <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education</h2>
                <div className='flex justify-center'>
                    <div className='grid md:grid-cols-1 gap-12'>
                        {/* Education section */}
                        <div className='w-full'>
                            {education.map((edu, index) => (
                                <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                                    <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                                    <div>
                                        <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                                        <p className='text-gray-300'>{edu.institution}</p>
                                        <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                                        <p className='text-gray-300 mt-2'>{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;