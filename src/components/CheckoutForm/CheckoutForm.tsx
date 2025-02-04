import Input from "../Input/Input.tsx";
import {useState} from "react";

const CheckoutForm = () => {
    const [paymentMehtod, setPaymentMethod] = useState('');

    return (
        <form className='bg-white rounded-lg overflow-hidden p-6'>
            <h2 className='text-h4 uppercase text-orange mb-8'>Checkout</h2>
            <div className='mb-8'>
                <h3 className='form-group-title'>Billing details</h3>
                <div className='flex flex-col gap-6'>
                    <Input label={'name'} placeholder={'Name'} id={'name'} type='text' required />
                    <Input label={'Email Address'} placeholder={'Email'} id={'email'} type='email'  />
                    <Input label={'Phone Number'} placeholder={'Phone'} id={'phone'} type='tel' required />
                </div>
            </div>
            <div>
                <h3 className='form-group-title'>shipping info</h3>
                <div className='flex flex-col gap-6'>
                    <Input label={'Your Address'} id={'address'} placeholder={'Address'} type='text' required />
                    <Input label={'ZIP Code'} id={'zip'} inputMode='numeric' placeholder={'ZIP'} type='number' required />
                    <Input label={'City'} id={'city'} placeholder={'City'} type='text' required />
                    <Input label={'Country'} id={'country'} placeholder={'Country'} type='text' required />
                </div>
            </div>
            <div className='mt-8'>
                <h3 className='form-group-title'>payment details</h3>
                <div className='flex flex-col gap-6'>
                    <div>
                        <h4 className={`text-label mb-4 capitalize`}>Payment Method</h4>
                        <Input onChange={(e) =>{
                            const target = e.target as HTMLInputElement;
                            setPaymentMethod(target.value)
                        }}  label={'e-Money'}  id={'payment-method'} name={'payment'} value={'e-money'} defaultChecked type='radio' required />
                        <Input onChange={(e) =>{
                            const target = e.target as HTMLInputElement;
                            setPaymentMethod(target.value)
                        }}  label={'Cash on Delivery'} id={'payment-method2'} value={'cash'} name={'payment'} type='radio' required />
                        { paymentMehtod === "e-money" && <div>
                            <Input label={'e-Money Number'} id={'e-money-number'} placeholder={'e-Money Number'} type='number' required />
                            <Input label={'e-Money PIN'} id={'e-money-pin'} placeholder={'e-Money Pin'} type='number' required />
                        </div> }
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;