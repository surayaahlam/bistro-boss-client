import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-10/12 md:w-5/12 mx-auto text-center my-8'>
            <p className='text-yellow-500 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-xl md:text-3xl font-bold border-y-2 border-white border-opacity-30 py-4 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;