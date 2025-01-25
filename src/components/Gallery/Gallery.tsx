import {Devices} from "../../types/Devices.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";

type GalleryProps = {
    className?: string;
    first: Devices,
    second: Devices,
    third: Devices,
};

const Gallery = ({first,second,third,className}: GalleryProps) => {
    return (
        <div className={`grid gap-5 md:grid-cols-[minmax(17.3125rem,1fr)_minmax(24.6875rem,1fr)] md:gap-x-5 md:gap-y-[1.125rem]  lg:grid-cols-[minmax(27.8125rem,1fr)_minmax(39.6875rem,1fr)] lg:gap-x-[1.875rem] lg:gap-y-8 ${className ? className : ''}`}>
            <ResponsiveImage className='rounded-lg overflow-hidden' {...first} />
            <ResponsiveImage className='rounded-lg overflow-hidden md:order-3' {...second} />
            <ResponsiveImage className='rounded-lg overflow-hidden md:row-span-2 md:order-2' {...third} />
        </div>
    );
};

export default Gallery;