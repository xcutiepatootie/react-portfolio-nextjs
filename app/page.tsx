import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      <section
        className="flex h-screen w-screen snap-start flex-row items-center justify-center scroll-smooth bg-[#ECE3CE]"
        id="home"
      >
        <div className="grid w-full grid-cols-2 place-items-center p-4">
          <div className="flex items-center justify-center">Image Here</div>
          <div className="flex flex-col items-center justify-center">
            <h1>Calabia, Mackrislan A. "Macky"</h1>
            <h2>Web Developer</h2>
            <h4>and</h4>
            <h2>Computer Science Graduate</h2>
          </div>
        </div>
      </section>
      <div
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#739072]"
        id="about"
      >
        About Me
      </div>
      <div
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#4F6F52]"
        id="projects"
      >
        Projects
      </div>
      <div
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#3A4D39]"
        id="contact"
      >
        Contact
      </div>
    </div>
  );
}

/* <div
        className="flex h-screen w-full snap-start items-center justify-center bg-slate-500"
        id="home"
      >
        
      </div>
      <div
        className="flex h-screen w-full snap-start items-center justify-center bg-green-300"
        id="about"
      >
        About Me
      </div>
      <div className="flex h-screen items-center justify-center" id="projects">
       
      </div>
      <div className="flex h-screen items-center justify-center">Contact</div> */
