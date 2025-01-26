import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import {Link} from "react-router";
import {Devices} from "../../types/Devices.ts";

type ProductCardProps = {
    category: string;
    slug: string;
    image: Devices,
    name: string;
};

const ProductCard = ({name,image,category,slug}: ProductCardProps) => {

    return (
        <div className='flex flex-col gap-y-8 items-center'>
            <ResponsiveImage className='rounded-lg overflow-hidden' {...image} alt={name} />
            <h3 className='text-h5 uppercase md:mt-2'>{name}</h3>
            <Link className='button py-0 h-12' to={`/${category}/${slug}`} >See product</Link>
        </div>
    );
};

export default ProductCard;