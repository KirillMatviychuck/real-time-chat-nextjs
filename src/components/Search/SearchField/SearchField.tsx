import Image from "next/image"
import searchImg from '@/assets/search/search.png'

export const SearchField = () => {
    return (
        <div className='flex items-center h-6 w-40 bg-sky-300 rounded-full'>
            <Image src={searchImg} alt='search icon' className='w-4 h-4 ml-2 cursor-pointer' />
            <input className='mx-2 text-white text-xs bg-transparent w-full outline-none' />
        </div>
    )
}