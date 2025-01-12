import {useLoaderData, useParams} from "react-router";
import {Product} from "../types/Product.ts";
import CategoryTitle from "../components/CategoryTitlte/CategoryTitle.tsx";
import ProductsWrapper from "../components/ProductsWrapper/ProductsWrapper.tsx";

const Category = () => {
    const {category} = useParams();
    const products = useLoaderData<Product[]>();
    const filteredProducts = products.filter((p) => p.category === category);

    return (
        <>
            {category && <CategoryTitle title={category}/>}
            { filteredProducts && <ProductsWrapper products={filteredProducts}/> }
        </>
        )

};

export default Category;