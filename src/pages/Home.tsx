import {useLoaderData} from "react-router";
import Intro from "../components/Intro/Intro.tsx";
import {Product} from "../types/Product.ts";
import Categories from "../components/Categories/Categories.tsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.tsx";
import {useDispatch} from "react-redux";
import {setFeaturedData} from "../slices/featuredProductsSlice.ts";

const Home = () => {
    const data = useLoaderData<Product[]>();

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
            <FeaturedProducts className='mb-[7.5rem] md:mb-24 lg:mb-[12.5rem]'/>
        </div>
    );
};

export default Home;