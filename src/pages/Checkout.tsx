import {useLocation} from "react-router";
import {useEffect, useRef, useState} from "react";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm.tsx";
import CheckoutSummary from "../components/CheckoutSummary/CheckoutSummary.tsx";
import {useDispatch, useSelector} from "react-redux";
import {cartState, removeAll} from "../slices/cartSlice.ts";
import OrderConfirmation from "../components/OrderConfirmation/OrderConfirmation.tsx";

type CheckoutProps = {};

const Checkout = ({}: CheckoutProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clearForm, setClearForm] = useState<boolean>(false);
    const location = useLocation();
    const cartItems = useSelector((store: { cart: cartState }) => store.cart.items);
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();


    const removeAllFunc = () => {
        dispatch(removeAll());
    }

    useEffect(() => {
        document.body.style.background = "#FAFAFA";

        return () => {
            document.body.style.background = "";
            setIsOpen(false);
        }
    }, [location]);

    const onSubmit =  () => {
        if(formRef.current != null) {
            if(formRef.current.reportValidity()){
                formRef?.current.requestSubmit();
                setIsOpen(true);
                setClearForm(true);
            }
        }
    }

    useEffect(() => {
        if(!isOpen && clearForm){
            removeAllFunc();
        }
    }, [isOpen, clearForm, location]);


    return (
        <div className='pt-4 pb-24 lg:grid lg:grid-cols-[1fr_21.875rem] lg:gap-[1.875rem]'>
            {cartItems.length <= 0 ? <h2>Your cart is empty</h2> : <>
                <CheckoutForm formRef={formRef} clearForm={clearForm} />
                <CheckoutSummary onSubmit={onSubmit}/>
            </>
            }
            <OrderConfirmation isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default Checkout;