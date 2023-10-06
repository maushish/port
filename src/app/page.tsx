import Image from 'next/image'

export default function Home() {
  return (
    <header >
      <nav className='bg-black text-white flex flex-col items-center justify-center h-[25vh]   '>
        <h1 className='absolute left-10 top-9 text-4xl'>Maushish.co</h1>
        <a className='absolute right-[35vh] px-12 py-2 bg-blog rounded-xl text-4xl top-8'>Blogs</a>
        <a className='absolute right-[5vh] px-12 py-2 border-x-2 border-white border-y-2 rounded-xl top-8 text-4xl'>Hire me</a>
        <hr className="w-full  mx-auto my-4 bg-gray-100  md:my-10 "/>
      </nav>
      <a className='bg-gradient w-[170vh] h-[70vh] absolute left-[13vh] top-[13vh] bg-no-repeat z-10  '/>
      
    </header>
  )
}
