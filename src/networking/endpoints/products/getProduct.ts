import { baseUrl } from "@/networking/apiUrl";

export const getProduct = async (id: string) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  const data = await response.json();
  return data;
};
