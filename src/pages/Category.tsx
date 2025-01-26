import {ScrollRestoration, useLoaderData, useParams} from "react-router";
import {Product} from "../types/Product.ts";
import CategoryTitle from "../components/CategoryTitlte/CategoryTitle.tsx";
import ProductsWrapper from "../components/ProductsWrapper/ProductsWrapper.tsx";
import AboutUs from "../components/AboutUs/AboutUs.tsx";
import {Devices} from "../types/Devices.ts";
import Categories from "../components/Categories/Categories.tsx";

const Category = () => {
    const {category} = useParams();
    const products = useLoaderData<Product[]>();
    const filteredProducts = products.filter((p) => p.category === category);
    const AboutUsTitle = <h2 className='uppercase text-h2'>Bringing you the <span className='text-orange'>best</span> audio gear</h2>;
    const AboutUsImages : Devices = {
        mobile: '/assets/shared/mobile/image-best-gear.jpg',
        tablet: '/assets/shared/tablet/image-best-gear.jpg',
        desktop: '/assets/shared/desktop/image-best-gear.jpg',

    }
    return (
        <>
            {category && <CategoryTitle title={category}/>}
            { filteredProducts && <ProductsWrapper products={filteredProducts}/> }
            <Categories
                className='pt-[5.75rem] pb-[7.5rem] md:pt-[9.25rem] md:pb-[6rem] lg:pt-[12.5rem] lg:pb-[10.5rem]'/>
            <AboutUs className='mb-[7.5rem] md:mb-24 lg:mb-[12.5rem]' title={AboutUsTitle} image={AboutUsImages} description={'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'}/>
            <ScrollRestoration/>
        </>
        )

};

export default Category;