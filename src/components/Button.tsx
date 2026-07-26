import type { ReactNode } from "react"

interface ButtonProps {
    children?: ReactNode
    type?: "button" | "submit" | "reset"
    className?: String
}

export const Button = (
    { 
        children = "Confirm", 
        type,
        className
    }: ButtonProps
) => {
    return (
        <button type={type} className={`bg-black cursor-pointer ${className}`}>{children}</button>
    )
}