import type {Product} from '../types/Product.ts'
import {LoaderFunctionArgs} from "react-router";


const productLoader = async ({params}: LoaderFunctionArgs  ) => {
    const {category, productName} = params;
    const data : Product[] = await fetch('/data.json').then(res => res.json());

    return data.filter(product => product.category === category).find(product => product.slug === productName);
}

export default productLoader;