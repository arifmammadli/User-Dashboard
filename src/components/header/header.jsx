function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white border-b">
            <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center">
                        <img
                            src="/src/assets//download.png"
                            alt="Logo"
                            className="w-6 h-6 object-contain"
                        />
                    </div>

                    <div className="leading-tight">
                        <p className="font-semibold text-gray-800">Student Manager</p>
                        <p className="text-xs text-gray-500">Admin Panel</p>
                    </div>
                </div>


                <div className="hidden md:block w-[360px]">
                    <input id="search"
                        type="text"
                        placeholder="Search student..."
                        className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:border-indigo-500"
                    />
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="hidden sm:block">
                        Total: <b>30</b> students
                    </span>

                    <button className="px-3 py-1.5 rounded-md border hover:bg-gray-100 cursor-pointer">
                        + Add Student
                    </button>

                    <button
                        className="px-3 py-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 text-sm cursor-pointer"
                    >
                        Logout
                    </button>
                </div>

            </div>
        </header>
    );
}


export default Header;
