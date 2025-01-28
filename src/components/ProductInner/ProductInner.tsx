import {Product} from "../../types/Product.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import thousandsFormatter from "../../utils/thousandsFormatter.ts";
import {useDispatch} from "react-redux";
import {addToCart} from "../../slices/cartSlice.ts";
import ChangeQuantity from "../ChangeQuantity/ChangeQuantity.tsx";
import {validateCount} from "../../utils/validateCount.ts";

interface ProductProps {
    product: Product;
    className?: string;
}

const ProductInner = ({product,className}: ProductProps ) => {
    const {image, name, new: isNew, description,price} = product;
    const dispatch = useDispatch();
    const [count,setCount] = useState<number>(1);

    useEffect(() => {
        return () => {
            setCount(1);
        }
    }, [location]);


    function handleAddToCart() {
        dispatch(addToCart({product, quantity: count}))
        setCount(1);
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(validateCount(e)) {
            setCount(+e.target.value)
        }
    }
    const increment = () => {
        validateCount(count) ? setCount(prev => prev + 1) : '';
    }

    const decrement = () => {
        (validateCount(count) && count !==1) ? setCount(prev => prev - 1) : '';
    }

    useEffect(() => {
        return () => {
            setCount(1);
        }
    }, [location]);

    return (
        <article className={`${className ? className : ''} grid gap-8 justify-items-center text-left md:grid-cols-[minmax(17.5625rem,1fr)_minmax(21.25rem,1fr)] md:gap-[4.3125rem] lg:grid-cols-[minmax(33.75rem,1fr)_minmax(27.8125rem,1fr)] lg:gap-[7.8125rem]`}>
            <ResponsiveImage className='rounded-lg overflow-hidden md:h-[30rem] w-full lg:h-[35rem]' {...image} />
            <div className='md:px-0 grid gap-6  md:gap-[2rem] md:content-center lg:justify-items-start lg:text-left lg:py-[6.8125rem]'>
                {isNew && (<p className='uppercase text-overline text-orange mt-2 md:-mb-[1rem] lg:mt-0'>New Product</p>)}
                <h2 className='text-h4 uppercase md:text-h2 md:max-w-sm'>{name}</h2>
                <p className='text-body opacity-50 lg:mb-10'>{description}</p>
                <h4 className='text-h6' aria-label={`${price} price`}>$ {thousandsFormatter(price)}</h4>
                <div className='flex items-center gap-4 mt-2 lg:mt-4'>
                    <ChangeQuantity count={count} increment={increment} decrement={decrement} handleOnChange={handleOnChange} />
                    <button onClick={handleAddToCart} className='button h-[3rem] w-full max-w-[10rem] text-sub-title'>
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductInner;