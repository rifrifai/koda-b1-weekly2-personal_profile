// radio atau checkbox trgntung type
export default function OptionGroup({ legend, type = "radio", name, options, value, onChange }) {
	const layout =
		type === "checkbox"
			? "grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4"
			: "flex flex-wrap gap-x-6 gap-y-2";

	return (
		<fieldset>
			<legend className="mb-2 text-sm font-medium text-ink">{legend}</legend>
			<div className={layout}>
				{options.map((option) => {
					const checked = type === "radio" ? value === option : value.includes(option);
					return (
						<label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
							<input
								type={type}
								name={name}
								value={option}
								checked={checked}
								onChange={() => onChange(option)}
								className="h-4 w-4 accent-brand"
							/>
							{option}
						</label>
					);
				})}
			</div>
		</fieldset>
	);
}