import Link from "next/link"
import SubscribeMail from "./SubscribeMail"

export default function Hero(){
    return(
        <>
            <div className="w-full h-dvh flex flex-col items-center justify-center">
                <p 
                    className="text-center text-7xl font-bold mb-6"
                >
                    COMING SOON
                </p>
                <SubscribeMail />
                <Link href="https://thewareinside-tau.vercel.app">
                    <p className="mt-4 underline decoration-sky-500 hover:text-sky-500">Explore our upcoming game</p>
                </Link>
            </div>
        </>
    )
}