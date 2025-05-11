import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoadingSpinner from "./components/LoadingSpinner";
import Layout from "./components/Layout";
import "./App.css";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Team = lazy(() => import("./pages/Team"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Testimonials = lazy(() => import("./pages/Testimonials"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
