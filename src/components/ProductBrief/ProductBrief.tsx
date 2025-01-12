import {Product} from "../../types/Product.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import {Link} from "react-router";

interface ProductBriefProps {
    product: Product;
}

const ProductBrief = ({product}: ProductBriefProps ) => {
    const {categoryImage, name, new: isNew, description,category,slug} = product;

    return (
        <article className='grid gap-8 justify-items-center text-center md:gap-[3.25rem] lg:grid-cols-[33.75rem_1fr] lg:gap-[7.8125rem] lg:text-left group'>
            <ResponsiveImage className='lg:group-even:order-2' {...categoryImage} />
            <div className='md:px-[3.75rem] grid gap-6 justify-items-center text-center md:gap-0 lg:px-0 lg:justify-items-start lg:text-left lg:py-[6.8125rem]'>
                {isNew && (<p className='uppercase text-overline text-orange mt-2 md:mb-4 lg:mt-0'>New Product</p>)}
                <h2 className='text-h4 uppercase md:text-h2 md:max-w-sm md:mb-8 '>{name}</h2>
                <p className='text-body opacity-50 md:mb-6 lg:mb-10'>{description}</p>
                <Link className='button h-[3rem]' to={`/${category}/${slug}`} >
                    See product
                </Link>
            </div>
        </article>
    );
};

export default ProductBrief;