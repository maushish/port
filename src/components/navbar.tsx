export default function navbar(){
    return(
        <header className=" fixed container flex flex-wrap  " >
        <nav className='bg-black max-w-full text-white flex flex-col items-center justify-center h-[25vh]'>
          <h1 className='relative  left-10 lg:top-9 md:top-4 text-5xl md:text-3xl  font-user-bold'>Maushish.co</h1>
          <a className='relative  right-[35vh] px-12 py-2 bg-blog rounded-xl text-4xl top-8 font-user-bold  '>Blogs</a>
          <a className='relative  right-[5vh] px-12 py-2 border-x-2 border-white border-y-2 rounded-xl top-8 text-4xl font-user-bold'>Hire me</a>
          <hr className=" w-full mx-auto my-4 bg-gray-100  fixed"/>
        </nav>
        
        
      </header>
    )
}