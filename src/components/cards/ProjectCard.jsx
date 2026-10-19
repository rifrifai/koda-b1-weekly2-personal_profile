import Button from "../ui/Button";
import Img from "../ui/Img";
import Tag from "../ui/Tag";

export default function ProjectCard({project, compact = false}) {
	const { title, category, description, tags, image, github, demo } = project;

	return (
			<article className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
				<Img src={image} alt={title} className={`w-full ${compact ? "h-40" : "h-48"}`} />
				<div className="flex grow flex-col p-6">
					<div className="mb-3 flex items-start justify-between gap-3">
						<h3 className="text-lg font-semibold text-navy">{title}</h3>
						{!compact && <Tag variant="brand">{category}</Tag>}
					</div>
					<p className="mb-4 grow text-sm leading-relaxed text-gray-500">{description}</p>
					<div className="mb-5 flex flex-wrap gap-2">
						{tags.map((t) => (
							<Tag key={t}>{t}</Tag>
						))}
					</div>
					{!compact && (
						<div className="grid grid-cols-2 gap-3">
							<Button href={github} variant="outline">GitHub</Button>
							<Button href={demo}>Live Demo</Button>
						</div>
					)}
				</div>
			</article>
		);
}