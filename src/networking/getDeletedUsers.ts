import { apiUrl } from "./apiUrl";
import Cookies from 'universal-cookie';

export const getDeletedUsers =async()=>{
    const cookies = new Cookies();
      const authToken = cookies.get('authToken');
    try {
        const response=await fetch(`${apiUrl}/user/get/all/deleted/users/by/isUserDeleted/status?status=true`,{
            method:"GET",
            headers:{
                
                Authorization: `Bearer ${authToken}`,

            }
        })
        const result = await response.json();
        if (!response.ok) {
            console.log(response,{result});
            return result;
        }
        return result
        
    } catch (error) {
        console.log(error)
        
    }
}