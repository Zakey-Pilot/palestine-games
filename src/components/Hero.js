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
            </div>
        </>
    )
}