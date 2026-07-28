import type { ReactNode } from "react"

interface FormLayoutProps {
    children: ReactNode,
    className?: String
}

export const FormLayout = (
    { children, className }: FormLayoutProps
) => {
    return (
        <form action="" className={`w-[30%] p-6 font-open-sans ${className}`}>
            {children}
        </form>
    )
}