import {useSelector} from "react-redux";
import {cartState} from "../../slices/cartSlice.ts";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage.tsx";
import thousandsFormatter from "../../utils/thousandsFormatter.ts";
import CartTotal from "../CartTotal/CartTotal.tsx";

type CheckoutSummaryProps = {
    onSubmit: () => void;
}

const CheckoutSummary = ({onSubmit} : CheckoutSummaryProps) => {
    const cartItems = useSelector((store: { cart: cartState }) => store.cart.items);

    return (
        <div className='bg-white rounded-lg overflow-hidden mt-8 px-6 py-8 md:px-8 lg:mt-0 h-fit'>
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
               <CartTotal>
                   <CartTotal.Total/>
               </CartTotal>
                <CartTotal>
                    <CartTotal.Shipping/>
                </CartTotal>
                <CartTotal>
                    <CartTotal.Vat/>
                </CartTotal>
                <CartTotal>
                    <CartTotal.GrandTotal/>
                </CartTotal>
                <button onClick={onSubmit} type='submit' className="button mt-6">CONTINUE & PAY</button>
            </div>

        </div>
    );
};

export default CheckoutSummary;