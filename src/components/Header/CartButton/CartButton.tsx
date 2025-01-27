import {useSelector} from "react-redux";
import {cartState} from "../../../slices/cartSlice.ts";

const CartButton = () => {
    const cartItems = useSelector((store: {cart: cartState}) => store.cart.items);

    const countClasses = 'flex items-center justify-center h-5 w-5 absolute top-0 right-0 text-white bg-orange rounded-[50%] -translate-y-1/2 translate-x-1/2 text-sub-title';

    return (
        <button className='relative translate'>
            <img src="/icons/cart.svg" alt="cart icon"/>
            {cartItems.length > 0 && <span className={countClasses}>{cartItems.length}</span>}
        </button>
    );
};

export default CartButton;