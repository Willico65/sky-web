import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Store = lazy(() => import('./pages/Store'))
const Product = lazy(() => import('./pages/Product'))
const MoreProducts = lazy(() => import('./pages/MoreProducts'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Thanks = lazy(() => import('./pages/Thanks'))
const Faq = lazy(() => import('./pages/Faq'))
const Support = lazy(() => import('./pages/Support'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

const LEGAL = ['privacidad', 'terminos', 'cookies', 'garantias-y-devoluciones', 'retracto', 'pqrs']

// Mapa del sitio aprobado (TE-05). /proyectos queda para después del lanzamiento.
export default function App() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="servicios/:slug" element={<ServiceDetail />} />
          <Route path="tienda" element={<Store />} />
          <Route path="tienda/mas-productos" element={<MoreProducts />} />
          <Route path="tienda/producto/:slug" element={<Product />} />
          <Route path="tienda/:categoria" element={<Store />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="contacto/gracias" element={<Thanks />} />
          <Route path="preguntas-frecuentes" element={<Faq />} />
          <Route path="soporte" element={<Support />} />
          {LEGAL.map((p) => <Route key={p} path={p} element={<Legal />} />)}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
