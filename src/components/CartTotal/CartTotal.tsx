import {useSelector} from "react-redux";
import {cartState} from "../../slices/cartSlice.ts";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {deliveryFee} from "../../utils/deliveryFee.ts";
import thousandsFormatter from "../../utils/thousandsFormatter.ts";

type CartTotalContext = {
    total: number,
    deliveryFee: number,
    vat: number,
    grandTotal: number,
}

const CartTotalContext = createContext<CartTotalContext | undefined>(undefined)

const useCartTotalContext = () => {
    const context = useContext(CartTotalContext);
    if (!context) {
        throw new Error('useCartTotalContext must be defined');
    }
    return context;
}

type CartTotalProps = {
    children: ReactNode;
};

export default function  CartTotal ({children}: CartTotalProps)  {
    const cartItems = useSelector((store: { cart: cartState }) => store.cart.items);
    const [total, setTotal] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);
    const [grandTotal, setGrandTotal] = useState<number>(0);

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
    }, [total]);

    useEffect(() => {
        setGrandTotal(Math.round(total + vat + deliveryFee))
    }, [vat]);

    return (
        <CartTotalContext.Provider value={{total,deliveryFee,vat,grandTotal}}>
            <>
                {children}
            </>
        </CartTotalContext.Provider>
    );
};

CartTotal.Total = function CartTotalTotal() {
    const {total} = useCartTotalContext();

   return <div className='summary-item'>
        <span className='summary-title'>Total</span>
        <span className='summary-price'>${thousandsFormatter(total)}</span>
    </div>
}
CartTotal.Shipping = function CartTotalShipping() {
    return  <div className='summary-item'>
        <span className='summary-title'>Shipping</span>
        <span className='summary-price'>${thousandsFormatter(deliveryFee)}</span>
    </div>
}

CartTotal.Vat = function CartTotalVat() {
    const {vat} = useCartTotalContext();

    return <div className='summary-item'>
        <span className='summary-title'>VAT (INCLUDED)</span>
        <span className='summary-price'>${thousandsFormatter(vat)}</span>
    </div>
}

CartTotal.GrandTotal = function CartTotalGrandTotal({className, sumClassName} : {className?: string, sumClassName?: string}) {
    const {grandTotal} = useCartTotalContext();

    return <div className={`summary-item mt-4 ${className ?? ''}`}>
        <span className='summary-title'>GRAND TOTAL</span>
        <span className={`summary-price text-orange ${sumClassName ?? ""}`}>${thousandsFormatter(grandTotal)}</span>
    </div>
}

