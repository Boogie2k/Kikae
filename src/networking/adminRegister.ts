import { toast } from "react-toastify";
import { apiUrl } from "./apiUrl"
import Cookies from 'universal-cookie';






export const adminRegister= async(firstname:string,lastname:string,email:string,password:string)=>{
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');
   
    try {

   
  
     const response= await fetch(`${apiUrl}/admin/registration`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${authToken}`,
          
            
        },

       // mode:'cors',
        body:JSON.stringify({
           firstname,
           lastname,
           email,
           password
        }),
    })
const result= await response.json();
    if(!response.ok){
           toast(result.message,{
            autoClose: 5000,
            hideProgressBar: false,
           });
        return
    }




    

 

    return result
    
} catch (error) {
    console.log(error)
        toast('an error occurred try again',{
            autoClose: 5000,
            hideProgressBar: false,
           });
    
}
   
}