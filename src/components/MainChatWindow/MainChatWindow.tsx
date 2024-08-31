import { UserMenuLayout } from "@/layouts/UserMenuLayout/UserMenuLayout"
import { InfoPlate } from "@/components/InfoPlate/InfoPlate"
import { UserPhoto } from "@/components/UserPhoto/UserPhoto"
import { SearchField } from "@/components/Search/SearchField/SearchField"
import { SearchButton } from "@/components/Search/SearchButton/SearchButton"
import { SearchedUsersPanel } from "@/components/SearchedUsersPanel/SearchedUsersPanel"


export const MainChatWindow = () => {
    return (
        <div className="flex justify-center items-center h-[43rem] w-[56rem] bg-stone-300 mb-4 z-10 rounded-3xl">
            <div className="flex h-[40.5rem] w-[56rem] justify-between mt-10 ">
                <div className="flex flex-col items-center w-[38%] h-full outline-2 border-r-stone-400 border border-t-0 border-b-0 rounded-3xl mr-3">
                    <UserPhoto userImg="" />
                    <div className="flex my-3">
                        <SearchField />
                        <SearchButton />
                    </div>
                    <div>
                        <SearchedUsersPanel />
                        <SearchedUsersPanel />
                        <SearchedUsersPanel />
                        <SearchedUsersPanel />
                        <SearchedUsersPanel />
                        <SearchedUsersPanel />
                    </div>
                </div>
                <InfoPlate />
                <UserMenuLayout userImg={false}>
                    <UserPhoto userImg="" />
                </UserMenuLayout>
            </div>
        </div>
    )
}