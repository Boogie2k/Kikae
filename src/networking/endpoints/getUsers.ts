import { baseUrl } from "./apiUrl";

export const getUsers = async () => {
  try {
    const result = await fetch(`${baseUrl}/getUsers`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const response = await result.json();

    console.log({ response });

    return response;
  } catch (error) {
    console.log(error);
  }
};
