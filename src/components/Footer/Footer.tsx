import Logo from "../Logo/Logo.tsx";
import NavLinks from "../NavLinks/NavLinks.tsx";
import Socials from "../Socials/Socials.tsx";
import Links from "../../routes/links.ts";

const Footer = () => {

    return (
        <footer className='bg-dark text-white relative'>
            <div className='container relative flex flex-col items-center gap-12 pt-[3.25rem] pb-[2.375rem] md:items-start md:pt-[3.75rem] md:pb-[2.875rem] md:gap-8 xl:pb-[3rem] xl:pt-[4.6875rem] xl:gap-9 before:content-[""] before:block before:absolute before:top-0 before:w-[101px] before:h-1 before:bg-orange before:left-1/2 before:-translate-x-1/2 md:before:left-10 md:before:translate-x-0 xl:before:left-[10.3125rem]'>
                <div className="xl:flex xl:justify-between xl:w-full">
                    <Logo className="inline-block flex-grow mb-[3rem] md:mb-8" link={'/'} imgProps={{alt: 'logo', src: "/icons/logo.svg"}} />
                    <NavLinks className='flex flex-col items-center gap-4 md:flex-row md:gap-[2.125rem]' links={Links} />
                </div>
                <p className='text-center text-body opacity-50 md:mb-7 md:text-left xl:mb-5'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <div className='flex flex-col items-center md:items-start md:flex-row md:justify-between md:w-full'>
                    <p className='text-body opacity-50 mb-12 md:mb-0'>Copyright 2025. All Rights Reserved</p>
                    <Socials/>
                </div>

            </div>
        </footer>
    );
};

export default Footer;