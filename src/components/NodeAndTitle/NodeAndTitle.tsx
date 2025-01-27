type NodeAndTitleProps = {
    className?: string;
    title?: string;
    children?: React.ReactNode;
};

const NodeAndTitle = ({title,className,children}: NodeAndTitleProps) => {
    return (
        <div className={className ? className : ''}>
            {title && <h2 className={`text-h5 uppercase mb-6 md:text-h3 md:mb-[2rem]`}>{title}</h2>}
            {children}
        </div>
    );
};

export default NodeAndTitle;