import {useLoaderData} from "react-router";
import Intro from "../components/Intro/Intro.tsx";
import {Product} from "../types/Product.ts";

const Home = () => {
    const data = useLoaderData<Product[]>();

    return (
        <div className=''>
            <Intro data={data} />
        </div>
    );
};

export default Home;