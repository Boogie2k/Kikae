import Cookies from "universal-cookie";
import { apiUrl } from "./apiUrl";
import { toast } from "react-toastify";

export const viewAuditTrail = async (id: string) => {
  const cookie = new Cookies();
  const authToken = cookie.get("authToken");
  try {
    const response = await fetch(`${apiUrl}/audit-trail/all/by/user-id/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json",
        "content-type": "application/json",
      },
    });

    const result = await response.json();

    console.log({ result, response });

    if (!response.ok) {
      toast("failed to get audit trail", {
        autoClose: 5000,
      });
      return;
    }

    console.log(result, response);
    return result;
  } catch (error) {
    console.log(error);
  }
};
