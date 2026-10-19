import { useState } from "react";
import PageHeader from "../components/layout/PageHeader";
import Section from "../components/layout/Section";
import { projectFilters, projects } from "../data/site";
import ProjectCard from "../components/cards/ProjectCard";

export default function Projects() {
	const [filter, setFilter] = useState("All");

	const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

	return (
	<>
		<PageHeader
			eyebrow="Portfolio"
			title="My Projects"
			subtitle="A collection of work that demonstrates my skills across the full development stack."
		/>
		<Section>
			<div className="mb-10 flex flex-wrap justify-center gap-2">
				{projectFilters.map((f) => (
					<button
						key={f}
						type="button"
						onClick={() => setFilter(f)}
						className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
							filter === f ? "bg-ink text-white" : "text-gray-600 hover:bg-gray-100"
						}`}
					>
						{f}
					</button>
				))}
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{visible.map((p) => (
					<ProjectCard key={p.id} project={p} />
				))}
			</div>
		</Section>
	</>
);
}