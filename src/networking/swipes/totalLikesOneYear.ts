import Cookies from "universal-cookie";
import { apiUrl } from "../apiUrl";

export const getTotalLikesOneYear = async () => {
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');

    try {
        const response = await fetch(
            `${apiUrl}/dashboard/total-Likes-last-year`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
            },
        );

         const data = await response.json();
        if(!response.ok) {
            console.error(response,data);
            throw new Error('Network response was not ok');
        }
        
     
        return data
        
    } catch (error) {
        console.error(error);
        
    }
}