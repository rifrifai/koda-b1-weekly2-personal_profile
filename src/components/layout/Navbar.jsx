import { useState } from "react";
import { Link, NavLink } from "react-router";
import { navLinks } from "../../data/site";
import Button from "../ui/Button";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const linkClass = ({ isActive }) =>
		`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
			isActive ? "bg-gray-100 text-ink" : "text-gray-500 hover:text-ink"
		}`;

	return (
		<header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
				<Link to="/" className="text-lg font-bold text-navy">Alex Carter</Link>

				<nav className="hidden items-center gap-1 md:flex">
					{navLinks.map((l) => (
						<NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
							{l.label}
						</NavLink>
					))}
					<Button to="/contact" className="ml-3">Hire Me</Button>
				</nav>

				<button
					type="button"
					onClick={() => setOpen(!open)}
					aria-label="Toggle navigation"
					aria-expanded={open}
					className="rounded-md border border-gray-200 px-3 py-1.5 text-lg md:hidden"
				>
					{open ? "✕" : "☰"}
				</button>
			</div>

			{open && (
				<nav className="flex flex-col gap-1 border-t border-gray-100 px-5 py-3 md:hidden">
					{navLinks.map((l) => (
						<NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass} onClick={() => setOpen(false)}>
							{l.label}
						</NavLink>
					))}
					<Button to="/contact" className="mt-2" onClick={() => setOpen(false)}>Hire Me</Button>
				</nav>
			)}
		</header>
	);
}