import {ChangeEvent} from "react";

export const validateCount = (e: ChangeEvent<HTMLInputElement> | number) => {
    let value: number;
    if(typeof e === "number"){
        value = e;
    } else {
        value = +e.target.value;
    }
    if(isNaN(+value)){
        return false;
    }
    if(+value <= 0) {
        return false;
    }
    return +value <= 99;

}