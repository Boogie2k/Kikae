import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const increaseAdminLimit = async(increaseBy:number)=>{
   

    try {
        const cookies= new Cookies()
        const authToken= cookies.get('authToken')
    const response = await fetch(`${apiUrl}/super/admin/increase-limit/${increaseBy}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
            

        },
     
    });
    const data = await response.json();

    if(!response.ok){
        toast(data.message,{
            autoClose:5000
        })

        console.log(data);
        return
    }

    toast(data.message,{
        autoClose:5000
    })


    console.log(data);


  
    return data;
    } catch (error) {
        console.log(error);
        
    }
}