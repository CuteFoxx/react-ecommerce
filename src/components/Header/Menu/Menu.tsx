import Categories from "../../Categories/Categories.tsx";

type MenuProps = {
    className?: string;
}

const Menu = ({className}: MenuProps) => {
    return (
        <nav className={className && className} role="menu" aria-label="menu">
            <Categories className='pt-[3.25rem] max-h-[80vh] overflow-y-scroll  md:pt-[6.75rem]' />
        </nav>
    )
        ;
};

export default Menu;