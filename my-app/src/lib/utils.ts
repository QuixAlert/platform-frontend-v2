import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {destroyCookie} from "nookies";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function logout(){
  destroyCookie(undefined,"quixalert.auth.token")
  location.reload();
}
