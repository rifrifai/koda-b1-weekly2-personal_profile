export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
	return (
		<div className={`mb-10 ${center ? "text-center" : ""}`}>
			<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
			<h2 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
			{subtitle && <p className={`mt-3 max-w-xl text-gray-500 ${center ? "mx-auto" : ""}`}>{subtitle}</p>}
			<div className={`mt-4 h-1 w-10 rounded bg-ink ${center ? "mx-auto" : ""}`} />
		</div>
	);
}