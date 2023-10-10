export default function header(){
return(<div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
        <div className=' bg-grads absolute top-[12.5vh] left-[11.5vh] w-[150vh] h-[44vh] '>
          <div className='bg-graph absolute top-[0.5vh] left-[20vh] w-[120vh] h-[44vh] mix-blend-overlay'></div>
        </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
        <h1 className='text-white text-lamba absolute left-[73vh] top-[15vh] font-bold'>THIS IS</h1>
        <p className='text-white  text-lund absolute left-[42vh] top-[35vh] animate-gradietn'><span className=' text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 via-emerald-500 to-cyan-500 bg-300% animation-gradient font-bold'>MAUSHISH</span></p>
        <p className=' text-gray-400 text-5xl absolute top-[65vh] left-[50vh] font-user-bold'>A 19 Yr Old boi who just wanna code!</p>
        <a>
          <button type='button' className='px-20  bg-black py-4 border-[6px] text-4xl  rounded-full absolute right-[63vh] top-[80vh] text-white font-user-bold'>RESUME</button>
        </a>
        <a>
          <button type='button' className='px-14 py-4  bg-gradient-to-bl from-emerald-500 via-emerald-500 to-cyan-500 border-[6px] text-4xl rounded-full absolute left-[65vh] top-[80vh] text-white font-user-bold'>LET'S WORK</button>
        </a>
        </div>
        </div>
    )
}