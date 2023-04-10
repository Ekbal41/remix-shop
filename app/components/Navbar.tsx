export default function Navbar() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between bg-sky-500 text-white items-center shadow-lg p-4">
                <h1 className="text-3xl font-bold ">Taillshop</h1>
                <div className="flex gap-4 flex-col-reverse md:flex-row">
                    <input className="outline-none py-2 px-3 w-96 rounded-lg cursor-pointer text-sky-500 focus:outline-sky-600" placeholder="Search.. " />


                    <ul className="flex justify-center md:justify-center gap-4 ">
                        <li className="text-xl hover:bg-sky-700 py-2 px-3 rounded-lg transition-all cursor-pointer">Home</li>
                        <li className="text-xl hover:bg-sky-700 py-2 px-3 rounded-lg transition-all cursor-pointer">About </li>
                        <li className="text-xl hover:bg-sky-700 py-2 px-3 rounded-lg transition-all cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}