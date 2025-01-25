import FeaturedProduct from "../FeaturedProduct/FeaturedProduct.tsx";
import {useSelector} from "react-redux";
import {Product} from "../../types/Product.ts";

const FeaturedProducts = ({className} : {className?: string}) => {
    const featuredProducts : Product[] = useSelector((state : any) => state.featuredProducts.value.data);

    return (
        <div className={`flex flex-col gap-6 ${className ? className : ''}`}>
            {
                featuredProducts?.map((product, index) => (
                    <FeaturedProduct key={product.id} product={product} index={index} />
                ))
            }
        </div>
    );
};

export default FeaturedProducts;