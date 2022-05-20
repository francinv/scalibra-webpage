interface TextInputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type: string;
    placeholder: string;
    required: boolean;
}

const TextInput:React.FC<TextInputProps> = ({handleChange, value, type, placeholder, required}) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            required={required}
            value={value} onChange={handleChange} className="font-body text-stratos p-2 outline-none bg-athensgray focus:bg-white my-2 w-3/5"></input>
    )
}

export default TextInput;