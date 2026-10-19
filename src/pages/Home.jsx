import { Link } from "react-router";
import Card from "../components/cards/Card";
import Section from "../components/layout/Section";
import SectionHeading from "../components/layout/SectionHeading";
import Button from "../components/ui/Button";
import Img from "../components/ui/Img";
import { aboutCards, projects, skillTags, stats, testimonials } from "../data/site";
import Tag from "../components/ui/Tag";
import ProjectCard from "../components/cards/ProjectCard";
import TestimonialCard from "../components/cards/TestimonialCard";

export default function Home() {
	const featured = projects.filter((p) => p.featured);

	return (
		<>
			<Section padding="py-12 md:py-20">
				<div className="grid items-center gap-12 md:grid-cols-2">
					<div>
						<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand">Available for hire</p>
						<h1 className="text-5xl font-extrabold leading-tight text-navy sm:text-6xl">
							Hi, I'm <br />Alex Carter
						</h1>
						<p className="mt-4 text-lg font-medium text-gray-700">Full-Stack Software Developer</p>
						<p className="mt-3 max-w-md text-gray-500">
							I build fast, accessible, and beautifully designed web applications. With 3+ years of experience across the full stack, I turn complex problems into elegant digital products.
						</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<Button to="/projects">View My Work</Button>
							<Button to="/contact" variant="outline" className="border-ink">Contact Me</Button>
						</div>
						<div className="mt-9 flex gap-8">
							{stats.map((s) => (
								<div key={s.label}>
									<p className="text-2xl font-bold text-navy">{s.value}</p>
									<p className="text-xs text-gray-500">{s.label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-sm md:max-w-none md:pl-10">
						<Img src="/images/alex.jpg" alt="Alex Carter" className="aspect-4/3 w-full rounded-2xl shadow-lg" />
						<span className="absolute -top-3 right-0 rounded-lg bg-white px-3 py-1 text-xs shadow-md">San Francisco, CA</span>
						<span className="absolute -bottom-3 left-2 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white shadow-md md:left-12">Open to work</span>
					</div>
				</div>
			</Section>

			<Section bg="soft">
				<SectionHeading
					eyebrow="Who I am"
					title="A Little About Me"
					subtitle="I'm passionate about writing clean, maintainable code and crafting experiences that users genuinely enjoy."
				/>
				<div className="grid gap-5 md:grid-cols-3">
					{aboutCards.map((c) => (
						<Card key={c.title} className="p-6">
							<h3 className="mb-2 font-semibold text-navy">{c.title}</h3>
							<p className="text-sm leading-relaxed text-gray-500">{c.text}</p>
						</Card>
					))}
				</div>
				<p className="mt-8 text-center">
					<Link to="/about" className="text-sm font-semibold text-ink hover:text-brand">Learn more about me →</Link>
				</p>
			</Section>

			<Section>
				<SectionHeading
					eyebrow="Technical skills"
					title="What I Work With"
					subtitle="A snapshot of the tools and technologies I use to build modern web applications."
				/>
				<div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
					{skillTags.map((s) => (
						<Tag key={s} variant="brand" className="px-4 py-1.5">{s}</Tag>
					))}
				</div>
			</Section>

			<Section bg="soft">
				<SectionHeading
					eyebrow="My work"
					title="Featured Projects"
					subtitle="A selection of projects that showcase my skills across the full development stack."
				/>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{featured.map((p) => (
						<ProjectCard key={p.id} project={p} compact />
					))}
				</div>
				<div className="mt-10 text-center">
					<Button to="/projects">View All Projects</Button>
				</div>
			</Section>

			<Section>
				<SectionHeading
					eyebrow="Testimonials"
					title="What Clients Say"
					subtitle="Feedback from people I've had the pleasure of working with."
				/>
				<div className="grid gap-5 md:grid-cols-3">
					{testimonials.map((t) => (
						<TestimonialCard key={t.name} {...t} />
					))}
				</div>
			</Section>

			<Section bg="dark" padding="py-16 text-center">
				<h2 className="text-3xl font-bold sm:text-4xl">Let's Work Together</h2>
				<p className="mx-auto mt-3 max-w-lg text-orange-200">
					I'm currently available for freelance projects and full-time opportunities. Let's build something great.
				</p>
				<Button to="/contact" variant="brand" className="mt-7">Get In Touch</Button>
			</Section>
		</>
	)
}