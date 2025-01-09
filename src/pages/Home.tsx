import {useLoaderData} from "react-router";
import Intro from "../components/Intro/Intro.tsx";
import {Product} from "../types/Product.ts";
import Categories from "../components/Categories/Categories.tsx";

const Home = () => {
    const data = useLoaderData<Product[]>();

    return (
        <div className=''>
            <Intro data={data} />
            <Categories className='pt-[5.75rem] pb-[7.5rem] md:pt-[9.25rem] md:pb-[6rem] lg:pt-[12.5rem] lg:pb-[10.5rem]' />
        </div>
    );
};

export default Home;