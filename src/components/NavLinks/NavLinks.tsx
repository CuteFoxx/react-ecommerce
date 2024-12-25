import {NavLink} from "react-router";

type DesktopMenuProps = {
    className?: string;
    links: {
        url: string;
        title: string;
    }[];
}


const NavLinks = ({className, links}: DesktopMenuProps) => {
    return (
        <nav>
            <ul className={className ? className : ''}>
                {links.map(({url, title}, index) => (
                    <li key={index}>
                        <NavLink className={({isActive}) =>
                          isActive ? `text-pale-orange hover:text-orange transition-all uppercase font-bold` : 'hover:text-orange transition-all uppercase font-bold'
                        } to={url} title={title}>{title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;