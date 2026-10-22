/**
 * sekelompok radio button atau checkbox dengan judul (legend) dan pesan error.
 * terhubung ke React Hook Form lewat prop `register`.
 *
 * - `type="radio"`: nilai field berupa satu string (pilihan terpilih).
 * - `type="checkbox"`: nilai field berupa array string (semua yang dicentang).
 *
 * @component
 * @param {Object} props
 * @param {string} props.legend - Judul kelompok pilihan.
 * @param {"radio"|"checkbox"} [props.type="radio"] - Jenis input.
 * @param {string} props.name - Nama field di form (harus sama dengan key di schema).
 * @param {string[]} props.options - Daftar pilihan yang ditampilkan.
 * @param {import("react-hook-form").UseFormRegister<any>} props.register - Fungsi `register` dari `useForm()`.
 * @param {string} [props.error] - Pesan error untuk kelompok ini.
 * @returns {JSX.Element}
 * @example
 * <OptionGroup legend="Preferred Contact Method" type="radio" name="method"
 *   options={contactMethods} register={register} error={errors.method?.message} />
 */

export default function OptionGroup({ legend, type = "radio", name, options, register, error }) {
	const layout =
		type === "checkbox"
			? "grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4"
			: "flex flex-wrap gap-x-6 gap-y-2";

	return (
		<fieldset>
			<legend className="mb-2 text-sm font-medium text-ink">{legend}</legend>
			<div className={layout}>
				{options.map((option) => (
					<label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
						<input type={type} value={option} className="h-4 w-4 accent-brand" {...register(name)} />
						{option}
					</label>
				))}
			</div>
			{error && (
				<p role="alert" className="mt-1.5 text-sm text-red-600">{error}</p>
			)}
		</fieldset>
	);
}