import Image from 'next/image'
import mockImg from '@/assets/2.jpg'


export const SearchingUserPanel = () => {
    return (
        <main className='flex items-center h-[60px] w-[250px] border border-teal-500 rounded-tl-full rounded-bl-full rounded-tr-xl rounded-br-xl'>
            <Image src={mockImg} alt='searched user'
                className='rounded-full h-[60px] w-[60px] border-purple-600 border-2' />
            <div className='flex flex-col ml-2 w-4/5 border-red-600 border'>
                <h1 className='text-sm font-extrabold tracking-wide'>Arthas</h1>
                <span className='text-xs m-0'>Hello its me</span>
            </div>
            <div className='flex flex-col justify-between items-center h-full py-2'>
                <span className='text-xs border border-blue-600'>15:20</span>
                <span className='flex justify-center items-center text-xs h-[20px] w-[20px] rounded-full bg-black text-white'>1</span>
            </div>
        </main>
    );
}

interface UserPhotoProps {
    userImg: string
}
