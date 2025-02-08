import Input from "../Input/Input.tsx";
import {RefObject, useEffect, useState} from "react";

const CheckoutForm = ({formRef, clearForm} : {formRef: RefObject<HTMLFormElement>| undefined, clearForm:boolean}) => {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [paymentMethod, setPaymentMethod] = useState('e-money');
    const [eMoneyNumber, setEMoneyNumber] = useState("");
    const [eMoneyPin, setEMoneyPin] = useState("");


    useEffect(() => {
        if(clearForm){
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setZipcode("");
            setCity("");
            setCountry("");
            setPaymentMethod("e-money");
            setEMoneyNumber("");
            setEMoneyPin("");
        }
    }, [clearForm]);


    return (
        <form className='bg-white rounded-lg overflow-hidden p-6' ref={formRef} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <h2 className='text-h4 uppercase text-orange mb-8'>Checkout</h2>
            <div className='mb-8'>
                <h3 className='form-group-title'>Billing details</h3>
                <div className='flex flex-col gap-6'>
                    <Input label={'name'} value={name} onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setName(target.value);
                    }} placeholder={'Name'} id={'name'} type='text' required />
                    <Input label={'Email Address'} onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setEmail(target.value);
                    }} value={email} placeholder={'Email'} id={'email'} type='email'  />
                    <Input label={'Phone Number'} onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setPhone(target.value);
                    }} value={phone} placeholder={'Phone'} id={'phone'} type='tel' pattern='^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$' required />
                </div>
            </div>
            <div>
                <h3 className='form-group-title'>shipping info</h3>
                <div className='flex flex-col gap-6'>
                    <Input label={'Your Address'} id={'address'} onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setAddress(target.value);
                    }} value={address} placeholder={'Address'} type='text' required />
                    <Input label={'ZIP Code'} onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setZipcode(target.value);
                    }} value={zipcode} id={'zip'} inputMode='numeric' placeholder={'ZIP'} type='number' required />
                    <Input onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setCity(target.value);
                    }} value={city} label={'City'} id={'city'} placeholder={'City'} type='text' required />
                    <Input onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setCountry(target.value);
                    }} value={country} label={'Country'} id={'country'} placeholder={'Country'} type='text' required />
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
                        { paymentMethod === "e-money" && <div>
                            <Input value={eMoneyNumber} onChange={e => {
                                const target = e.target as HTMLInputElement;
                                setEMoneyNumber(target.value)
                            }} label={'e-Money Number'} id={'e-money-number'} placeholder={'e-Money Number'} type='number' required />
                            <Input value={eMoneyPin} onChange={e => {
                                const target = e.target as HTMLInputElement;
                                setEMoneyPin(target.value)
                            }} label={'e-Money PIN'} id={'e-money-pin'} placeholder={'e-Money Pin'} type='number' required />
                        </div> }
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutForm;