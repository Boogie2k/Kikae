import Cookies from "universal-cookie"
import { apiUrl } from "./apiUrl"

export const getAllAdmins= async()=>{
    const cookies= new Cookies()
    const authToken= cookies.get('authToken')
    try {
        const response= await fetch(`${apiUrl}/admins`,{
            method:'GET',
            headers:{
                Authorization:`Bearer ${authToken}`
            }
        })

        const result= await response.json()

        if(!response.ok){
            return
        }

        return result

        
    } catch (error) {
        console.log(error)
        
    }
}