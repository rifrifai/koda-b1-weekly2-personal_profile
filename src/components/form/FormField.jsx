const base = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const normal = "border-gray-200 focus:border-brand focus:ring-brand/30";
const invalid = "border-red-500 focus:border-red-500 focus:ring-red-300";

/**
 * satu komponen untuk input, textarea, dan select, lengkap dengan label dan pesan error.
 * diibuat dengan `forwardRef` supaya cocok dengan `register()` dari React Hook Form.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - teks label di atas input.
 * @param {string} props.name - nama field (juga dipakai sebagai `id`).
 * @param {boolean} [props.required=false] - menampilkan tanda bintang merah pada label.
 * @param {"input"|"textarea"|"select"} [props.as="input"] - jenis elemen yang dirender.
 * @param {string[]} [props.options=[]] - daftar pilihan (hanya untuk `as="select"`).
 * @param {string} [props.error] - pesan error. Jika ada, border berubah merah dan pesan tampil di bawah input.
 * @param {string} [props.className] - class tambahan untuk pembungkus.
 *   (cth. `type`, `placeholder`, atau hasil `register("name")`).
 * @param {React.Ref} ref - ref ke elemen input (diisi otomatis oleh `register`).
 * @param {...*} props.rest - props lain diteruskan ke elemen input
 * @returns {JSX.Element}
 * @example
 * <FormField label="Email" required type="email" error={errors.email?.message} {...register("email")} />
 * <FormField label="Message" as="textarea" {...register("message")} />
 * <FormField label="Country" as="select" options={countries} {...register("country")} />
 */

export default function FormField({
	label, name, required = false, as = "input", options = [], error, className = "", ref, ...props
}) {
	const common = {
		id: name,
		name,
		ref,
		"aria-invalid": error ? true : undefined,
		"aria-describedby": error ? `${name}-error` : undefined,
		className: `${base} ${error ? invalid : normal}`,
		...props,
	};

	let control;
	if (as === "textarea") {
		control = <textarea rows={5} {...common} />;
	} else if (as === "select") {
		control = (
			<select {...common}>
				<option value="">Select country</option>
				{options.map((o) => (
					<option key={o} value={o}>{o}</option>
				))}
			</select>
		);
	} else {
		control = <input {...common} />;
	}

	return (
		<div className={className}>
			<label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
				{label}
				{required && <span className="text-red-500"> *</span>}
			</label>
			{control}
			{error && (
				<p id={`${name}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
					{error}
				</p>
			)}
		</div>
	);
}