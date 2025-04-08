import { apiUrl } from "./apiUrl";

export const superAdminRegister = async (firstname: string, lastname: string, email: string, password: string) => {
    console.log({ firstname, lastname, email, password })
    try {
        const response = await fetch(`${apiUrl}/super/admin/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            }),
        })
        const result = await response.json();
        console.log(result)
    return result;
    } catch (error) {
        console.log(error)
    }
}