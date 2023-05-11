import Image from "next/image";
import { useCallback, useState } from "react";
import AuthForm from "./components/AuthForm"

type Variant = 'Login' | 'Register'
export default function Home() {
  const [variant, setVariant] = useState<Variant>('Login')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const toggleVariant = useCallback(() => {
    if(variant === 'Login'){
      setVariant('Register')
    }else {
      setVariant('Login')
    }
  }, [variant])
  return (
    <div className="flex min-h-full flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={48}
          height={48}
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm/>
    </div>
  );
}
