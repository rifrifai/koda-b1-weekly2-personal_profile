import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import { contactInfo, contactMethods, countries, onlineLinks, techOptions } from "../data/site";
import OptionGroup from "../components/form/OptionGroup";
import Button from "../components/ui/Button";
import Card from "../components/cards/Card";
import FormField from "../components/form/FormField";

const initialForm = {
	name: "", email: "", phone: "", subject: "", country: "", message: "", method: "Email", tech: [],
};

export default function Contact() {
	const [form, setForm] = useState(initialForm);
	const [sent, setSent] = useState(false);

	function handleChange(e) {
		const {name, value} = e.target;
		setForm((prev) => ({...prev, [name]: value}))
		setSent(false);
	}

	function toggleTech(tech) {
		setForm((prev) => ({...prev, tech: prev.tech.includes(tech) ? prev.tech.filter((t) => t !== tech) : [...prev.tech, tech],
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(form);
		setForm(initialForm);
		setSent(true);
	}

	function handleReset() {
		setForm(initialForm);
		setForm(false)
	}

	const field = (name) => ({ name, value: form[name], onChange: handleChange });

	return (
		<>
			<PageHeader
				eyebrow="Get in touch"
				title="Contact Me"
				subtitle="Have a project in mind or just want to say hello? Fill out the form and I'll get back to you within 24 hours."
			/>

			<Section padding="py-14">
				<div className="grid gap-8 lg:grid-cols-3">
					
					<form onSubmit={handleSubmit} className="space-y-5 lg:col-span-2">
						<h2 className="text-xl font-bold text-navy">Send a Message</h2>

						{sent && (
							<p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
								Thanks! Your message has been sent. I'll get back to you soon.
							</p>
						)}

						<div className="grid gap-5 sm:grid-cols-2">
							<FormField label="Full Name" required placeholder="Jordan Smith" {...field("name")} />
							<FormField label="Email Address" required type="email" placeholder="you@example.com" {...field("email")} />
							<FormField label="Phone Number" type="tel" placeholder="+1 (415) 555-0100" {...field("phone")} />
							<FormField label="Subject" required placeholder="Project inquiry" {...field("subject")} />
						</div>

						<FormField label="Country" as="select" options={countries} {...field("country")} />
						<FormField label="Message" required as="textarea" placeholder="Tell me about your project or what you need help with..." {...field("message")} />

						<OptionGroup
							legend="Preferred Contact Method"
							type="radio"
							name="method"
							options={contactMethods}
							value={form.method}
							onChange={(m) => setForm((prev) => ({ ...prev, method: m }))}
						/>

						<OptionGroup
							legend="Technologies Interested In"
							type="checkbox"
							name="tech"
							options={techOptions}
							value={form.tech}
							onChange={toggleTech}
						/>

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