import {Product} from "../../types/Product.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import type {Devices} from "../../types/Devices.ts";
import {Link} from "react-router";

type FeaturedProductProps = {
    className?: string;
    product: Product;
    index: number;
};

const FeaturedProduct = ({product, index, className}: FeaturedProductProps) => {
    const {name, description, gallery, featuredImages,category,slug} = product;
    let image: Devices = featuredImages ? featuredImages : gallery.first;


    return (
        <div className={`featured-product group ${className ? className : ""}`}>
            <ResponsiveImage className='featured-image' {...image} />
            <div className='featured-container'>
                <h3 className='featured-title'>{name}</h3>
                {(index === 0 || index % 4 === 0) ?
                    <p className=''>{description}</p>
                    : ''}
                <Link className='featured-button' to={`/${category}/${slug}`}>See product</Link>
            </div>
        </div>
    );
};

export default FeaturedProduct;