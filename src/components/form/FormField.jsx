const base = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";


// for komponen input, textarea, dan select, lewatt as
export default function FormField({ label, name, required = false, as = "input", options = [], className = "", ...props }) {
	let control;
	if (as === "textarea") {
		control = <textarea id={name} name={name} rows={5} required={required} className={base} {...props} />;
	} else if (as === "select") {
		control = (
			<select id={name} name={name} required={required} className={base} {...props}>
				<option value="">Select country</option>
				{options.map((o) => (
					<option key={o} value={o}>{o}</option>
				))}
			</select>
		);
	} else {
		control = <input id={name} name={name} required={required} className={base} {...props} />;
	}

	return (
		<div className={className}>
			<label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
				{label}
				{required && <span className="text-red-500"> *</span>}
			</label>
			{control}
		</div>
	);
}