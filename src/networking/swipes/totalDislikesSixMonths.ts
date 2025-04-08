import Cookies from "universal-cookie";
import { apiUrl } from "../apiUrl";


export const getTotalDislikesSixMonths = async () => {
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');

    try {
        const response = await fetch(
            `${apiUrl}/dashboard/total-dislikes-last-6-months`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
            },
        );
         const data = await response.json();
        if(!response.ok) {
            console.log(data)
            throw new Error('Network response was not ok');
        }

       
        return data
        
    } catch (error) {
        console.error(error);
        
    }
}
