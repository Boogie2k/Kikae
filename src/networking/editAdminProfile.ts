import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const editAdminProfile =async (email:string|null, firstname:string|null, lastname:string|null, password:string|null,id:string) => {
      const cookies = new Cookies();
        const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/admin/update/${id}`, {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                email: email,
                firstname: firstname,
                lastname: lastname,
                password: password,
            }),
        });
            const data = await response.json();
        if (!response.ok) {
             toast(data.message,{
            autoClose: 5000,
            hideProgressBar: false,
           });
            
            return;
        }

        console.log({data})

        
        return data;
            
        
    } catch (error) {
         console.log(error)
        toast('an error occurred try again',{
            autoClose: 5000,
            hideProgressBar: false,
           });

        
    }

}