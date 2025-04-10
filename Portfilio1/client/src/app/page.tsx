import NavBar from '@/components/NavBar';
import AboutMe from '@/components/AboutMe';
import Card from '@/components/cards'

export default function Home() {
  const Card1 = {
    Job: "Frontend Development",
    stat1: "React & Next.js",
    stat2: "TypeScript",
    stat3: "Tailwind CSS",
    stat4: "Redux / Context API",
    stat5: "Responsive Design"
  };
  const Card2 = {
    Job: "Backend Development",
    stat1: "Node.js & Express",
    stat2: "MongoDB / PostgreSQL",
    stat3: "RESTful APIs",
    stat4: "Authentication",
    stat5: "Security Best Practices"
  };
  const Card3 = {
    Job: "DevOps & Deployment",
    stat1: "Docker & Kubernetes",
    stat2: "CI/CD Pipelines",
    stat3: "AWS / Vercel",
    stat4: "Performance Monitoring",
    stat5: "Version Control (Git)"
  };

  return (
    <>
      <main className="w-screen min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] transition duration-300 overflow-x-hidden ">
        <div className="NavBar">
          <NavBar />
        </div>

        <div className="DescribtionTitle flex justify-evenly items-center mt-32 px-4 flex-wrap">
          <div className="Image relative w-[180px] h-[180px] flex items-center justify-center rounded-full bg-gray-600">
            <span className="text-gray-400 text-[8rem] font-light">?</span>
          </div>

          <div className="context text-white ">
            <h1 className="text-3xl font-bold mb-2">Software Engineer</h1>
            <h2 className="text-purple-400 font-semibold mb-3">Specializing in Full-Stack Development</h2>
            <p className="text-gray-300 mb-6 h-full">
              Building robust, scalable applications with modern technologies and best practices.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700  text-white px-3 py-2 md:px-5  md:py-2 rounded-md cursor-pointer transition">Get InTouch</button>
              <button className="border border-purple-400 text-white px-5 py-2 rounded-md cursor-pointer hover:bg-gray-700 transition">ViewProjects</button>
            </div>
          </div>
        </div>

        <div className="AboutMe mt-10">
          <AboutMe />
        </div>

        <div className="Skills_Expertise mt-10 bg-[#111827] flex flex-wrap justify-center">
          <Card {...Card1} />
          <Card {...Card2} />
          <Card {...Card3} />
        </div>
      </main>
    </>
  );
}
