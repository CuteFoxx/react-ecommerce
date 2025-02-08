import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {Link} from "react-router";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import thousandsFormatter from "../../utils/thousandsFormatter.ts";
import {useDispatch, useSelector} from "react-redux";
import {cartState, cartStateValue, removeAll} from "../../slices/cartSlice.ts";
import CartTotal from "../CartTotal/CartTotal.tsx";

type OrderConfirmationProps = {
    isOpen?: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
};

const OrderConfirmation = ({isOpen, setIsOpen}: OrderConfirmationProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const cartItems = useSelector((store: { cart: cartState }) => store.cart.items);
    const dispatch = useDispatch();

    const [viewMore, setViewMore] = useState<boolean>(false);

    useEffect(() => {
        const handler = (e: any) => {
            if (dialogRef.current !== null) {
                if (e.target.id === "order-confirmation-bg") {
                    setIsOpen(false);
                }
            }
        }
        document.addEventListener("mousedown", handler);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.height = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            document.body.style.height = "unset";
        }
    });


    return (
        <dialog className='fixed w-screen h-screen  z-[5] bg-transparent top-0' open={isOpen ? isOpen : false}
                ref={dialogRef}>
            <div id={'order-confirmation-bg'}
                 className={`absolute -z-[1] block w-screen h-screen  bg-black left-0  bg-opacity-20`}></div>
            <div
                className='text-black absolute top-1/2 -translate-y-1/2 z-40 bg-white rounded-lg p-8 md:p-12 left-6 right-6 flex flex-col max-h-[75vh] overflow-auto mt-12 md:inset-x-[7.125rem] md:max-h-[36.25rem] md:max-w-[33.75rem] md:mx-auto'>
                <img className='w-16 h-16 mb-6' src="/icons/success.svg" alt="success"/>
                <h3 className='uppercase text-h5 font-bold  mb-4 md:max-w-[50%]'>THANK YOU FOR YOUR ORDER</h3>
                <p className='text-body opacity-50 mb-6'>You will receive an email confirmation shortly.</p>
                <div className='overflow-y-auto rounded-lg bg-grey mb-6 p-6 md:grid md:grid-cols-[41fr_33fr]'>
                    <div className='md:pr-6  overflow-auto'>
                        <div className={`${cartItems.length > 1 ? "border-black/10 border-b pb-3" : ""}`}>
                            {cartItems.map((item, index) => {
                                return <>
                                    {index === 0 && <OrderConfirmationProduct item={item} index={index} key={index}/>}
                                    {index > 0 &&
                                        <div className={`${viewMore ? 
                                            'block' : 
                                            'hidden'}`}>
                                            <OrderConfirmationProduct item={item} index={index} key={index}/>
                                        </div>
                                    }
                                </>

                            })}
                        </div>
                        { cartItems.length > 1 && <button onClick={() => setViewMore(prev => !prev)} className='mt-3 text-center text-sub-title text-black/50'>
                             {viewMore ? 'View less' : `and ${cartItems.length - 1} other item(s)`}

                        </button>
                        }

                    </div>
                    <div className='bg-black !text-white -mx-6 -mb-6 p-6 mt-6 md:-my-6 md:ml-0  '>
                        <CartTotal>
                            <CartTotal.GrandTotal
                                className="flex flex-col !items-start !mt-0 md:h-full md:flex md:flex-col md:justify-center"
                                sumClassName='!text-white'/>
                        </CartTotal>
                    </div>
                </div>
                <Link className='button uppercase text-sub-title' to='/' onClick={() => {
                    dispatch(removeAll());
                }}>BACK TO HOME</Link>
            </div>
        </dialog>
    );
};

export default OrderConfirmation;

function OrderConfirmationProduct({item, index}: { item: cartStateValue, index: number }) {
    return <div key={index} className={`grid grid-cols-[3.125rem_1fr] gap-4 items-center`}>
        <ResponsiveImage className='rounded-lg overflow-hidden h-16' {...item.product.image} />
        <div className='grid grid-cols-[1fr_6rem] md:grid-cols-[4fr_1fr] '>
            <div className='flex flex-col text-body'>
                <span>{item.product.name.split(' ')[0]}</span>
                <span className='opacity-50'>$ {thousandsFormatter(item.product.price)}</span>
            </div>
            <div className='flex justify-end text-body opacity-50 font-bold'>
                <span>x{item.quantity}</span>
            </div>
        </div>
    </div>
}