import { apiUrl } from "./apiUrl"
import Cookies from 'universal-cookie';


export const totalUsers = async () => {
    const cookies = new Cookies();

    try {
        const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/dashboard/total-users-last-1-year`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        });
        const result = await response.json();
        if (!response.ok) {
            console.log(response,result);
            return;
        }

        console.log(result,response);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const totalUsersThreeMonths = async () => {
    const cookies = new Cookies();

    try {
        const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/dashboard/total-users-last-3-months`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        });
        const result = await response.json();
        if (!response.ok) {
            console.log(response,result);
            return;
        }

        console.log({result,response});
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const totalUsersSixMonths = async () => {
    const cookies = new Cookies();

    try {
        const authToken = cookies.get('authToken');
        const response = await fetch(`${apiUrl}/dashboard/total-users-last-6-months`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
            },
        });
        const result = await response.json();
        if (!response.ok) {
            console.log(response,result);
            return;
        }

        console.log(result,response);
        return result;
    } catch (error) {
        console.log(error);
    }
}
