export default function PageHeader({ eyebrow, title, subtitle, center = true, action }) {
	return (
		<div className="bg-soft">
			<div className={`mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:py-16 ${action ? "sm:flex-row sm:items-center sm:justify-between" : ""}`}>
				<div className={center ? "mx-auto max-w-2xl text-center" : ""}>
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
					<h1 className="text-4xl font-extrabold text-navy sm:text-5xl">{title}</h1>
					<p className="mt-4 text-gray-500">{subtitle}</p>
				</div>
				{action}
			</div>
		</div>
	);
}