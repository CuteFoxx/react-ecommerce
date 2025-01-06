import {Devices} from "../../types/Devices.ts";

interface ResponsiveImageProps extends Devices  {
    alt?: string;
    className?: string;
    imageClassName?: string;
}


const ResponsiveImage = ({mobile,tablet,desktop,alt ,className, imageClassName}: ResponsiveImageProps) => {
    return (
        <picture
            className={className && className}>
            <source srcSet={desktop} media='(min-width: 1024)'/>
            <source srcSet={tablet} media='(min-width: 768px)'/>
            <img src={mobile} alt={alt && alt}
                 className={imageClassName}/>
        </picture>
    );
};

export default ResponsiveImage;