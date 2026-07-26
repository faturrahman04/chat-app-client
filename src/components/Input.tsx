import type { HTMLInputTypeAttribute } from "react"

interface InputProps {
    type: HTMLInputTypeAttribute
    checked?: boolean | undefined
    disabled?: boolean | undefined
    field: string
    required?: boolean | undefined
    readonly?: boolean | undefined
    placeholder: string
    className: String
}

export const Input = (
    {
        type = "text",
        checked,
        disabled,
        field,
        required,
        readonly,
        placeholder,
        className
    }: InputProps
) => {
    return (
        <input 
            type={type} 
            checked={checked} 
            disabled={disabled} 
            name={field} 
            required={required} 
            readOnly={readonly} 
            placeholder={placeholder} 
            className={`${className} outline-none`}
        />
    )
}