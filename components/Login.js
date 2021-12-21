import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-black">
            <div className="flex flex-col absolute z-10 h-4/6 w-full items-center justify-center space-y-4">
                <Image
                    className="object-cover rounded-full"
                    src="https://links.papareact.com/3pi"
                    width={200}
                    height={200}
                />
                <button
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}
                >
                    Login to the Meta Chat
                </button>
            </div>
            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Login;
