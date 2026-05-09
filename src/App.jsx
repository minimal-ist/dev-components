import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const OperationPage = lazy(() => import('./pages/OperationPage'))
const OverseasPage = lazy(() => import('./pages/OverseasPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Suspense fallback={
          <div className="min-h-screen bg-primary flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,             element: <HomePage /> },
      { path: 'products',        element: <ProductsPage /> },
      { path: 'products/:slug',  element: <ProductDetailPage /> },
      { path: 'about',           element: <AboutPage /> },
      { path: 'operation',       element: <OperationPage /> },
      { path: 'overseas',        element: <OverseasPage /> },
      { path: 'contact',         element: <ContactPage /> },
      { path: '*',               element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
