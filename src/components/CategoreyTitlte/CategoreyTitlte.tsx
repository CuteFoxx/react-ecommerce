type CategoreyTitleProps = {
    title: string,
};

const CategoreyTitle = ({title}: CategoreyTitleProps) => {
    return (
        <h1 className='bg-dark text-white py-8 text-center uppercase text-h4 md:text-h2'>
            {title}
        </h1>
    );
};

export default CategoreyTitle;