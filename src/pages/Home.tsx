import {useLoaderData} from "react-router";
import Intro from "../components/Intro/Intro.tsx";
import {Product} from "../types/Product.ts";
import Categories from "../components/Categories/Categories.tsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.tsx";
import {useDispatch} from "react-redux";
import {setFeaturedData} from "../slices/featuredProductsSlice.ts";
import AboutUs from "../components/AboutUs/AboutUs.tsx";
import {Devices} from "../types/Devices.ts";

const Home = () => {
    const data = useLoaderData<Product[]>();
    const AboutUsTitle = <h2 className='uppercase text-h2'>Bringing you the <span className='text-orange'>best</span> audio gear</h2>;
    const AboutUsImages : Devices = {
        mobile: '/assets/shared/mobile/image-best-gear.jpg',
        tablet: '/assets/shared/tablet/image-best-gear.jpg',
        desktop: '/assets/shared/desktop/image-best-gear.jpg',

    }

    /*Reverse is here just for this block to look like on design*/
    const featuredProducts = data.filter(product => product.featured).reverse();

    if(featuredProducts){
        const dispatch = useDispatch();
        dispatch(setFeaturedData({data: featuredProducts}))
    }

    return (
        <div className=''>
            <Intro data={data}/>
            <Categories
                className='pt-[5.75rem] pb-[7.5rem] md:pt-[9.25rem] md:pb-[6rem] lg:pt-[12.5rem] lg:pb-[10.5rem]'/>
            {featuredProducts && <FeaturedProducts className='mb-[7.5rem] md:mb-24 lg:mb-[12.5rem]'/>}
            <AboutUs className='mb-[7.5rem] md:mb-24 lg:mb-[12.5rem]' title={AboutUsTitle} image={AboutUsImages} description={'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'}/>
        </div>
    );
};

export default Home;