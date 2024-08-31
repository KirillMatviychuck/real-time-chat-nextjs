
import bg_main from "@/assets/bg-main.jpg";
import { MainChatWindow } from "@/components/MainChatWindow/MainChatWindow";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center relative min-h-screen min-w-screen">
      <div className='absolute h-full w-full -z-10'>
        <Image src={bg_main} alt='pic' fill quality={100} />
      </div>
      <MainChatWindow />
      {/* <UserPhoto userImg="" />
      <UserPanelS /> */}
    </main>
  );
}
