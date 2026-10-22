import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/ui/Button";
import Card from "../components/cards/Card";
import FormField from "../components/form/FormField";
import OptionGroup from "../components/form/OptionGroup";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import { contactSchema, contactDefaultValues } from "../data/contactSchema";
import { saveMessage } from "../data/storage";
import { contactInfo, onlineLinks, countries, contactMethods, techOptions } from "../data/site";

/**
 * halaman Contact: form kirim pesan di kiri, info kontak dan tautan sosial di kanan.
 *
 * Alur form:
 * 1. form dikelola React Hook Form (`useForm`) dengan validasi Yup (`contactSchema`).
 * 2. saat tombol Send ditekan, `handleSubmit` menjalankan validasi. Jika ada input
 *    yang tidak valid, pesan error muncul dan `onSubmit` tidak dijalankan.
 * 3. jika valid, `onSubmit` menyimpan pesan ke localStorage lalu mengosongkan form dengan `reset()`.
 *
 * @component
 * @returns {JSX.Element}
 */

export default function Contact() {
	/** status penyimpanan terakhir: `null` (belum kirim), `"success"`, atau `"error"`. */
	const [status, setStatus] = useState(null);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty },
	} = useForm({
		resolver: yupResolver(contactSchema),
		defaultValues: contactDefaultValues,
	});

	/**
	 * dipanggil oleh `handleSubmit` hanya jika semua input lolos validasi Yup.
	 * menyimpan pesan ke localStorage, lalu mengosongkan form.
	 *
	 * @param {import("../data/storage").ContactMessage} data - nilai form yang sudah tervalidasi.
	 * @returns {void}
	 */
	function onSubmit(data) {
		const saved = saveMessage(data);
		if (!saved) {
			setStatus("error");
			return;
		}
		setStatus("success");
		reset();
	}

	/**
	 * mengembalikan form ke nilai awal (`contactDefaultValues`) dan menghapus pesan status.
	 *
	 * @returns {void}
	 */
	function handleReset() {
		reset();
		setStatus(null);
	}

	return (
		<>
			<PageHeader
				eyebrow="Get in touch"
				title="Contact Me"
				subtitle="Have a project in mind or just want to say hello? Fill out the form and I'll get back to you within 24 hours."
			/>

			<Section padding="py-14">
				<div className="grid gap-8 lg:grid-cols-3">
					<form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 lg:col-span-2">
						<h2 className="text-xl font-bold text-navy">Send a Message</h2>

						{status === "success" && !isDirty && (
							<p role="status" className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
								Thanks! Your message has been sent and saved. I'll get back to you soon.
							</p>
						)}
						{status === "error" && (
							<p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
								Sorry, your message could not be saved. Please try again.
							</p>
						)}

						<div className="grid gap-5 sm:grid-cols-2">
							<FormField label="Full Name" required placeholder="Jordan Smith"
								error={errors.name?.message} {...register("name")} />
							<FormField label="Email Address" required type="email" placeholder="you@example.com"
								error={errors.email?.message} {...register("email")} />
							<FormField label="Phone Number" type="tel" placeholder="+1 (415) 555-0100"
								error={errors.phone?.message} {...register("phone")} />
							<FormField label="Subject" required placeholder="Project inquiry"
								error={errors.subject?.message} {...register("subject")} />
						</div>

						<FormField label="Country" as="select" options={countries}
							error={errors.country?.message} {...register("country")} />
						<FormField label="Message" required as="textarea"
							placeholder="Tell me about your project or what you need help with..."
							error={errors.message?.message} {...register("message")} />

						<OptionGroup legend="Preferred Contact Method" type="radio" name="method"
							options={contactMethods} register={register} error={errors.method?.message} />

						<OptionGroup legend="Technologies Interested In" type="checkbox" name="tech"
							options={techOptions} register={register} error={errors.tech?.message} />

						<div className="flex flex-wrap gap-3 pt-2">
							<Button type="submit" className="px-8 py-3">Send Message</Button>
							<Button variant="outline" className="px-8 py-3" onClick={handleReset}>Reset Form</Button>
						</div>
					</form>

					<aside className="space-y-6">
						<Card className="bg-soft p-6">
							<h3 className="mb-4 font-semibold text-navy">Office Information</h3>
							<ul className="space-y-4 text-sm">
								<InfoRow icon="📍" label="Location" value={contactInfo.location} />
								<InfoRow icon="✉️" label="Email" value={contactInfo.email} highlight />
								<InfoRow icon="📞" label="Phone" value={contactInfo.phone} />
								<InfoRow icon="🕐" label="Hours" value={contactInfo.hours} />
							</ul>
						</Card>

						<Card className="bg-soft p-6">
							<h3 className="mb-3 font-semibold text-navy">Find Me Online</h3>
							<ul className="divide-y divide-gray-100 text-sm">
								{onlineLinks.map((l) => (
									<li key={l.name}>
										<a href="#" className="flex items-center justify-between py-3 hover:text-brand">
											<span className="font-medium text-ink">{l.name}</span>
											<span className="text-xs text-gray-400">{l.handle} →</span>
										</a>
									</li>
								))}
							</ul>
						</Card>

						<div className="rounded-xl bg-orange-50 p-8 text-center">
							<div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">📍</div>
							<p className="font-semibold text-brand">San Francisco, CA</p>
							<p className="text-xs text-orange-400">United States</p>
							<p className="mt-3 text-xs text-orange-300">37.7749° N, 122.4194° W</p>
						</div>
					</aside>
				</div>
			</Section>
		</>
	);
}

/**
 * satu baris informasi (ikon + label + nilai) di kartu "Office Information".
 *
 * @param {Object} props
 * @param {string} props.icon - emoji ikon di sebelah kiri.
 * @param {string} props.label - judul baris, mis. "Email".
 * @param {string} props.value - isi informasi.
 * @param {boolean} [props.highlight=false] - jika `true`, nilai ditampilkan berwarna brand.
 * @returns {JSX.Element}
 */
function InfoRow({ icon, label, value, highlight = false }) {
	return (
		<li className="flex gap-3">
			<span aria-hidden="true">{icon}</span>
			<div>
				<p className="font-medium text-ink">{label}</p>
				<p className={highlight ? "text-brand" : "text-gray-500"}>{value}</p>
			</div>
		</li>
	);
}