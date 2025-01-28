import {ChangeEvent} from "react";


type ChangeQuantityProps = {
    count: number,
    increment: () => void,
    decrement: () => void,
    handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const ChangeQuantity = ({count, increment, decrement, handleOnChange} :  ChangeQuantityProps ) => {

    return (

        <div className='grid grid-cols-3 items-center content-center max-w-[7.5rem] w-full h-[3rem] bg-grey px-[0.96875rem] text-sub-title'>
            <button className='opacity-25 hover:text-orange hover:opacity-100' onClick={decrement}>-</button>
            <input className='bg-transparent border-none max-w-full text-center' type="text" value={count} onChange={handleOnChange}/>
            <button className='opacity-25 hover:text-orange hover:opacity-100' onClick={increment}>+</button>
        </div>
    );
};

export default ChangeQuantity;