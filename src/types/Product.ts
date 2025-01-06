import type { Devices as devices } from './Devices';

type productShort = {
    slug: string;
    name: string;
    image: devices
}

export type Product = {
    id: number;
    slug: string;
    name: string;
    image: devices;
    category: string;
    introImage: devices;
    categoryImage: devices;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
      quantity: number;
      item: string
    }[]
    gallery: {
        first: devices;
        second: devices;
        third: devices;
    }
    others: productShort[];

}