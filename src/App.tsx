import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Projects } from "./page/Projects";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { Footer } from "./components/Footer";
import { ErrorPage } from "./page/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
