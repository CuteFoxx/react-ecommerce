import {useLoaderData} from "react-router";
import type {Product} from "../types/Product.ts";
import AboutUs from "../components/AboutUs/AboutUs.tsx";
import Categories from "../components/Categories/Categories.tsx";
import {Devices} from "../types/Devices.ts";
import ProductInner from "../components/Product/ProductInner.tsx";
import BackLink from "../components/BackLink/BackLink.tsx";
import NodeAndTitle from "../components/NodeAndTitle/NodeAndTitle.tsx";

type ProductProps = {};

const Product = ({}: ProductProps) => {
    const product = useLoaderData<Product>();
    const AboutUsTitle = <h2 className='uppercase text-h2'>Bringing you the <span
        className='text-orange'>best</span> audio gear</h2>;
    const AboutUsImages: Devices = {
        mobile: '/assets/shared/mobile/image-best-gear.jpg',
        tablet: '/assets/shared/tablet/image-best-gear.jpg',
        desktop: '/assets/shared/desktop/image-best-gear.jpg',

    }
    return (
        <div>
            <BackLink link={`/${product.category}`}
                      className='block opacity-50 text-black text-body mt-4 transition-all hover:opacity-100 hover:text-orange md:mt-[2rem] lg:mt-[5rem]'/>
            <ProductInner className='mt-6 lg:mt-[3.5rem]' product={product}/>
            <div className='lg:grid lg:grid-cols-[39.6875rem_1fr] lg:gap-[7.8125rem]'>
                <NodeAndTitle className='mt-[5.5rem] md:mt-[7.5rem]' title="Features">
                    <p className='text-body opacity-50'>{product.description}</p>
                </NodeAndTitle>
                <NodeAndTitle className='mt-[7rem] md:grid md:grid-cols-2 md:mt-[7.5rem] lg:grid-cols-1' title="in the box">
                    <ul>
                        {product.includes.map((includes, index) => {
                            return (<li className='text-body' key={index}><span
                                className='font-bold text-orange inline-block mr-5'>{includes.quantity}x</span><span
                                className='opacity-50'>{includes.item}</span></li>)
                        })}
                    </ul>
                </NodeAndTitle>
            </div>
            <Categories
                className='pt-[5.75rem] pb-[7.5rem] md:pt-[9.25rem] md:pb-[6rem] lg:pt-[12.5rem] lg:pb-[10.5rem]'/>
            <AboutUs className='mb-[7.5rem] md:mb-24 lg:mb-[12.5rem]' title={AboutUsTitle} image={AboutUsImages}
                     description={'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'}/>
        </div>
    );
};

export default Product;