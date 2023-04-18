import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";
export function Home() {
  return (
    <>
      <section className="bg-stone-100 flex scroll-mt-40  px-4 sm:flex-row justify-beetween lg:gap-x-52 pt-20 pb-40 mt-16">
        <div className="bg-white w-14 py-4 h-full flex justify-center flex-col items-center  rounded-md me-12 ">
          <a href="https://www.linkedin.com/in/marufhasansan/" className="mb-3 ">
            <AiFillLinkedin size={32} />
          </a>
          <a href="https://github.com/mrhasansan" className="mb-3">
            <AiFillGithub size={32} />
          </a>
          <a href="https://www.instagram.com/mrhasansan/" className="mb-3">
            <AiFillInstagram size={32} />
          </a>
          <a href="https://www.youtube.com/@mrhasansan" className="mb-0">
            <AiFillYoutube size={32} />
          </a>
        </div>
        <article className="flex justify-center flex-col items-center ">
          <h2 className=" text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl py-8 ">
            HEY! I'M
            <span className="text-indigo-700 dark:text-indigo-300"> HASAN</span>
          </h2>
          <p className="text-center text-2xl text-slate-700 sm:text-left"> A Frontend Web Development and Chemistry Mentor </p>
          <p className="text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left mb-4">Connecting chemistry and software development </p>
          <button className="my-4 w-48 block rounded-md border  bg-teal-700 p-3 text-white hover:bg-teal-500 ">
            <Link to="/projects"> PROJECT</Link>
          </button>
        </article>
      </section>
    </>
  );
}
