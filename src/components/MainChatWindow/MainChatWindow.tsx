import { InfoPlate } from "../InfoPlate/InfoPlate"
import { UserPhoto } from "../UserPhoto/UserPhoto"

export const MainChatWindow = () => {
    return (
        <div className="flex justify-center items-center h-[43rem] w-[56rem] bg-stone-300 mb-4 z-10 rounded-3xl">
            <div className="flex h-[40.5rem] w-[54rem] justify-between mt-10 ">
                <div className="flex flex-col items-center grow h-full">
                    <UserPhoto userImg="" />
                </div>
                <InfoPlate />
                <div className="flex flex-col items-center grow h-full">
                    <UserPhoto userImg="" />
                </div>
            </div>
        </div>
    )
}