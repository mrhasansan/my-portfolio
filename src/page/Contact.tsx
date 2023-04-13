export function Contact() {
  return (
    <>
      <div className="bg-stone-100 flex justify-center flex-col items-center pb-40 pt-16">
        <div className="flex justify-center items-center flex-col py-4">
          <h1 className="text-3xl font-bold">CONTACT</h1>
          <div className="flex flex-col h-1.5 w-6 bg-black rounded-xl m-3"></div>
          <p className="text-xl text-center">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <div className="bg-white w-8/12 mt-8 rounded-lg">
          <form className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-lg p-4">
            <label> Name:</label>
            <input type="text" id="subject" name="subject" required placeholder="Your Subject" className="w-full rounded-sm border border-solidp-3 text-lg text-black bg-stone-100 " />
            <label> Email:</label>
            <input type="email" id="email" name="email" required placeholder="Your email" className="w-full rounded-sm border border-solidp-3 text-lg text-black bg-stone-100 " />
            <label> Message:</label>
            <textarea name="message" id="message" placeholder="Your Message" required className="w-full rounded-sm  border-slate-900 p-3 text-lg text-black bg-stone-100"></textarea>
          </form>
          <button className="m-4 w-48 block rounded-md border  p-3 text-white bg-teal-700 hover:bg-teal-500 ">SUBMIT</button>
        </div>
      </div>
    </>
  );
}
