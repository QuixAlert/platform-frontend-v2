import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {destroyCookie} from "nookies";
import {fetchAdoptions} from "@/api/adoptions";
import Adoption from "@/model/Adoption";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function logout(){
  destroyCookie(undefined,"quixalert.auth.token")
  window.location.reload();
  // cookieStore.delete("quixalert.auth.token");
  // router.refresh()
}

export const transformError = (error: Error) => ({
  name: error.name,
  message: error.message,
  stack: error.stack,
});