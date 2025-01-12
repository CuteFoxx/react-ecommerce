type CategoreyTitleProps = {
    title: string,
};

const CategoreyTitle = ({title}: CategoreyTitleProps) => {
    return (
        <h1 className='overflow-container bg-dark text-white py-8 text-center uppercase text-h4 mb-16 md:text-h2 md:mb-[7.5rem] md:pb-24 md:pt-[6.5625rem] lg:mb-40'>
            {title}
        </h1>
    );
};

export default CategoreyTitle;