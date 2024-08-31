export const InfoPlate = () => {
    return (
        <div className="flex flex-col justify-center items-center w-[24%] h-44 bg-stone-200 rounded-2xl shadow-[6px_6px_6px_rgba(120,120,120,0.4)]">
            <h1 className="flex justify-between items-center mb-4 text-2xl text-slate-700 italic">Messages {<span className="ml-2 flex justify-center items-center text-sm h-[25px] w-[25px] bg-slate-300 rounded-full text-white pr-1">1</span>}</h1>
            <div>
                Tuesday
            </div>
            <div className="text-slate-700 mt-4 text-5xl">
                12:00
            </div>
        </div>
    )
}