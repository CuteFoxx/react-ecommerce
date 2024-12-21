import {NavLink} from "react-router";

type MenuProps = {
    className?: string;
    links: {
        url: string;
        title: string;
        img: string;
    }[]
}

const Menu = ({className, links}: MenuProps) => {
    return (
        <nav className={className && className} role="menu" aria-label="menu">
            <ul className='flex flex-col gap-[4.25rem] pt-[3.25rem] max-h-[80vh] overflow-y-scroll md:flex-row md:gap-2.5 md:pt-[6.75rem]'>
                {links.map(({url, title, img}, index) => (
                    <li key={index} className='md:flex-grow'>
                        <div className="bg-grey rounded-lg flex items-center justify-cente flex-col relative min-h-[10.3125rem] pt-[5.5rem]">
                            <img className='-translate-y-1/3 h-[6.5rem] absolute top-0' src={img} alt={title}/>
                            <h2 className='font-bold text-[0.9375rem] tracking-[1px] uppercase'>{title}</h2>
                            <NavLink className='mt-4 font-bold uppercase text-[0.8125rem] transition-all flex  gap-[0.8125rem] items-center  opacity-50 hover:opacity-100' to={url} aria-label={`to ${title} category page`}>
                                shop
                                <img className='!opacity-100 h-[0.625rem]' src="/icons/icon-arrow-right.svg" alt="arrow right"/>
                            </NavLink>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
        ;
};

export default Menu;