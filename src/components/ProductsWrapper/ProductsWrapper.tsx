import ProductBrief from "../ProductBrief/ProductBrief.tsx";
import {Product} from "../../types/Product.ts";

const ProductsWrapper = ({products}: {products: Product[]}) => {
    return (
        <div className='mb-[7.5rem] grid gap-[7.5rem]'>
            {products && products.map((product) => (
                <ProductBrief product={product} />
            ))}
        </div>
    );
};

export default ProductsWrapper;