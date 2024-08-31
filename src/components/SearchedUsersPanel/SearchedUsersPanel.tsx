import Image from 'next/image'
import mockImg from '@/assets/joey.jpg'


export const SearchedUsersPanel = () => {
    return (
        <main className='flex items-center h-[60px] w-[250px] rounded-tl-full rounded-bl-full border outline-1 shadow-2xl pr-2 bg-gradient-to-r from-slate-400 to-stone-300'>

            <Image src={mockImg} alt='searched user'
                className='flex rounded-full border outline-2 h-[60px] w-[60px]' />

            <div className='flex flex-col ml-2 w-[65%]'>
                <h1 className='text-sm font-extrabold tracking-wide'>Joey</h1>
                <span className='text-xs m-0'>Hello its me</span>
            </div>
            <div className='flex flex-col justify-between items-center h-full py-2'>
                <span className='text-xs'>15:20</span>
                <span className='flex justify-center items-center text-xs h-[20px] w-[20px] rounded-full bg-black text-white'>1</span>
            </div>
        </main>
    );
}

interface UserPhotoProps {
    userImg: string
}
