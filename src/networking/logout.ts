import Cookies from "universal-cookie";

export const logout = () => {
  try {
    const cookies = new Cookies();
    cookies.remove("authToken");
    cookies.remove("adminID");
    cookies.remove("adminRole");
  } catch (error) {
    console.log(error);
  }
};
