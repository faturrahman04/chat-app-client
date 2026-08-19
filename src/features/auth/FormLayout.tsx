import type { ReactNode } from "react"

interface FormLayoutProps {
    children: ReactNode,
    className?: String,
    handleSubmitForm: any
}

export const FormLayout = (
    { children, className, handleSubmitForm }: FormLayoutProps
) => {
    return (
        <form method="POST" onSubmit={handleSubmitForm} 
            className={`
                w-full p-6 font-open-sans ${className}
                sm:w-[80%]
            `}
            >
            {children}
        </form>
    )
}