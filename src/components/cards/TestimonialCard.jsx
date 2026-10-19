import Card from "./Card";

export default function TestimonialCard({quote, name, role}) {
	const initials = name.split(" ").map((w) => w[0]).join("");
	
	return (
		<Card className="flex flex-col bg-soft p-6">
			<p className="grow text-sm italic leading-relaxed text-gray-500">"{quote}"</p>
			<div className="mt-5 flex items-center gap-3">
				<div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
					{initials}
				</div>
				<div>
					<p className="text-sm font-semibold text-navy">{name}</p>
					<p className="text-xs text-gray-400">{role}</p>
				</div>
			</div>
		</Card>
	);
}