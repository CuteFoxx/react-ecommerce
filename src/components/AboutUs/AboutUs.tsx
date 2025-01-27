import React from "react";
import {Devices} from "../../types/Devices.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";

interface AboutUsProps{
    className?: string;
    image: Devices
    title: React.ReactNode
    description: string,
}

const AboutUs  = ({className,title,image,description}: AboutUsProps) => {
    return (
        <div className={`grid gap-[2.5rem] md:gap-16 lg:grid-cols-[27.8125rem_1fr] lg:items-center lg:gap-[7.8125rem] ${className ? className : ''}`}>
            <ResponsiveImage className='lg:order-10' imageClassName='rounded-lg h-[18.75rem] lg:h-[36.75rem]' {...image} />
            <div className='mx-auto grid gap-8 text-center max-w-[35.8125rem] lg:text-left'>
                {title}
                <p className='opacity-50 text-body'>{description}</p>
            </div>
        </div>
    );
};

export default AboutUs;