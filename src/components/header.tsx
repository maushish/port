export default function header(){
return(
  <div className="flex flex-col items-center justify-center container z-20">
  <div className="flex flex-col items-center justify-center">
    <div className="bg-grads absolute top-[12.5vh] left-[11.5vh] w-[150vh] h-[44vh] md:w-[100vh] md:h-[34vh] lg:w-[80vh] lg:h-[24vh]">
      <div className="bg-graph absolute top-[0.5vh] left-[20vh] w-[120vh] h-[44vh] mix-blend-overlay md:w-[80vh] md:h-[24vh] lg:w-[60vh] lg:h-[16vh]"></div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-white text-lamba absolute left-[73vh] top-[15vh] font-bold md:text-[3rem] md:left-[60vh] lg:text-[4rem] lg:left-[50vh]">THIS IS</h1>
    <p className="text-white text-lund absolute left-[42vh] top-[35vh] animate-gradient md:text-[2rem] md:left-[35vh] lg:text-[3rem] lg:left-[30vh]">
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 via-emerald-500 to-cyan-500 bg-300% animation-gradient font-bold">MAUSHISH</span>
    </p>
    <p className="text-gray-400 text-5xl absolute top-[65vh] left-[50vh] font-user-bold md:text-[2rem] md:left-[40vh] lg:text-[3rem] lg:left-[35vh]">
      A 19 Yr Old boi who just wanna code!
    </p>
    <a>
      <button
        type="button"
        className="px-20 bg-black py-4 border-[6px] text-4xl rounded-full absolute right-[63vh] top-[80vh] text-white font-user-bold md:px-10 md:py-3 md:text-3xl lg:px-16 lg:py-5 lg:text-4xl"
      >
        RESUME
      </button>
    </a>
    <a>
      <button
        type="button"
        className="px-14 py-4 bg-gradient-to-bl from-emerald-500 via-emerald-500 to-cyan-500 border-[6px] text-4xl rounded-full absolute left-[65vh] top-[80vh] text-white font-user-bold md:px-10 md:py-3 md:text-3xl lg:px-16 lg:py-5 lg:text-4xl"
      >
        LET'S WORK
      </button>
      <p className=" text-white absolute top-[200vh]">m passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

5
	paragraphs
	words
	bytes
	lists
	Start with 'Lorem
ipsum dolor sit amet...'
</p>
    </a>
  </div>
</div>
    )
}