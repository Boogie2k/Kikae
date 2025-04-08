import { toast } from "react-toastify";
import { apiUrl } from "./apiUrl";
import Cookies from 'universal-cookie';

export const getUser = async (id:string) => {
    try {
         const cookies = new Cookies();
         const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/user/getDetails/by/userId/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                 Authorization:`Bearer ${authToken}`,
            },
        })

        if(!response.ok){
            const result = await response.json();
            toast(result.message, {
                autoClose: 5000,
                hideProgressBar: false
            });
            return;
        }
        
        const result= response.json()
        return result;
    } catch (error) {
        console.log(error);
        toast('an error occurred try again', {
            autoClose: 5000,
            hideProgressBar: false
        });
        
    }
}