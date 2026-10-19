import Card from "../components/cards/Card";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import SectionHeading from "../components/layout/SectionHeading";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";
import { awards, certifications, experienceTable } from "../data/site";

const columns = ["Company", "Position", "Duration", "Location", "Type"];

export default function Experience() {
	return (
		<>
			<PageHeader
				center={false}
				eyebrow="Career history"
				title="Experience"
				subtitle="My professional journey, credentials, and recognition."
				action={<Button href="/resume.pdf" download>⬇ Download Resume</Button>}
			/>

			<Section padding="pt-14 pb-8">
				<SectionHeading center={false} eyebrow="Work history" title="Professional Experience" />
				<Card className="overflow-hidden">
					<div className="overflow-x-auto">
						<table className="w-full min-w-160 text-left text-sm">
							<thead className="bg-ink text-white">
								<tr>
									{columns.map((c) => (
										<th key={c} className="px-6 py-4 font-medium">{c}</th>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{experienceTable.map((row) => (
									<tr key={row.company}>
										<td className="px-6 py-4 font-medium text-ink">{row.company}</td>
										<td className="px-6 py-4 text-gray-500">{row.position}</td>
										<td className="px-6 py-4 text-gray-500">{row.duration}</td>
										<td className="px-6 py-4 text-gray-500">{row.location}</td>
										<td className="px-6 py-4"><Tag variant="brand">{row.type}</Tag></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Card>
			</Section>

			<Section padding="py-8">
				<SectionHeading center={false} eyebrow="Credentials" title="Certifications" />
				<div className="grid gap-5 md:grid-cols-3">
					{certifications.map((c) => (
						<Card key={c.title} className="flex items-start gap-4 p-5">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-xs font-bold text-brand">
								{c.abbr}
							</div>
							<div>
								<h3 className="text-sm font-semibold text-navy">{c.title}</h3>
								<p className="mt-1 text-xs font-medium text-brand">{c.issuer}</p>
								<p className="mt-0.5 text-xs text-gray-400">{c.date}</p>
							</div>
						</Card>
					))}
				</div>
			</Section>

			<Section padding="pt-8 pb-16">
				<SectionHeading center={false} eyebrow="Recognition" title="Awards & Honors" />
				<div className="grid gap-5 md:grid-cols-2">
					{awards.map((a) => (
						<Card key={a.title} className="p-6">
							<div className="flex items-start justify-between gap-3">
								<h3 className="font-semibold text-navy">{a.title}</h3>
								<span className="shrink-0 text-xs text-gray-400">{a.date}</span>
							</div>
							<p className="mt-1 text-xs font-semibold text-brand">{a.org}</p>
							<p className="mt-3 text-sm leading-relaxed text-gray-500">{a.text}</p>
						</Card>
					))}
				</div>
			</Section>
		</>
	)
}