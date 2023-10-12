
export default function project(){
    return(
        <section className="absolute top-[170vh] overflow-x-hidden">
        <div className="">
          <div className="font-user-bold relative flex flex-col items-center justify-center right-20">
            <h1 className="text-white text-lamba relative top-[12vh] font-user-bold">PROJECTS</h1>
            <p className="w-[90vh] text-gray-400 text-4xl relative top-[8vh]">I have had the opportunity to showcase my skills through a variety of projects, each of which reflects my passion and dedication to my craft. These projects not only serve as a testament to my abilities but also highlight my commitment to continuous learning and innovation.</p>
          </div>
          <div className=" relative bottom-[43vh] right-[-125vh]">
            <img className="w-[547px] h-[547px] rounded-lg" src='/p1.png' alt="Project Image" />
          </div>
          <div className="grid grid-cols-2 gap-x-[20vh] gap-y-[50vh] items-center justify-end relative right-[27vh]">
            <img src="/p1.png" alt="Project Image" />
            <img src="/p1.png" alt="Project Image" />
            <img src="/p1.png" alt="Project Image" />
            <img src="/p1.png" alt="Project Image" />
          </div>
        </div>
      </section>
    )

}