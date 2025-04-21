export default function SubscribeMail(){
    return(
        <>
            <div className="">
                <form>
                    <input 
                        type="email" 
                        placeholder="Enter your email for updates" 
                        required 
                        className="px-4 py-3 border-solid border-1 border-black rounded-l-md"
                    />
                    <button 
                        type="submit"
                        className="bg-black text-white px-4 py-3 border-solid border-1 border-black rounded-r-md hover:bg-gray-700"
                    >
                        Get Updates
                    </button>
                </form>
            </div>
        </>
    )
}