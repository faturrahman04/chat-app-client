import type { ReactNode } from "react"

interface FormLayoutProps {
    children: ReactNode
}

export const FormLayout = (
    { children }: FormLayoutProps
) => {
    return (
        <form action="" className="w-[30%] p-6 font-open-sans">
            {children}
        </form>
    )
}