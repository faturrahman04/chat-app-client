import React, { useState } from "react"
import { userRegister } from "../../api/auth"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FormLayout } from "./FormLayout"

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleRegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await userRegister(formData)
    }

    return (
        <FormLayout handleSubmitForm={handleRegisterUser} className={`w-[40%]`}>
            <div className="flex gap-4 mb-4">
                <Input 
                    placeholder="First Name" 
                    field="firstName" 
                    type="text" 
                    required={true} 
                    className={'bg-gray-200/80 px-4 py-3 rounded-md w-full'} 
                    onChange={handleChange}
                    value={formData.firstName}
                />

                <Input 
                    placeholder="Last Name" 
                    field="lastName" 
                    type="text" 
                    required={false} 
                    className={'bg-gray-200/80 px-4 py-3 rounded-md w-full'} 
                    onChange={handleChange}
                    value={formData.lastName}
                />
            </div>

            <Input 
                placeholder="username" 
                field="username" 
                type="text" 
                required={true} 
                className={'bg-gray-200/80 px-4 py-3 rounded-md w-full mb-4'} 
                onChange={handleChange}
                value={formData.username}
            />

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
                className={'bg-gray-200/80 px-4 py-3 rounded-md w-full mb-4'} 
                onChange={handleChange}
                value={formData.password}
            />

            <Button 
                className={`bg-lime-400 text-white font-semibold w-full rounded-md px-4 py-3`}
            >
                Sign up
            </Button>
            
        </FormLayout>
    )
}

export default Register