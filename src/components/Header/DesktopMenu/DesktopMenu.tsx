import {NavLink} from "react-router";

type DesktopMenuProps = {
    className?: string;
    linkClassName?: string;
    links: {
        url: string;
        title: string;
    }[];
}


const DesktopMenu = ({className, linkClassName, links}: DesktopMenuProps) => {
    return (
        <nav>
            <ul className={className ? className : ''}>
                {links.map(({url, title}, index) => (
                    <li key={index}>
                        <NavLink className={({isActive}) =>
                          isActive ? `text-pale-orange ${linkClassName}` : linkClassName
                        } to={url} title={title}>{title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default DesktopMenu;