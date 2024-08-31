import Image from "next/image"
import arrow from '@/assets/header/arrow.png'

export const Header = () => {
    return (
        <div className="flex justify-between items-center w-full px-10 h-7 shadow-xl mb-3">
            <div className="flex w-14 justify-around">
                <div className="h-3 w-3 bg-red-700 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <Image src={arrow} alt="arrow" />
        </div>
    )
}