import {Product} from "../types/Product.ts";

const categoryLoader = async () => {
    const data : Product[] = await fetch('/data.json').then(res => res.json());
    const newProducts = await  data?.filter((item) => item.new);
    const rest = await data?.filter((item) => !item.new);


    return [...newProducts, ...rest];
}

export default categoryLoader;
