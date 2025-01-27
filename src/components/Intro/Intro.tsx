import {Swiper, SwiperSlide} from 'swiper/react';
import '../../../node_modules/swiper/swiper.css'
import {Product} from "../../types/Product.ts";
import {Autoplay} from "swiper/modules";
import {Link} from "react-router";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";

const Intro = ({data}: { data: Product[] }) => {
    const newProducts: Product[] = data.filter((product) => product.new);

    return (
        <div className='overflow-hidden text-white overflow-container bg-dark'>
            <Swiper modules={[Autoplay]} autoplay={{delay: 3000, pauseOnMouseEnter: true}} slidesPerView={1}
                    className='!overflow-visible !-mx-6 md:!-mx-0 lg:!overflow-hidden lg:max-w-[69.375rem]'>
                {
                    newProducts.map((product: Product) => (
                        <SwiperSlide key={product.id}
                                     className='relative text-center !flex !items-center content-center !min-w-screen md:min-w-full flex-col z-[1] min-h-[31.8125rem] pt-[6.875rem] pb-[7rem] md:!min-h-[40rem] lg:!w-full lg:flex-row lg:justify-between lg:text-left md:pb-[10.4375rem] md:pt-[7.875rem] lg:pt-[3.625rem]  '>
                            <div className='flex flex-col items-center lg:pt-[4.6875rem] lg:items-start'>
                                <p className='uppercase opacity-50 text-overline mb-[1rem] md:mb-6'>New
                                    product</p>
                                <h2 className='uppercase text-intro-title mb-6 md:!text-intro-tablet md:max-w-[24.75rem]'>{product.name}</h2>
                                <p className='mb-7 opacity-75 max-w-[90%] md:max-w-[21.875rem] md:mb-[2.5rem]'>{product.description}</p>
                                <Link 
                                    className='uppercase button min-h-12 w-full max-w-40 mx-auto !p-0 flex items-center justify-center lg:mx-0'
                                    to={`/${product.category}/${product.slug}`}>See
                                    product</Link>
                            </div>
                            <ResponsiveImage
                                className='absolute left-0 -z-10 w-full top-[3.4375rem] md:max-w-[33.125rem] md:max-h-[34.6875rem] md:left-1/2 md:-translate-x-1/2 lg:max-w-[30rem] lg:max-h-[32.5rem] lg:relative lg:top-0 lg:left-0 lg:translate-x-0'
                                imageClassName='object-cover w-full brightness-[.5]'
                                alt={product.name} {...product.introImage} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default Intro;