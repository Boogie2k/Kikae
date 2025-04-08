import Cookies from 'universal-cookie';
import { apiUrl } from "./apiUrl";
import { toast } from 'react-toastify';

export const superAdminLogin =async (email:string,password:string) => {
    const cookies = new Cookies();



    try {
    
        const response = await fetch(`${apiUrl}/super/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
             
               
                
            },
            body: JSON.stringify({
                email,
                password
        })

        
    })
const result = await response.json();



console.log(result)

    if(!response.ok){
        toast(result.message,{
            autoClose: 5000,
            hideProgressBar: false,
        })
        return

    }

      cookies.set('authToken', result.data.accessToken);
       cookies.set('adminID', result.data.adminDetails.id)

       cookies.set('adminRole', result.data.adminDetails.access)

            toast(result.message,{
            autoClose: 5000,
            hideProgressBar: false,
        })
    
    return result
        
    } catch (error) {
        console.log(error);
        
    }
}