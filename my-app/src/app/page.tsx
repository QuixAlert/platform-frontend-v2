"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();

  const FormSchema = z.object({
    email: z.string(),
    password: z.string(),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit =  () => {
    console.log("form submitted");
    router.push("/home")
  }
  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image priority={true} className="mx-auto h-36 w-auto" alt="QuixAlert! Logo" src={'quixalert_logo.svg'} width={150} height={150}/>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6 text-gray-900">Email/Usuário:</FormLabel>
                    <FormControl>
                      <Input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Digite seu email ou seu usuário"
                        type="text"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Senha:</FormLabel>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-sgreen text-pgreen">
                          Esqueceu sua senha?
                        </a>
                      </div>
                    </div>
                    <FormControl className="block text-sm font-medium leading-6 text-gray-900">
                      <Input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Digite sua senha"
                        type="Password"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="lex w-full justify-center rounded-md bg-pgreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
} 
