import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";

export const deleteUser = async (userId: string) => {
    const cookies = new Cookies();
    try {
        const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/user/delete/user/by/userId/${userId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        if (!response.ok) {
            toast(result.message, {
                autoClose: 5000,
                hideProgressBar: false,
                
            });
            console.log(result);
            return;
        }
        toast(result.message, {
            autoClose: 5000,
            hideProgressBar: false,
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
}