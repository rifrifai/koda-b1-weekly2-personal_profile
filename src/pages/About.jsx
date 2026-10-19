import Card from "../components/cards/Card";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import SectionHeading from "../components/layout/SectionHeading";
import Img from "../components/ui/Img";
import SkillBar from "../components/ui/SkillBar";
import Tag from "../components/ui/Tag";
import { education, interests, skillBars, workExperience } from "../data/site";

export default function About() {

	return (
	<>
		<PageHeader
			eyebrow="Get to know me"
			title="About Alex"
			subtitle="A passionate developer who loves building things that make a real difference."
		/>

		<Section>
			<div className="grid items-center gap-10 md:grid-cols-[18rem_1fr]">
				<Img src="/images/alex.jpg" alt="Alex Carter" className="mx-auto aspect-square w-64 rounded-2xl shadow-lg md:w-full" />
				<div>
					<h2 className="mb-4 text-2xl font-bold text-navy">Building the web, one line at a time.</h2>
					<div className="space-y-4 leading-relaxed text-gray-500">
						<p>I'm Alex Carter, a full-stack software developer based in San Francisco, CA. I graduated from UC Berkeley with a B.S. in Computer Science in 2023 and have been building web products professionally ever since.</p>
						<p>My stack spans React and TypeScript on the frontend, Node.js and Python on the backend, and PostgreSQL and MongoDB for data. I care deeply about performance, accessibility, and writing code that my future self won't hate.</p>
						<p>When I'm not coding, you'll find me rock climbing at the local gym, experimenting with pour-over coffee, or reading science fiction. I'm actively looking for my next challenge.</p>
					</div>
					<div className="mt-5 flex flex-wrap gap-2">
						<Tag variant="outline">San Francisco, CA</Tag>
						<Tag variant="outline">Open to Roles</Tag>
						<Tag variant="outline">CS, UC Berkeley</Tag>
					</div>
				</div>
			</div>
		</Section>

		<Section bg="soft">
			<SectionHeading eyebrow="Education" title="Academic Background" />
			<div className="relative mx-auto max-w-3xl space-y-5 border-l-2 border-gray-200 pl-8">
				{education.map((e) => (
					<div key={e.title} className="relative">
						<span className="absolute -left-9.5 top-6 h-2.5 w-2.5 bg-ink" />
						<Card className="p-5">
							<div className="flex flex-wrap items-start justify-between gap-2">
								<h3 className="font-semibold text-navy">{e.title}</h3>
								<Tag variant="brand">{e.date}</Tag>
							</div>
							<p className="mt-1 text-xs font-medium text-brand">{e.place}</p>
							<p className="mt-2 text-sm text-gray-500">{e.text}</p>
						</Card>
					</div>
				))}
			</div>
		</Section>

		<Section>
			<SectionHeading eyebrow="Career" title="Work Experience" />
			<div className="mx-auto max-w-3xl space-y-5">
				{workExperience.map((w) => (
					<Card key={w.title} className="p-6">
						<div className="flex flex-wrap items-start justify-between gap-2">
							<h3 className="font-semibold text-navy">{w.title}</h3>
							<Tag>{w.date}</Tag>
						</div>
						<p className="mt-1 text-xs text-ink">{w.place}</p>
						<ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-gray-500 marker:text-gray-300">
							{w.points.map((p) => (
								<li key={p}>{p}</li>
							))}
						</ul>
					</Card>
				))}
			</div>
		</Section>

		<Section bg="soft">
			<SectionHeading eyebrow="Skills" title="Technical Proficiency" />
			<div className="mx-auto grid max-w-3xl gap-x-8 gap-y-6 md:grid-cols-2">
				{skillBars.map((s) => (
					<SkillBar key={s.label} {...s} />
				))}
			</div>
		</Section>

		<Section>
			<SectionHeading
				eyebrow="Personal"
				title="Interests & Hobbies"
				subtitle="A few things I'm passionate about beyond the keyboard."
			/>
			<div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
				{interests.map((i) => (
					<Tag key={i} variant="gray" className="px-4 py-2">{i}</Tag>
				))}
			</div>
		</Section>
	</>
);
}