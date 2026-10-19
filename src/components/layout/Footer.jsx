import { Link } from "react-router";
import { contactInfo, navLinks, socials } from "../../data/site";

export default function Footer() {
	
	return (
	<footer className="bg-navy text-gray-400">
		<div className="mx-auto max-w-6xl px-5 py-14">
			<div className="grid gap-10 md:grid-cols-3">
				<div>
					<h3 className="mb-3 text-xl font-bold text-white">Alex Carter</h3>
					<p className="mb-5 max-w-xs text-sm leading-relaxed">
						Full-stack software developer based in San Francisco, CA. Building thoughtful web experiences one commit at a time.
					</p>
					<div className="flex flex-wrap gap-2">
						{socials.map((s) => (
							<a key={s} href="#" className="rounded bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20 hover:text-white">
								{s}
							</a>
						))}
					</div>
				</div>

				<div>
					<h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Quick Links</h4>
					<ul className="space-y-3 text-sm">
						{navLinks.map((l) => (
							<li key={l.to}>
								<Link to={l.to} className="hover:text-white">{l.label}</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Contact</h4>
					<ul className="space-y-3 text-sm">
						<li>{contactInfo.email}</li>
						<li>{contactInfo.phone}</li>
						<li>{contactInfo.location}</li>
					</ul>
				</div>
			</div>

			<div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center">
				<p>&copy; 2026 Alex Carter. All rights reserved.</p>
				<button
					type="button"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="hover:text-white"
				>
					Back to Top ↑
				</button>
			</div>
		</div>
	</footer>
);
}