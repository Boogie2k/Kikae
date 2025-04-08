import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl"
import { toast } from "react-toastify";

export const getReportedUsers=async(page:number)=>{
    try {
         const cookies = new Cookies();
            const authToken = cookies.get('authToken');
        const response= await fetch(`${apiUrl}/api/reports/all?page=${page}`,{
            method:'GET',
            headers:{
                 Authorization: `Bearer ${authToken}`,

            }
        })
         const result = await response.json();
                if (!response.ok) {
                    toast(result.message, {
                        autoClose: 5000,
                        hideProgressBar: false,
                    });
                    return;
                }
                return result;
    } catch (error) {
          console.log(error);
        toast('an error occurred try again', {
            autoClose: 5000,
            hideProgressBar: false,
        });
    }
        
    
}