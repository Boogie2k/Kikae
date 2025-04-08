import Cookies from "universal-cookie";
import { apiUrl } from "../apiUrl";

export const getTotalDislikesThreeMonths = async () => {
    const cookies = new Cookies();
    const authToken = cookies.get('authToken');

    try {
        const response = await fetch(
            `${apiUrl}/dashboard/total-dislikes-last-3-months`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authToken}`,
                },
            },
        );
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data
        
    } catch (error) {
        console.error(error);
        
    }
}
