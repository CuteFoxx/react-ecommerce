import CartButton from "./CartButton/CartButton.tsx";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu.tsx";
import Logo from "../Logo/Logo.tsx";
import NavLinks from "../NavLinks/NavLinks.tsx";
import Menu from "./Menu/Menu.tsx";
import {useEffect} from "react";
import Links from "../../utils/links.ts";
import {useDispatch, useSelector} from "react-redux";
import {isOpenState, setIsOpen} from "../../slices/isOpenSlice.ts";
import CartPopup from "./CartPopup/CartPopup.tsx";
import {setIsCartPopupOpen} from "../../slices/cartPopupSlice.ts";

const Header = () => {
    const isOpen = useSelector((state : {isOpen: isOpenState}) => state.isOpen.value.isOpen);
    const isPopupOpen = useSelector((state: any) => state.cartPopup.value.isOpen);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isOpen || isPopupOpen){
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
    }, [isOpen, isPopupOpen]);

    const handleCartClick : () => void = () => {
        dispatch(setIsCartPopupOpen({isOpen: !isPopupOpen}));
        dispatch(setIsOpen({isOpen: false}));
    }
    const handleMenuClick : () => void = () => {
        dispatch(setIsOpen({isOpen: !isOpen}));
        dispatch(setIsCartPopupOpen({isOpen: false}));
    }

    return (
        <header className={`bg-dark relative z-10 before:content-[\" \"] before:block before:bg-dark before:opacity-0 ${isOpen || isPopupOpen ? "before:opacity-50  before:w-screen before:h-screen before:-z-10 before:absolute before:transition-all " : ""}`}>
            <div className='md:container bg-dark relative z-10 flex items-center  px-6 py-8 justify-between md:justify-items-start border-[#979797] border-b'>
                <HamburgerMenu className='lg:hidden' onClick={handleMenuClick} />
                <Logo className="mx-auto md:flex-grow md:m-0 md:!ml-[2.625rem] lg:!m-0 lg:flex-grow-0" link={'/'} imgProps={{src: "/icons/logo.svg", alt: "logo"}}/>
                <NavLinks links={Links} className='hidden lg:flex text-white uppercase gap-[2.125rem] text-sub-title'/>
                <CartButton callBack={handleCartClick} />
            </div>
            <Menu className={`flex  flex-col w-full text-black bg-white transition-all duration-500 absolute bottom-0 z-[6] px-6 pt-8 pb-[2.1875rem] md:px-10 md:pb-[4.1875rem] rounded-b-lg overflow-hidden ${isOpen ? 
                'opacity-100 translate-y-[100%]' : 
                'opacity-0 pointer-events-none translate-y-[-100%]'}`}/>
            <CartPopup />
        </header>
    );
};

export default Header;