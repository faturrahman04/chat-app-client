import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { FormLayout } from "./FormLayout"

const Login = () => {
    return (
        <FormLayout>
            <Input 
                placeholder="user@gmail.com" 
                field="email" 
                type="email" 
                required={true} 
                className={'bg-gray-200/80 px-4 py-3 rounded-md w-full mb-4'} 
            />

            <Input 
                placeholder="password" 
                field="password" 
                type="password" 
                required={true} 
                className={'bg-gray-200/80 px-4 py-3 rounded-md w-full mb-6'} 
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