import {useLocation} from "react-router";
import {useEffect} from "react";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm.tsx";
import CheckoutSummary from "../components/CheckoutSummary/CheckoutSummary.tsx";
import {useSelector} from "react-redux";
import {cartState} from "../slices/cartSlice.ts";

type CheckoutProps = {

};

const Checkout = ({}: CheckoutProps) => {
    const location = useLocation();
    const cartItems = useSelector((store: {cart: cartState}) => store.cart.items);

    useEffect(() => {
        document.body.style.background = "#FAFAFA";

        return () => {
            document.body.style.background = "";
        }
    }, [location]);

    console.log(cartItems);

    return (
        <div className='pt-4 pb-24 lg:grid lg:grid-cols-[1fr_21.875rem] lg:gap-[1.875rem]'>
            {cartItems.length <= 0 ? <h2>Your cart is empty</h2> : <>
                <CheckoutForm />
                <CheckoutSummary/>
            </>
            }
        </div>
    );
};

export default Checkout;