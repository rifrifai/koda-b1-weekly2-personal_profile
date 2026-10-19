const backgrounds = {
	white: "bg-white",
	soft: "bg-soft",
	dark: "bg-ink text-white"
}

export default function Section ({bg = "white", padding = "py-16", children}) {
	return (
		<section className={backgrounds[bg]}>
			<div className={`mx-auto max-w-6xl px-5 ${padding}`}>{children}</div>
		</section>
	);
}