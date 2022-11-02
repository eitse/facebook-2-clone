import { signIn} from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="h-screen flex justify-center items-center
    flex-col">
        <Image
        src="/images/fb_banner.jpg"
        alt="Facebook Banner"
        width={400}
        height={400}
        objectFit="contain"/>
        <h1 onClick={() => signIn("facebook")} className=" bg-blue-500 p-3 rounded-full w-96 text-white
        text-center text-2xl hover:text-3xl transition-all ease-in-out duration-500 cursor-pointer">Login with Facebook</h1>
    </div>
  )
}

export default Login