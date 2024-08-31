import { UserMenuLayout } from "@/layouts/UserMenuLayout/UserMenuLayout"
import { InfoPlate } from "../InfoPlate/InfoPlate"
import { UserPhoto } from "../UserPhoto/UserPhoto"
import { SearchingUserPanel } from "../SearchedUsersPanel/SearchedUsersPanel"
import { SearchField } from "../Search/SearchField/SearchField"

export const MainChatWindow = () => {
    return (
        <div className="flex justify-center items-center h-[43rem] w-[56rem] bg-stone-300 mb-4 z-10 rounded-3xl">
            <div className="flex h-[40.5rem] w-[54rem] justify-between mt-10 ">
                <UserMenuLayout>
                    <UserPhoto userImg="" />
                    <SearchField />
                </UserMenuLayout>
                <InfoPlate />
                <UserMenuLayout>
                    <UserPhoto userImg="" />
                </UserMenuLayout>
            </div>
        </div>
    )
}