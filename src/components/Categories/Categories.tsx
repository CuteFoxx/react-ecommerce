import categoryLinks from '../../utils/categoryLinks.ts'
import {Link} from "react-router";

type CategoriesProps = {
    className?: string,
};

const Categories = ({className}: CategoriesProps) => {
    return (
        <ul className={`flex flex-col gap-[4.25rem]  md:flex-row md:gap-2.5 lg:gap-[1.875rem] ${className && className}`}>
            {categoryLinks.map(({url, title, img} , index: number) => (
                <li key={index} className='transition-all relative md:flex-grow md:w-1/3 group hover:drop-shadow-lg'>
                    <div
                        className="bg-grey rounded-lg flex items-center justify-cente flex-col relative min-h-[10.3125rem] pt-[5.5rem] lg:min-h-[12.75rem]">
                        <img className='transition-all -translate-y-1/3 h-[6.5rem] absolute top-0  lg:h-[10rem] lg:-translate-y-1/2 group-hover:-translate-y-[55%] ' src={img} alt={title}/>
                        <h3 className='font-bold text-[0.9375rem] tracking-[1px] uppercase'>{title}</h3>
                        <Link
                            className=' relative z-10 mt-4 font-bold uppercase text-[0.8125rem] transition-all flex  gap-[0.8125rem] items-center  opacity-50 hover:opacity-100 hover:text-orange'
                            to={url} aria-label={`to ${title} category page`}>
                            shop
                            <img className='!opacity-100 h-[0.625rem]' src="/icons/icon-arrow-right.svg"
                                 alt="arrow right"/>
                        </Link>
                        <Link className='absolute top-0 left-0 right-0 bottom-0' to={url} aria-label={`to ${title} category page`} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Categories;