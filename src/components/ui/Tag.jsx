const styles = {
	gray: "bg-gray-100 text-gray-600",
	brand: "bg-brand/10 text-brand",
	outline: "border border-gray-200 bg-white text-gray-700",
}

export default function Tag({ variant = "gray", className = "", children }) {
	return (
		<span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles[variant]} ${className}`}>
			{children}
		</span>
	);
}