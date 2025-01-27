import {useSelector} from "react-redux";
import {cartState} from "../../../slices/cartSlice.ts";
import ResponsiveImage from "../../ResponsiveImage/ResponsiveImage.tsx";



const CartPopup = () => {
    const cartItems = useSelector((store: {cart: cartState}) => store.cart.items);
    const isPopupOpen = useSelector((state: any) => state.cartPopup.value.isOpen);
    return (
        <dialog className='absolute z-[5] top-[7.125rem] left-6 right-6 h-[73dvh] w-[87vw] bg-white overflow-hidden rounded-lg py-8 px-7' open={isPopupOpen}>
            <div className='flex justify-between items-center'>
                {(cartItems.length > 0) ? <h3 className='uppercase text-h6'>Cart ({cartItems.length})</h3> : <h3 className='uppercase text-h6'>Cart is empty</h3>}
                <button className='opacity-50 text-body underline'>Remove all</button>
            </div>
            <div className='mt-8'>
                {cartItems.map((item, index) => {
                    return <div key={index} className="grid grid-cols-2">
                        <ResponsiveImage className='rounded-lg overflow-hidden' {...item.product.image} />
                        {item.product.name}
                    </div>
                })}
            </div>
        </dialog>
    );
};

export default CartPopup;