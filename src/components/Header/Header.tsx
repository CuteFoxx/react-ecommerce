import CartButton from "./CartButton/CartButton.tsx";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu.tsx";
import Logo from "../Logo/Logo.tsx";
import NavLinks from "../NavLinks/NavLinks.tsx";
import Menu from "./Menu/Menu.tsx";
import {useEffect, useState} from "react";
import Links from "../../utils/links.ts";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileLinks = [
        {
            url: '/category/headphones',
            title: 'Headphones',
            img: '/assets/shared/desktop/image-category-thumbnail-headphones.png'
        },
        {
            url: '/category/speakers',
            title: 'Speakers',
            img: '/assets/shared/desktop/image-category-thumbnail-speakers.png'
        },
        {
            url: '/category/earphones',
            title: 'Earphones',
            img: '/assets/shared/desktop/image-category-thumbnail-earphones.png'
        }
    ]

    useEffect(() => {
        if (isOpen){
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.position = "unset";
        }
    }, [isOpen]);

    return (
        <header className={`bg-dark relative z-10 before:content-[\" \"] before:block before:bg-dark before:opacity-0 ${isOpen ? "before:opacity-35  before:w-screen before:h-screen before:-z-10 before:absolute before:transition-all " : ""}`}>
            <div className='md:container bg-dark relative z-10 flex items-center  px-6 py-8 justify-between md:justify-items-start border-[#979797] border-b'>
                <HamburgerMenu className='lg:hidden' onClick={() => setIsOpen(!isOpen)}/>
                <Logo className="mx-auto md:flex-grow md:m-0 md:!ml-[2.625rem] lg:!m-0 lg:flex-grow-0" link={'/'} imgProps={{src: "/icons/logo.svg", alt: "logo"}}/>
                <NavLinks links={Links} className='hidden lg:flex text-white uppercase gap-[2.125rem] text-sub-title'/>
                <CartButton/>
            </div>
            <Menu links={mobileLinks} className={`flex flex-col w-full text-black bg-white transition-all duration-500 absolute bottom-0 z-[0] px-6 pt-8 pb-[2.1875rem] md:px-10 md:pb-[4.1875rem] rounded-b-lg overflow-hidden ${isOpen ? 
                'opacity-100 translate-y-[100%]' : 
                'opacity-0 pointer-events-none translate-y-[-100%]'}`}/>
        </header>
    );
};

export default Header;