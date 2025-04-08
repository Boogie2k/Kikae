import { toast } from "react-toastify";
import { apiUrl } from "./apiUrl";
import Cookies from "universal-cookie";

export const searchUser = async (name: string, page: number) => {
  const cookies = new Cookies();
  const authToken = cookies.get("authToken");
  try {
    const response = await fetch(
      `${apiUrl}/user/search/by/name?searchParameter=${name}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    const result = await response.json();
    if (!response.ok) {
      toast.error(result.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    console.log(result);
    return result;
  } catch (error) {
    toast.error("Error while searching user", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.error(error);
  }
};
