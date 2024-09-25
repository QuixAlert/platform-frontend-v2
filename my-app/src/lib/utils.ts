import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {destroyCookie} from "nookies";
import {fetchAdoptions} from "@/api/client/adoptions";
import Adoption from "@/model/Adoption";
import {Router} from "next/router";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function logout(router: AppRouterInstance){
  destroyCookie(undefined,"quixalert.auth.token")
  // window.location.reload();
  // cookieStore.delete("quixalert.auth.token");
  router.refresh()
}

export const transformError = (error: Error) => ({
  name: error.name,
  message: error.message,
  stack: error.stack,
});

export const createQueryString = (name: string, value: any) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};

export const toBase64 = (file: File): Promise<string> => 
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);  // Ensure we read the file as a Data URL
    reader.onload = () => {
      const base64String = reader.result as string;
      // Remove the prefix before returning the base64 content
      const cleanBase64 = base64String.split(',')[1];
      resolve(cleanBase64);
    };
    reader.onerror = reject;
  });
