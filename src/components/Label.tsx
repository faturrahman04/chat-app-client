import type { ReactNode } from "react"

interface LabelProps {
    children: ReactNode
    htmlFor: string
    className?: String
}

export const Label = (
    {htmlFor, className, children}: LabelProps
) => {
    return (
        <label htmlFor={htmlFor} className={`${className}`}>
            {children}
        </label>
    ) 
}