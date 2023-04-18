import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]
  // createRoutesFromElements(
  //   <Route path="/" element={<Navbar />}>
  //     <Route index element={<Home />} />
  //     <Route path="about" element={<About />} />
  //     <Route path="projects" element={<Projects />} />
  //     <Route path="contact" element={<Contact />} />
  //     <Route path="*" element={<ErrorPage />} />
  //   </Route>
  // )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
