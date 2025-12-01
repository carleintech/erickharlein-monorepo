export function StatsSection() {
	const stats = [
		{ label: "Years Experience", value: "8+" },
		{ label: "Projects Completed", value: "12+" },
		{ label: "Technologies", value: "20+" },
		{ label: "Active Systems", value: "12+" },
	];

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
			{stats.map((stat) => (
				<div key={stat.label} className="text-center space-y-2">
					<div className="text-4xl font-bold text-primary">{stat.value}</div>
					<div className="text-sm text-muted-foreground">{stat.label}</div>
				</div>
			))}
		</div>
	);
}
