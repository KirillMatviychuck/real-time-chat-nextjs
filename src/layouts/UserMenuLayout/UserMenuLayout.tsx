import { FC } from "react"

export const UserMenuLayout: FC<UserMenuLayoutProps> = ({
    children,
    userImg
}) => {
    return (
        <section className={`flex flex-col items-center w-[38%] h-full ${userImg ? 'mr-5' : 'ml-5'}`}>
            {children}
        </section>
    )
}

interface UserMenuLayoutProps {
    userImg: boolean
    children: React.ReactNode
}