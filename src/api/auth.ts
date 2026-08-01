interface RegisterPayload {
    firstName: string
    lastName: string | null | undefined
    username: string
    email: string
    password: string
}

interface LoginPayload {
    email: string
    password: string
}

export const userRegister = async ({
    firstName, lastName, username, email, password
}: RegisterPayload
) => {
    const endpoint: string = "http://localhost:3000/api/auth/register"
    const payload = {
        firstName, lastName, username, email, password
    }

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const result = await response.json()
        console.log(result)
    } catch (err) {
        console.error("Error during registeres", err)
    }
}

export const userLogin = async ({
    email, password
}: LoginPayload) => {
    const endpoint = "http://localhost:3000/api/auth/login"
    const payload = {
        email, password
    }
    
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const result = await response.json()
        console.log(result)
    } catch (err) {
        console.error("Login failed", err)
    }
}