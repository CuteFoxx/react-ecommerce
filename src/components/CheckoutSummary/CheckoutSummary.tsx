import {useSelector} from "react-redux";
import {cartState} from "../../slices/cartSlice.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import thousandsFormatter from "../../utils/thousandsFormatter.ts";
import {useEffect, useState} from "react";
import {deliveryFee} from "../../utils/deliveryFee.ts";

const CheckoutSummary = () => {
    const [total, setTotal] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);
    const [grandTotal, setGrandTotal] = useState<number>(0);
    const cartItems = useSelector((store: { cart: cartState }) => store.cart.items);

    useEffect(() => {

        cartItems.forEach(item => {
            setTotal(prev => prev += item.product.price * item.quantity)
        })
        setTotal(prev => prev + deliveryFee)



        return () => {
            setTotal(0)
        }
    }, [cartItems]);

    useEffect(() => {
        setVat(Math.round(total * 0.2))
        setGrandTotal(Math.round(total + vat))
    }, [total]);

    return (
        <div className='bg-white rounded-lg overflow-hidden mt-8 px-6 py-8 md:px-8 lg:mt-0'>
            <h2 className='text-h6 uppercase mb-8'>Summary</h2>
            <div className='mb-8 flex flex-col gap-6'>
                {cartItems.map((item, index) => {
                    return <div key={index} className="grid grid-cols-[4rem_1fr] gap-4">
                        <ResponsiveImage className='rounded-lg overflow-hidden h-16 ' {...item.product.image} />
                        <div className='grid grid-cols-[_1fr,_6rem]'>
                            <div className='flex flex-col text-body'>
                                <span>{item.product.name.split(' ')[0]}</span>
                                <span className='opacity-50'>$ {thousandsFormatter(item.product.price)}</span>
                            </div>
                            <div className='flex justify-end text-body opacity-50 font-bold'>
                                <span>x{item.quantity}</span>
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className='flex flex-col gap-2'>
                <div className='summary-item'>
                    <span className='summary-title'>Total</span>
                    <span className='summary-price'>${thousandsFormatter(total)}</span>
                </div>
                <div className='summary-item'>
                    <span className='summary-title'>Shipping</span>
                    <span className='summary-price'>${thousandsFormatter(deliveryFee)}</span>
                </div>
                <div className='summary-item'>
                    <span className='summary-title'>VAT (INCLUDED)</span>
                    <span className='summary-price'>${thousandsFormatter(vat)}</span>
                </div>
                <div className='summary-item mt-4'>
                    <span className='summary-title'>GRAND TOTAL</span>
                    <span className='summary-price text-orange'>${thousandsFormatter(grandTotal)}</span>
                </div>
                <button className="button mt-6">CONTINUE & PAY</button>
            </div>

        </div>
    );
};

export default CheckoutSummary;