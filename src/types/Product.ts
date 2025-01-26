import type { Devices as devices } from './Devices';
import type {productShort} from "./ProductShort.ts";

export type Product = {
    id: number;
    slug: string;
    name: string;
    image: devices;
    category: string;
    introImage: devices;
    categoryImage: devices;
    new: boolean;
    featured: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
      quantity: number;
      item: string
    }[]
    featuredImages: devices;
    gallery: {
        first: devices;
        second: devices;
        third: devices;
    }
    others: productShort[];

}