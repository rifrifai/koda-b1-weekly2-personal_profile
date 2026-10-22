import { useLocation } from "react-router";
import { useEffect } from "react";

/**
 * menggulung halaman ke posisi paling atas setiap kali pengunjung pindah halaman.
 * tidak menampilkan apa pun (mengembalikan `null`).
 * dan harus dipakai di dalam `<BrowserRouter>` karena memakai `useLocation()`.
 *
 * @component
 * @returns {null}
 * @example
 * <ScrollToTop />
 */
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}