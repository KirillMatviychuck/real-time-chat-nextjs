export const UserMenuLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className='flex flex-col items-center grow h-full border border-pink-600'>
            {children}
        </section>
    )
}