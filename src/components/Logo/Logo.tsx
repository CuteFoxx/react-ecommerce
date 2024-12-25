import {Link} from "react-router";
import {ImgHTMLAttributes} from "react";

type LogoProps = {
    className?: string;
    link: string;
    imgProps: ImgHTMLAttributes<HTMLImageElement>
}

const Logo = ({className,link, imgProps}:LogoProps ) => {
    return (
        <Link className={className && className} to={link}>
            <img {...imgProps} />
        </Link>
    );
};

export default Logo;