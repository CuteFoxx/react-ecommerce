/*
Basically the same as home loader, i made them for sake of scalability, maybe ill make some simple API for this project but im not so sure :)
*/

import {Product} from "../types/Product.ts";

const homeLoader = async () => {
    const data : Product[] = await fetch('/data.json').then(res => res.json());
    const newProducts = await  data?.filter((item) => item.new);
    const rest = await data?.filter((item) => !item.new);


    return [...newProducts, ...rest];
}

export default homeLoader;