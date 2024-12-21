type HamburgerMenuProps = {
    className?: string;
    onClick?: () => void;
}

const HamburgerMenu = ({className, onClick}: HamburgerMenuProps ) => {
    return (
        <button className={className} onClick={onClick}>
            <img src="/icons/menu.svg" alt="menu"/>
        </button>
    );
};

export default HamburgerMenu;