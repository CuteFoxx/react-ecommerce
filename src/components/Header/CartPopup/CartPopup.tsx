import {useDispatch, useSelector} from "react-redux";
import {removeAll, cartState, decrement, increment} from "../../../slices/cartSlice.ts";
import ResponsiveImage from "../../ResponsiveImage/ResponsiveImage.tsx";
import thousandsFormatter from "../../../utils/thousandsFormatter.ts";
import ChangeQuantity from "../../ChangeQuantity/ChangeQuantity.tsx";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router";
import {deliveryFee} from "../../../utils/deliveryFee.ts";
import {setIsCartPopupOpen} from "../../../slices/cartPopupSlice.ts";


const CartPopup = () => {
    const cartItems = useSelector((store: {cart: cartState}) => store.cart.items);
    const isPopupOpen = useSelector((state: any) => state.cartPopup.value.isOpen);
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const checkoutButtonRef = useRef<HTMLAnchorElement | null>(null);
    const [total, setTotal] = useState<number>(0);
    const dispatch = useDispatch();



    const incrementFunc = (id: number) => {
        dispatch(increment({id, amount: 1}));
    }

    const decrementFunc = (id: number) => {
        dispatch(decrement({id, amount: 1}))
    }

    const removeAllFunc = () => {
        dispatch(removeAll());
    }


    useEffect(() => {
        if(cartItems){
            cartItems.forEach(item => {setTotal(prev => prev += item.product.price * item.quantity)})
            setTotal(prev => prev + deliveryFee)
        }

        return () => {
            setTotal(0)
        }
    }, [cartItems]);


    useEffect(() => {
        const handler = (e: any) => {
            if(dialogRef.current !== null){
                if(e.target.parentElement.id === 'cart-button'){
                    return
                }
                if(!dialogRef?.current.contains(e.target) || e.target === checkoutButtonRef.current){
                    dispatch(setIsCartPopupOpen({isOpen: false}));
                }
            }
        }
        document.addEventListener('click', handler)
    });

    return (
        <dialog className='absolute z-[5] top-[7.125rem] left-6 right-6 h-[73dvh] w-[87vw] bg-white overflow-hidden rounded-lg py-8 px-7 md:w-[23.5625rem]  md:h-[30.5rem] md:left-[unset] lg:right-[10.3125rem]' open={isPopupOpen} ref={dialogRef}>
            <div className='h-full flex flex-col'>
                <div className='flex justify-between items-center'>
                    {(cartItems.length > 0) ? <h3 className='uppercase text-h6'>Cart ({cartItems.length})</h3> : <h3 className='uppercase text-h6'>Cart is empty</h3>}
                    {cartItems.length > 0 && <button onClick={removeAllFunc} className='opacity-50 text-body underline transition-all hover:text-orange'>Remove all</button>}
                </div>
                <div className='mt-8 overflow-auto flex flex-col gap-6'>
                    {cartItems.map((item, index) => {
                        return <div key={index} className="grid grid-cols-[4rem_1fr] gap-4">
                            <ResponsiveImage className='rounded-lg overflow-hidden h-16 ' {...item.product.image} />
                            <div className='grid grid-cols-[_1fr,_6rem]'>
                                <div className='flex flex-col text-body'>
                                    <span >{item.product.name.split(' ')[0]}</span>
                                    <span className='opacity-50'>$ {thousandsFormatter(item.product.price)}</span>
                                </div>
                                <div>
                                    <ChangeQuantity count={item.quantity} increment={() => incrementFunc(item.product.id)} decrement={() => decrementFunc(item.product.id)} handleOnChange={() => {}} />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                {cartItems.length > 0 &&
                    <div className='mt-auto text-body'>
                        <div className='flex justify-between mb-6'>
                            <span className='uppercase opacity-50'>Total</span>
                            <span className='text-h6'>$ {thousandsFormatter(total)}</span>
                        </div>
                        <Link ref={checkoutButtonRef}  className='button' to="/checkout">checkout</Link>
                    </div>}
            </div>
        </dialog>
    );
};

export default CartPopup;