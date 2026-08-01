import { useState } from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FormLayout } from "./FormLayout"
import { userLogin } from "../../api/auth"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await userLogin(formData)
    }

    return (
        <FormLayout handleSubmitForm={handleLogin}>
            <Input 
                placeholder="user@gmail.com" 
                field="email" 
                type="email" 
                required={true} 
                className={'bg-gray-200/80 px-4 py-3 rounded-md w-full mb-4'} 
                onChange={handleChange}
                value={formData.email}
            />

            <Input 
                placeholder="password" 
                field="password" 
                type="password" 
                required={true} 
                className={'bg-gray-200/80 px-4 py-3 rounded-md w-full mb-6'} 
                onChange={handleChange}
                value={formData.password}
            />

            <Button 
                className={`bg-lime-400 text-white font-semibold w-full rounded-md px-4 py-3`}
            >
                Login
            </Button>
        </FormLayout>
    )
}

export default Login