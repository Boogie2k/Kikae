import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";

export const activeUsersOneYear= async () => {
    const cookies = new Cookies();

    const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/dashboard/active-users-last-1-year`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },


        });
       
        const result = await response.json();
        if (!response.ok) {
            return;
        }
       
        return result;     
    } catch (error) {
        console.error('Error:', error);
        
    }

}


export const activeUsersSixMonths= async () => {
    const cookies = new Cookies();

    const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/dashboard/active-users-last-6-months`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },


        });
       
        const result = await response.json();
        if (!response.ok) {
            return;
        }

        return result;     
    } catch (error) {
        console.error('Error:', error);
        
    }

}

export const activeUsersThreeMonths= async () => {
    const cookies = new Cookies();

    const authToken = cookies.get('authToken');
    try {
        const response = await fetch(`${apiUrl}/dashboard/active-users-last-3-months`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },


        });
       
        const result = await response.json();
        if (!response.ok) {
            return;
        }
        
        return result;     
    } catch (error) {
        console.error('Error:', error);
        
    }

}