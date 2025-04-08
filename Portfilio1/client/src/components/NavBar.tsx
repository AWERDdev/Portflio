export default function NavBar(){
    return(
        <>
            <main className="outline-1 outline-[#1F2937] w-full bg-[#111827] f">
                <div className="flex justify-between">
                    <div className="title ">
                        <h1 className="text-[1.3rem]  font-bold ml-5 text-[#F3F4F6] p-5">Alex Morgan</h1>
                    </div>
                    <div className="links flex p-5  mr-5 text-[#F3F4F6] gap-5 transition-all ">
                        <a href="#"className="hover:text-[#C084FC]">About</a>
                        <a href="#"className="hover:text-[#C084FC]">Skills</a>
                        <a href="#"className="hover:text-[#C084FC]">Projects</a>
                        <a href="#"className="hover:text-[#C084FC]">Contact</a>
                    </div>
                </div>
            </main>
        </>
    )
}