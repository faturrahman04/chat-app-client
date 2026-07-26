import { Link, Outlet } from "react-router"
import { useLocation } from "react-router"

const AuthLayout = () => {
    let location = useLocation()

    const isLogin = location.pathname == '/login'

    // Determine the title
    const title = isLogin 
        ? 'Welcome Back!' 
        : 'Create Your Account'

    // Determine the sub title
    const subTitle = isLogin 
        ? 'Sign in to continue and access your dashboard.' 
        : 'Fill in the information below to create your account.'

    // Determine redirect Link React Router
    const redirect = isLogin
        ? '/register'
        : '/login'

    // Determine string
    const linkDetail = isLogin
        ? "Don't have an account?"
        : "Already have an account?"

    // Determine label pages
    const link = isLogin
        ? "Sign Up"
        : "Login"

    return (
        <div className="h-dvh p-60">
            <h1 className="font-playwrite-nz-basic font-semibold text-lime-400 text-4xl text-center">Chathink</h1>

            <p className="text-black text-2xl font-open-sans font-medium text-center mt-12">{title}</p>
            <p className="text-center text-sm">{subTitle}</p>

            <div className="flex justify-center">
                <Outlet />
            </div>

            <p className="font-open-sans text-center">{linkDetail}<Link to={redirect} className="text-lime-500 font-medium hover:underline"> {link}</Link></p>

        </div>
    )
}

export default AuthLayout