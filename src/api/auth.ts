interface Payload {
    firstName: string,
    lastName: string | null | undefined,
    username: string,
    email: string,
    password: string
}

export const userRegister = async ({
    firstName, lastName, username, email, password
}: Payload
) => {
    const endpoint = "http://localhost:3000/api/auth/register"
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