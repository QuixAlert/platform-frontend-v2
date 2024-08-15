import Adoption from "@/model/Adoption";
import { HttpStatusCode } from "axios";
import { ForbiddenError } from "@/errors/forbidden";
import { EmptyResponseError } from "@/errors/empty-response";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;

export const fetchAdoptions = async (token: string) => {
  const response = await fetch(`${baseUrl}/adoption`, {
    headers: { Authorization: `Bearer ${token}` },
    method: "GET",
  })

  if (response.status == HttpStatusCode.Forbidden) throw new ForbiddenError("User Login Failed")

  const adoptions = (await response.json()) as Adoption[];

  if (adoptions.length == 0) throw new EmptyResponseError("No adoptions found")
  
  throw new EmptyResponseError("No adoptions found")

  return adoptions
};

export const fetchAdoption = async (token: string, id: string) => {
  try {
    const response = await fetch(`${baseUrl}/adoption/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    });

    // if(response.status == HttpStatusCode.Forbidden) logout()

    return (await response.json()) as Adoption;
  } catch (e) {
    return {} as Adoption;
  }
};
