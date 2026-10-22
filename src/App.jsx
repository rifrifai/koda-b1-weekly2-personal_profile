import { Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import NotFound from "./pages/NotFound";

/**
 * komponen utama aplikasi: menyusun navbar, isi halaman (sesuai url), scrollToTop untuk berpindah halaman dengan kembali ke posisi atas, dan footer.
 * harus dibungkus dengan <BrowserRouter> di main.jsx
 * 
 * Daftar route:
 * - `/` Home
 * - `/about` About
 * - `/projects` Projects
 * - `/experience` Experience
 * - `/contact` Contact
 * - `/*` NotFound
 * 
 * @component
 * @returns {JSX.Element}
*/

export default function App() {
	return (

	<div className="flex min-h-screen flex-col font-sans text-ink">
		<ScrollToTop />
		<Navbar />
		<main className="grow">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</main>
		<Footer />
	</div>
	);
}