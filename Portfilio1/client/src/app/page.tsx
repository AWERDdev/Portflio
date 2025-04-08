import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <main className="w-screen min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] transition duration-300 ">
        <div className="NavBar">
          <NavBar />
        </div>

        <div className="DescribtionTitle  flex justify-evenly items-center  mt-32 px-4 flex-wrap">
          {/* Circle with ? */}
          <div className="Image relative w-[180px] h-[180px] flex items-center justify-center rounded-full bg-gray-600">
            <span className="text-gray-400 text-[8rem] font-light">?</span>
          </div>

          {/* Text and buttons */}
          <div className="context text-white ">
            <h1 className="text-3xl font-bold mb-2">Software Engineer</h1>
            <h2 className="text-purple-400 font-semibold mb-3">
              Specializing in Full-Stack Development
            </h2>
            <p className="text-gray-300 mb-6 h-full">
              Building robust, scalable applications with modern technologies and best practices.
            </p>

            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md cursor-pointer transition">
                Get in Touch
              </button>
              <button className="border border-purple-400 text-white px-5 py-2 rounded-md  cursor-pointer hover:bg-gray-700 transition">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
