import Image from 'next/image'

export default function Home() {
  return (
    <header >
      <nav className='bg-black text-white flex flex-col items-center justify-center h-[25vh]   '>
        <h1 className='absolute left-10 top-9 text-5xl'>Maushish.co</h1>
        <a className='absolute right-[35vh] px-12 py-2 bg-blog rounded-xl text-4xl top-8'>Blogs</a>
        <a className='absolute right-[5vh] px-12 py-2 border-x-2 border-white border-y-2 rounded-xl top-8 text-4xl'>Hire me</a>
        <hr className="w-full mx-auto my-4 bg-gray-100  md:my-10 "/>
      </nav>
      <div className=' bg-grads absolute top-[12.5vh] left-[20vh] w-[150vh] h-[44vh]'>
        <div className='bg-graph absolute top-[0.5vh] left-[20vh] w-[120vh] h-[44vh] mix-blend-overlay'>
        </div>
      </div>
      <h1 className='text-white text-lamba absolute left-[73vh] top-[15vh] font-bold'>THIS IS</h1>
      <h1 className='text-white  text-lund absolute left-[50vh] top-[35vh] font-extrabold'><span className=' text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 via-emerald-500 to-cyan-500'>MAUSHISH</span></h1>
      <p className=' text-gray-400 text-5xl absolute top-[65vh] left-[65vh]'>A 19 Yr Old boi who just wanna code!</p>
      <a>
        <button className='px-12 font-extrabold bg-black py-4 border-4 text-4xl  rounded-full absolute right-[70vh] top-[80vh] text-white'>RESUME</button>
      </a>
      <a>
        <button className='px-12 py-4  font-extrabold bg-gradient-to-bl from-emerald-500 via-emerald-500 to-cyan-500 border-4 text-4xl rounded-full absolute left-[70vh] top-[80vh] text-white'>LET'S WORK</button>
      </a>
      
    </header>
  )
}
