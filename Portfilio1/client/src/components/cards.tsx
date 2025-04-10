export default function Card({ Job, stat1, stat2, stat3, stat4, stat5 }){
    return(
        <>
            <main className="outline-1 outline-gray-400 w-full bg-[#1F2937]">
                <div>
                    <div className="title">
                        <h1 className="text-[#C084FC]">{Job}</h1>
                    </div>
                </div>
            </main>
        </>
    )
}