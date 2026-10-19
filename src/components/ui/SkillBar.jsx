export default function SkillBar({label, value}) {
	return (
		<div>
			<div className="mb-1.5 flex justify-between text-xs">
				<span className="font-medium text-ink">{label}</span>
				<span className="font-semibold text-brand">{value}%</span>
			</div>
			<div className="h-2 overflow-hidden rounded-full bg-gray-200">
				<div className="h-full rounded-full bg-ink" style={{ width: `${value}%` }} />
			</div>
		</div>
	);
}