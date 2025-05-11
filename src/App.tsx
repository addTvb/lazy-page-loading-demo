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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "faq",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <FAQ />
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Team />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "testimonials",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Testimonials />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
