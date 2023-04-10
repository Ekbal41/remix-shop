export default function(){
    return(
        <>
        <div className="flex justify-between items-center mx-24 h-screen">
            <div className="w-4/6">
                <h3 className="text-yellow-400 text-bold mx-2 text-xl">Happy New Year 🎉</h3>
                <h1 className="font-bold text-6xl text-sky-500 mb-4">Best in dhaka Loblam Pubain chankra</h1>
                <p className="text-gray-900 text-3xl">
                By default, Tailwind provides three font family utilities: a cross-browser sans-serif stack, a cross-browser serif stack, and a cross-browser monospaced stack.                </p>
                <div className="mt-8">
                <button className="hover:bg-sky-600   bg-sky-500 px-3 py-2 text-white rounded shadow-lg uppercase">Start Shopping</button>
                <button className="  bg-white px-3 py-2 text-sky-500 hover:bg-gray-200 rounded shadow-lg uppercase mx-4" >All Category</button>
                </div>
            </div>
            <div className="w-1/2">
                <img src="/heropic.png" className=""   />
               

            </div>
        </div>
        </>
    )
}