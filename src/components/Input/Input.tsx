interface InputProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
    id?: string;
}

const Input = ({id, label, ...rest}: InputProps) => {
    const {type} = rest;

    return (
        <div className={`flex flex-col ${type === "radio" ? "border rounded-lg px-6 py-[1.125rem] border-border text-black text-opacity-50 font-bold appearance-te !flex-row-reverse items-center gap-6 !justify-end has-[input[type='radio']]:border-orange has-[input[type='radio']]:border-[1.5px] has-[input[type='radio']]:accent-orange mb-4 last:mb-0" : ""}`}>
            <label className={`text-label mb-2 capitalize ${type == "radio" ? "!mb-0 text-black w-full":""}`} htmlFor={id}>{label}</label>
            <input className={`border rounded-lg px-6 py-[1.125rem] border-border text-black text-opacity-50 font-bold appearance-te `} id={id} {...rest}/>
        </div>
    );
};

export default Input;