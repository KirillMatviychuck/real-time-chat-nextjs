export const UserMenuLayout = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    return (
        <section className='flex flex-col items-center grow h-full'>
            {children}
        </section>
    )
}