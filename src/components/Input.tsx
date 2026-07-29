import type React from "react"
import type { HTMLInputTypeAttribute } from "react"

interface InputProps {
    type: HTMLInputTypeAttribute
    checked?: boolean | undefined
    disabled?: boolean | undefined
    field: string
    required?: boolean | undefined
    readonly?: boolean | undefined
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
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
        onChange,
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
            onChange={onChange} 
            className={`${className} outline-none`}
        />
    )
}