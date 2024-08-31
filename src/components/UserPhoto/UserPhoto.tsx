
import Image from 'next/image';
import { FC } from 'react';
import pic from '@/assets/myPortfolioPhoto.png'

export const UserPhoto: FC<UserPhotoProps> = ({ userImg }) => {
    return (
        <main className='h-[180px] w-[180px] rounded-full relative'>
            <Image src={pic}
                className='rounded-full h-[180px] w-[180px] shadow-inner border border-stone-500'
                fill
                alt="User picture"
            />
        </main>
    );
}

interface UserPhotoProps {
    userImg: string
}
