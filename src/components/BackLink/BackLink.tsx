import {Link} from "react-router";

type BackLinkProps = {
    link: string,
    className: string
};

const BackLink = ({link, className}: BackLinkProps) => {
    return (
        <Link className={className ? className : ""} to={link}>
            Go back
        </Link>
    );
};

export default BackLink;