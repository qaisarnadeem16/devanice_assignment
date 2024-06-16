import React from 'react';

interface Props {
    text: string;
    styles?: string; // If you want to pass additional styles
}

const SubHeading: React.FC<Props> = ({ text, styles }) => {
    return (
        <div>
            <h3 className={`text-white  md:text-base text-sm md:leading-[30px]  ${styles}`}>{text}</h3>
        </div>
    );
};

export default SubHeading;
