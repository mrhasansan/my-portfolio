import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <div className="bg-stone-100 flex justify-center flex-col items-center mt-16 pb-20 px-4">
        <div className="flex justify-center items-center flex-col py-4">
          <h1 className="text-3xl font-bold">ABOUT ME</h1>
          <div className="flex flex-col h-1.5 w-6 bg-black rounded-xl m-3"></div>
          <p className="text-xl text-center"> Here you will find more information about me, what I do, and my current skills </p>
        </div>
        <div className="bg-stone-100 flex lg:flex-row sm:flex-col">
          <div className="w-1/2 ">
            <h2 className="font-bold text-2xl p-4">Get to Know me!</h2>
            <p className=" text-lg px-4 py-2 text-justify">Nine months ago, I started learning programming as a career support. I am a chemistry graduate who previously worked as a quality control and chemistry tutor.</p>
            <p className=" text-lg px-4 py-2 text-justify">
              Lately, I've been dedicating my time to learning full-stack web development, especially front end-web development. Check out my works in the <span className="font-bold">Projects </span> section.
            </p>
            <p className=" text-lg px-4 py-2 text-justify">
              I am open to <span className="font-bold">job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to{" "}
              <span className="font-bold">contact</span> me.
            </p>
            <button className="mt-8 w-48 block rounded-md border  bg-teal-700 p-3 text-white hover:bg-teal-500  ">
              <Link to="/contact"> CONTACT</Link>
            </button>
          </div>
          <div className="bg-stone-100 w-1/2 p-4 ">
            <h2 className="font-bold text-2xl ">My Skills</h2>
            <div className="grid lg:grid-cols-4  py-4 md:grid-cols-3 sm:grid-cols-2">
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">JavaScript</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">HTML</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">CSS</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">React</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">Express JS</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">MySQL</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">Github</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">Chemistry</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">Teaching</div>
              <div className="box-content bg-stone-200 w-fit h-fit p-2 rounded-sm m-2 text-lg ">Laboratory</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
