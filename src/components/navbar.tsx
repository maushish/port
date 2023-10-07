export default function navbar(){
    return(
        <header >
        <nav className='bg-black text-white flex flex-col items-center justify-center h-[25vh]   '>
          <h1 className='absolute left-10 top-9 text-5xl font-user-bold'>Maushish.co</h1>
          <a className='absolute right-[35vh] px-12 py-2 bg-blog rounded-xl text-4xl top-8 font-user-bold'>Blogs</a>
          <a className='absolute right-[5vh] px-12 py-2 border-x-2 border-white border-y-2 rounded-xl top-8 text-4xl font-user-bold'>Hire me</a>
          <hr className="w-full mx-auto my-4 bg-gray-100  md:my-10 "/>
        </nav>
        <div className=' bg-grads absolute top-[12.5vh] left-[20vh] w-[150vh] h-[44vh]'>
          <div className='bg-graph absolute top-[0.5vh] left-[20vh] w-[120vh] h-[44vh] mix-blend-overlay'>
          </div>
        </div>
        <div className=" font-lomo">
        <h1 className='text-white text-lamba absolute left-[73vh] top-[15vh]'>THIS IS</h1>
        <h1 className='text-white  text-lund absolute left-[48vh] top-[35vh] '><span className=' text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 via-emerald-500 to-cyan-500 bg-300% animation-gradient'>MAUSHISH</span></h1>
        <p className=' text-gray-400 text-5xl absolute top-[65vh] left-[55vh] font-user-bold'>A 19 Yr Old boi who just wanna code!</p>
        <a>
          <button type='button' className='px-20  bg-black py-4 border-[6px] text-4xl  rounded-full absolute right-[60vh] top-[80vh] text-white font-bold'>RESUME</button>
        </a>
        <a>
          <button type='button' className='px-14 py-4  bg-gradient-to-bl from-emerald-500 via-emerald-500 to-cyan-500 border-[6px] text-4xl rounded-full absolute left-[70vh] top-[80vh] text-white font-bold'>LET'S WORK</button>
        </a>
        </div>
        
      </header>
    )
}