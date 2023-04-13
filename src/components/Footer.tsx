import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="bg-black shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between text-white px-4">
            <h3 className="font-bold text-md">Ma'ruf Hasan</h3>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Social Media
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-200 sm:text-center  dark:text-gray-400">
            © 2023. Made by <span className="font-bold underline">Ma'ruf Hasan</span>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
