import { apiUrl } from "./apiUrl"
import Cookies from 'universal-cookie';

export const getAllUsers=async(page:number)=>{
        const cookies = new Cookies();

    try {
         const authToken = cookies.get('authToken');
        const response=await fetch(`${apiUrl}/user/get/all?page=${page}`,{
        method:"GET",
        headers:{
           
            Authorization:`Bearer ${authToken}`,
        }
        


    })

     const result = await response.json();
        if (!response.ok) {
            console.log(response);
            return result;
        }

        
        return result;
    } catch (error) {
        console.log(error);
    }

}