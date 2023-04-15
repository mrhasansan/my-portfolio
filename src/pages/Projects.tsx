export function Projects() {
  return (
    <>
      <div className="bg-stone-100 flex justify-center flex-col items-center py-4 mt-16 px-8">
        <div className="flex justify-center items-center flex-col py-4">
          <h1 className="text-3xl font-bold">PROJECT</h1>
          <div className="flex flex-col h-1.5 w-6 bg-black rounded-xl m-3"></div>
          <p className="text-xl text-center">Here you will find some of the personal projects that I created with each project containing its own case study</p>
        </div>
        <div className="bg-stone-100 flex lg:flex-row sm:flex-col">
          <div className="w-1/2">
            <img src="https://stylevanity.com/wp-content/uploads/2023/01/blog5.jpg" alt="" />
          </div>
          <div className="bg-stone-100 w-1/2 p-4 flex justify-center items-center flex-col">
            <h2 className="font-bold text-2xl p-4">Sosial Media Clone</h2>
            <p className="text-lg px-4 ">Build a social media facebook clone application use React js, Node js, Express js and MySQL.</p>
            <button className="my-4 w-48 block rounded-md border  bg-teal-700 p-3 text-white hover:bg-teal-500 ">CASE STUDY</button>
          </div>
        </div>
        <div className="bg-stone-100 flex lg:flex-row sm:flex-col py-14">
          <div className="w-1/2">
            <img src="https://assets-blog.lottiefiles.dev/2021/04/ezgif.com-gif-maker--6--1.gif" alt="" />
          </div>
          <div className="bg-stone-100 w-1/2 p-4 flex justify-center items-center flex-col">
            <h2 className="font-bold text-2xl p-4">Library API App </h2>
            <p className="text-lg px-4 ">Build a fully Create-Read-Update-Delete (CRUD) Library application use React js, Node js, Express js and My-SQL</p>
            <button className="my-4 w-48 block rounded-md border  bg-teal-700 p-3 text-white hover:bg-teal-500  ">CASE STUDY</button>
          </div>
        </div>
      </div>
    </>
  );
}
